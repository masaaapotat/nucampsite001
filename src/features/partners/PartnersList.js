import { useSelector } from 'react-redux';
import {Col} from 'reactstrap';
import Partner from '../../components/Partner';
import {selectAllPartners} from '../partners/partnersSlice';


const PartnersList = () => {
    const partners= useSelector(selectAllPartners); //selectAllPartners();
  return (
    <Col className='mt-4'>
        {
            partners.map((partner)=>{
                return(
                    <div className='d-flex mb-5'  key={partner.id}>
                        <Partner partner={partner}/>
                    </div>
                )
            })
        }
    </Col>
  )
}

export default PartnersList