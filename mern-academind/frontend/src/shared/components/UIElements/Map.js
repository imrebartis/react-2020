import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import {REACT_APP_MAPS_API_KEY} from "../../../config.js";

import "./Map.css";

const Map = props => {
  const { center, zoom } = props;
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = REACT_APP_MAPS_API_KEY;
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center,
      zoom
    });

    new mapboxgl.Marker({ position: center, map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
