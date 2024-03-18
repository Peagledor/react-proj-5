import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "./slices/potentialCountriesSlice.js";
import displayCountryReducer from "./slices/displayCountrySlice.js";

export default configureStore({
    reducer: {
        potentialCountriesSlice: potentialCountriesReducer,
        displayedCountry: displayCountryReducer
    },
});

 