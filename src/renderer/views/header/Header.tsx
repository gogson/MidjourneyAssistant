import './Header.css';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const closeApp = () => {
  window.close();
};

const maximizeApp = () => {
  if (window.outerWidth === 1920) window.resizeTo(1024, 768);
  else window.resizeTo(1920, 1080);
};

const Header = () => {
  return (
    <header>
      <div className="headerCloseButton">
        <NavLink
          aria-hidden="true"
          className="d-inline-block mr-3"
          to="/settings"
        >
          <FontAwesomeIcon icon={['fas', 'cog']} />
        </NavLink>
        <div
          onClick={maximizeApp}
          aria-hidden="true"
          className="d-inline-block mr-3"
        >
          <FontAwesomeIcon icon={['fas', 'window-maximize']} />
        </div>
        <div onClick={closeApp} aria-hidden="true" className="d-inline-block">
          <FontAwesomeIcon icon={['fas', 'times']} size="lg" />
        </div>
      </div>
      <div className="headerBackground draggable" />
      {/* <div className="headerOverlay" /> */}
      <div className="headerBrand d-inline-block">
        <Image
          className="d-inline draggable animate__animated animate__heartBeat"
          src="https://media.discordapp.net/attachments/1017820087572496574/1024766539464970250/image_16.png?width=40&height=40"
        />
        <h6 className="d-inline ml-1 draggable">
          Midjourney <b>Assistant</b>
        </h6>
      </div>
      <div className="headerMenu d-inline-block">
        <NavLink activeClassName="is-active" to="/">
          Generator
        </NavLink>
        <NavLink activeClassName="is-active" to="/artstyle">
          Art Style
        </NavLink>
        <NavLink activeClassName="is-active" to="/history">
          History
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
