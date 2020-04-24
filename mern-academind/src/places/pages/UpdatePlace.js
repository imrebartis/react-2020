import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';

import './PlaceForm.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'one of the most famous sky scraper in the world',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/12/08/00/40/empire-state-building-1081929_1280.jpg',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lng: -73.985648,
      lat: 40.748612,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Stonehenge',
    description: 'one of the most famous prehistoric monument in the world',
    imageUrl:
      'https://cdn.pixabay.com/photo/2013/04/08/14/22/stonehenge-101801_1280.jpg',
    address: 'Salisbury SP4 7DE, United Kingdom',
    location: {
      lng: -1.826215,
      lat: 51.179487,
    },
    creator: 'u2',
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place.</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() =>{}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={() =>{}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>Update place</Button>
    </form>
  );
};

export default UpdatePlace;
