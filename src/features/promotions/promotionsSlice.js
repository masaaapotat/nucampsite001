import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

export const selectFeaturedPromotion = () => {
    // looks for the first item where the featured promotion is set to true
    return PROMOTIONS.find((promotion) => promotion.featured);
};