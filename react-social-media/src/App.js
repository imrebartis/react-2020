import React, { useState, useEffect, useCallback, createContext} from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './PostList';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState('ddf');
  const [posts, setPosts] = useState([]);

  const handleAddPost =  useCallback((newPost) => {
    setPosts([newPost, ...posts]);
  }, [posts]);

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : 'Please log in';
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <UserContext.Provider value={user}>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddPost={handleAddPost} />
      <PostList posts={posts} />
    </UserContext.Provider>
  );
}

export default App;
