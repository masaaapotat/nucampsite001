import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({ current, detail }) => {
  return (
    <Row>
      <Col>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          {/*conditional rendering with inline logical && operator 
          logica && operator performs short circuit evaluation it checks if left operand is truthy and if the left operand is falsy it doesnt check cos its automatically false */}
          {detail && (
            // if detail is true it returns a breadcumpitem
            <BreadcrumbItem>
              <Link to="/directory">Directory</Link>
            </BreadcrumbItem>
          )}
          <BreadcrumbItem active>{current}</BreadcrumbItem>
        </Breadcrumb>
        <h2>{current}</h2>
        <hr />
      </Col>
    </Row>
  );
};
export default SubHeader;
