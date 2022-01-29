import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // get the user's current location (latitude and longitude)
  useEffect(() => {
    getCurrentLocation();
    return () => {
      setCoordinates({});
    };
  }, []);

  // SOLUTION for React useEffect causing: Can't perform a React state update on an unmounted component
  // return () => {
  //   setCoordinates({});
  // };
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  };

  //  []) end of the useEffect --> dependency array
  // The dependency array basically tells the hook to "only trigger when the dependency array changes".
  // re-run every time the map changes [coordinates, bounds]
  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      // console.log(bounds);
      getPlacesData(bounds.sw, bounds.ne).then((resp) => {
        console.log(resp);
        setPlaces(resp);
      });
    }
  }, [bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            setBounds={setBounds}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
