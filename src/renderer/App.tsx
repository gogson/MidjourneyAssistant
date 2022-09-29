import './App.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Generator from './views/generator/Generator';
import Header from './views/header/Header';
import Artstyle from './views/artstyle/Artstyle';
import Settings from './views/settings/Settings';
import History from './views/history/History';

// FontAwesome
library.add(fas);

export default function App() {
  const [theme, setTheme] = useState(window.electron.store.get('theme') || '');

  window.electron.onRefreshTheme(() => {
    setTheme(window.electron.store.get('theme'));
  });

  return (
    <Router>
      <div id="layout" className={`border-radius ${theme}`}>
        <Container fluid className="p-0 m-0 border-radius">
          <Row>
            <Col xs={12} className="p-0">
              <Header />
            </Col>
            <Col xs={12} className="p-4 content">
              <Routes>
                <Route path="/" element={<Generator />} />
                <Route path="/artstyle" element={<Artstyle />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/history" element={<History />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}
