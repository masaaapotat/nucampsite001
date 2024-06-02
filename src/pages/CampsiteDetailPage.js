import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/CampsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    // returns a campsite object from the campsite array that matches this id
    const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
            </Row>
        </Container>
    );
};
export default CampsiteDetailPage;
