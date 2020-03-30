import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "one of the most famous sky scraper in the world",
    imageUrl:
      "https://www.publicdomainpictures.net/pictures/20000/velka/empire-state-building.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.748612,
      lng: -73.985648
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Stonehenge",
    description: "one of the most famous prehistoric monument in the world",
    imageUrl:
      "https://cdn.pixabay.com/photo/2013/04/08/14/22/stonehenge-101801_1280.jpg",
    address: "Salisbury SP4 7DE, United Kingdom",
    location: {
      lat: 51.179487,
      lng: -1.826215
    },
    creator: "u2"
  }
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
