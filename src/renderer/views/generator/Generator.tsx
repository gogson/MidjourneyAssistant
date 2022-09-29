/* eslint-disable react/no-array-index-key */
import './Generator.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PromptSection from '../components/PromptSection/PromptSection';
import Prompt from './Prompt';

const Generator = () => {
  return (
    <div className="generator">
      <Container fluid className="pt-1">
        <Row>
          <Col xs={3} className="p-1">
            <h6>Aspect Ratio</h6>
            <Container fluid>
              <Row>
                <PromptSection sectionName="AspectRatios" size={6} />
              </Row>
            </Container>
          </Col>
          <Col xs={6} className="p-1">
            <h6>Lighting</h6>
            <Container fluid>
              <Row>
                <PromptSection sectionName="Lighting" size={6} />
              </Row>
            </Container>
          </Col>
          <Col xs={3} className="p-1">
            <h6>Midjourney Styling</h6>
            <PromptSection sectionName="MJStyling" size={12} />
            <h6 className="mt-1">Midjourney Chaos</h6>
            <PromptSection sectionName="MJChaos" size={12} />
          </Col>
          <Col xs={3} className="p-1" />
        </Row>
        <Prompt />
      </Container>
      <Container fluid>
        <Row>
          <Col xs={12} className="p-1">
            <h6>Common options</h6>
            <Container fluid>
              <Row>
                <PromptSection sectionName="Common" size={6} />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Generator;
