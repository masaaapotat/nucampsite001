import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
}

// export const selectRandomCampsite = () => {
//     // wrong tessy return Math.floor(Math.random() * selectAllCampsites.length);
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// }

//function takes an argument of id and returns the first object in the CAMPSITES array with a matching id
export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
}
// find expects a single argument of a function and this function should be  a testing function, whenever this function returns a truthy value then our test has passed
// we wamt to return a featured object w a return value of true
export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};