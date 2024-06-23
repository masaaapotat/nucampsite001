import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { baseUrl } from "../../app/shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageURL";



export const fetchCampsites = createAsyncThunk(
  // string for action type, asyc function
  'campsites/fetchCampsites',
  async () => {
      const response = await fetch(baseUrl + 'campsites');
      if (!response.ok) {
          return Promise.reject('Unable to fetch, status: ' + response.status);
      }
      const data = await response.json();
      return data;
  }
);

// SEtting up an initial state object that will pass the create slice
const initialState = {
  campsitesArray: [],
  isLoading: true,
  errMsg: ''
};
// the variable is set to return the object called from campsiteslcie
const campsitesSlice = createSlice({
  name: 'campsites',
  initialState,
  reducers: {},
  extraReducers: {
      [fetchCampsites.pending]: (state) => {
          state.isLoading = true;
      },
      [fetchCampsites.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.errMsg = '';
          state.campsitesArray = mapImageURL(action.payload);
      },
      [fetchCampsites.rejected]: (state, action) => {
          state.isLoading = false;
          state.errMsg = action.error ? action.error.message : 'Fetch failed';
      }
  }
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
  return {
      featuredItem: state.campsites.campsitesArray.find(
          (campsite) => campsite.featured
      ),
      isLoading: state.campsites.isLoading,
      errMsg: state.campsites.errMsg
  };
};