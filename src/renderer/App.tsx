import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Sidebar } from './views/sidebar/Sidebar';
import { Prompt } from './prompt/Prompt'
import { Generator } from './views/pages/generator/Generator';

const Rendering = () => {
  return (
    <div className="layout">
      <h2>Rendering</h2>
      <div className='block'>
        This tool helps you generate full prompts.
        <br />
        Set your preferences, enter a prompt to imagine and paste it to MD !
      </div>
    </div>
  );
};


export default function App() {
  return (
    <Router>
      <div id="page">
        <div id="sideBar">
          <Sidebar />
        </div>
        <div id="content">
          <Routes>
            <Route path="/" element={<Generator />} />
            <Route path="/rendering" element={<Rendering />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
