import './Settings.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Prompt from '../generator/Prompt';

const Settings = () => {
  const [theme, setTheme] = useState(window.electron.store.get('theme') || '');

  const selectTheme = (event) => {
    setTheme(event.target.value);
    window.electron.store.set('theme', event.target.value);
    window.electron.refreshTheme();
  };

  const clearHistory = () => {
    window.electron.store.clearHistory();
  };

  return (
    <div className="layout">
      <Container fluid>
        <Row>
          <Col xs={4} className="pl-4 pt-3 pr-3">
            <h6>Select theme</h6>
            <Form.Select
              aria-label="Default select example"
              className="form-control"
              value={theme}
              onChange={selectTheme}
            >
              <option value="">Default</option>
              <option value="theme-dark-red">Dark Red</option>
              <option value="theme-dark-yellow">Dark Yellow</option>
              <option value="theme-dark-purple">Dark Purple</option>
              <option value="theme-dark-blue">Dark Blue</option>
              <option value="theme-dark-green">Dark Green</option>
              <option value="theme-discord">Dark Discord</option>
              <option value="theme-discord-light">Light Discord</option>
              <option value="theme-sunlight">Sunlight</option>
              <option value="theme-grayscale">Light Grayscale</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="pl-4 pt-3 pr-3">
            <h6>History</h6>
            <Button onClick={clearHistory} variant="warning" className="mr-3">
              Clear prompt history
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="pl-4 pt-3 pr-3">
            <h6>About</h6>
            <p>This app is not affiliated with Midjourney.</p>
            <p>
              <strong>Any bug ? Suggestion or feedback ?</strong>
            </p>
            <Button
              target="_blank"
              href="https://github.com/gogson/MidjourneyAssistant"
              variant="dark"
              className="mr-3"
            >
              Create an issue on Github
            </Button>
            <Button
              target="_blank"
              href="https://discord.gg/cZsBuS8RRM"
              variant="dark"
            >
              Join my Discord
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Settings;
