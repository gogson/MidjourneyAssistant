import {Link} from "react-router-dom";

exports.Sidebar = () => {
    return (
      <header>
        <div className="d-flex">
            <img src="https://media.discordapp.net/attachments/1017820087572496574/1024766539464970250/image_16.png?width=50&height=50" />
            <h4>Midjourney <b>Assistant</b></h4>
        </div>
        <hr />
        <ul>
            <li>
                <Link to="/">Generate</Link>
            </li>
        </ul>
        <hr />
        <h5>Preferences</h5>
        <ul>
            <li><Link to="/rendering">Rendering</Link></li>
            <li>Lighting</li>
            <li>Aspect ratio</li>
        </ul>
        <h5>Midjourney options</h5>
        <ul>
            <li>Style</li>
            <li>Chaos</li>
            <li>Algorithms</li>
        </ul>
      </header>
    );
  };