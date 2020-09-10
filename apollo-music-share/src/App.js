import React, { createContext, useContext, useReducer } from 'react';
import Header from './components/Header';
import AddSong from './components/AddSong';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import { Grid, useMediaQuery, Hidden } from '@material-ui/core';
import songReducer from './reducer';

export const SongContext = createContext({
  song: {
    id: '52c99ff9-fba4-49a0-b96a-95e00e640bff',
    title: 'Monolingual Irish Speaker',
    artist: 'unknown',
    thumbnail: 'http://img.youtube.com/vi/UP4nXlKJx_4/0.jpg',
    url: 'https://www.youtube.com/watch?v=UP4nXlKJx_4',
    duration: 297,
  },
  isPlaying: false,
});

function App() {
  const initialSongState = useContext(SongContext);
  const [state, dispatch] = useReducer(songReducer, initialSongState);
  const greaterThanSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <SongContext.Provider value={{ state, dispatch }}>
      <>
        <Hidden only="xs">
          <Header />
        </Hidden>
        <Grid container spacing={3}>
          <Grid
            style={{
              paddingTop: greaterThanSm ? 80 : 10,
            }}
            item
            xs={12}
            md={7}
          >
            <AddSong />
            <SongList />
          </Grid>
          <Grid
            style={
              greaterThanMd
                ? {
                    position: 'fixed',
                    width: '100%',
                    right: 0,
                    top: 70,
                  }
                : {
                    position: 'fixed',
                    width: '100%',
                    left: 0,
                    bottom: 0,
                  }
            }
            item
            xs={12}
            md={5}
          >
            <SongPlayer />
          </Grid>
        </Grid>
      </>
    </SongContext.Provider>
  );
}

export default App;
