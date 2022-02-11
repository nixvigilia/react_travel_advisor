## Travel companion app using google maps

- Ability to search for places
- Fetching restaurants, hotels, and attractions based on location from specialize rapidApis
- Data filtering and much more
- [Travel Advisor API powered by Rapid API](https://rapidapi.com/apidojo/api/travel-advisor)
- [Open Weather Map API powered by Rapid API](https://rapidapi.com/community/api/open-weather-map).

![Screenshot 2022-02-11 113514](https://user-images.githubusercontent.com/34468449/153533853-c71d30c1-d9d0-4dd1-a63b-02ef7a2fd7c4.png)

## Installation and Setup Instructions

#### Example:

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

RAPID_API_KEY

- Create an account in [Rapid API](https://rapidapi.com), copy and paste your API key on .env file.

REACT_APP_GOOGLE_MAPS_API_KEY

- Create an account in [Google Cloud Platform](https://console.cloud.google.com), create credentials and get the API key
- Enable APIs
  -- Maps Javascript API
  -- Places API

  If you get: "This page can't load Google Maps correctly." and "For development purposes only." that means that you have to enter your billing details. Google requires that to verify your identity and distinguish actual people from robots. You'll be getting free $200 worth of API requests indefinitely, and you will NOT be charged.

## Live Demo

https://nixoy-travel-advisor.netlify.app/

## My key learnings from this project

- file structure
- hooks and refs
- improve security by using environment variables
- creating user interfaces using material ui
- google maps api
- fetching data from rapid api
- real-time weather

## Technologies Used

- @material-ui/core
- @material-ui/icons
- @material-ui/lab
- @react-google-maps/api
- axios
- google-map-react
- snazzymaps.com
