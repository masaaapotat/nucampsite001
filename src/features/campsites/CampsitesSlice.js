import {createSlice} from '@reduxjs/toolkit'
import { CAMPSITES } from "../../app/shared/CAMPSITES";
// SEtting up an initial state object that will pass the create slice
const initialState = {
  campsitesArray: CAMPSITES,
};
// the variable is set to return the object called from campsiteslcie
const campsitesSlice = createSlice({
    // pasing data to create slice and we do that in the form on an object
    name: 'campsites',
    initialState
});
// the campsite slice object that is created will automatically have a slice reducer method attached to it
export const campsitesReducer = campsitesSlice.reducer;
export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};

// export const selectRandomCampsite = () => {
//     // wrong  return Math.floor(Math.random() * selectAllCampsites.length);
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// }

//function takes an argument of id and returns the first object in the CAMPSITES array with a matching id
export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsitesArray.find(
      (campsite) => campsite.id === parseInt(id)
  );
}
// find expects a single argument of a function and this function should be  a testing function, whenever this function returns a truthy value then our test has passed
// we wamt to return a featured object w a return value of true
export const selectFeaturedCampsite = (state) => {
  return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};
