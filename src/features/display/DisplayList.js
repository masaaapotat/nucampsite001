import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
// import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedCampsite } from "../campsites/CampsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]);
console.log('display items', items)
  return (
    <Row>
      {items.map((item, idx) => {
        return (
          //     {/* adding conditional rendering incase any of the featured object is set to false, so that it handles the error more gracefully */}

          // we first check the value of item if one of our selected functions t  select for the featured campsite promotion or partner doesnt find one that is feature it will return undefined which is a falsy value that will cause the && operator to short circuit  and prevent it form rendering anything to its right
          item && (
            <Col md className="m-1" key={idx}>
              <AnimatedDisplayCard item={item} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayList;
