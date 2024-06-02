import {PARTNERS} from '../../app/shared/PARTNERS';



export const selectAllPartners = () => {
  return PARTNERS;
  
}

// The selectFeaturedPartner function
export const selectFeaturedPartner = () => {
    return PARTNERS.find(partner => partner.featured);
};
  
