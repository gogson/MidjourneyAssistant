import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PromptSection from '../components/PromptSection/PromptSection';

const Artstyle = () => {
  return (
    <div className="layout">
      <Container fluid>
        <Row>
          <Col xs={12} className="pl-4 pt-3 pr-3">
            <Row>
              <PromptSection sectionName="ArtStyle" size={3} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Artstyle;
