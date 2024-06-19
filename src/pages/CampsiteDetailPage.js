import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/campsites/CampsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams();
  // returns a campsite object from the campsite array that matches this id
  const campsite = useSelector(selectCampsiteById(campsiteId));
  console.log("campsite", campsite);
  return (
    <Container>
      <SubHeader current={campsite.name} detail={true} />
      <Row>
        <CampsiteDetail campsite={campsite} />
        <CommentsList campsiteId={campsiteId} />
      </Row>
    </Container>
  );
};
export default CampsiteDetailPage;
