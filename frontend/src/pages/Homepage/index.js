import {Link} from "react-router-dom";

import('./style.css');

function Homepage() {
    return (
      <>
        <h1>I'm</h1>

        <div className="link-blocks">
          <Link to="/seeker/login" className="link-block">Job Seeker</Link>
          <Link to="/admin" className="link-block">Admin</Link>
        </div>
      </>
    );
  }

  export default Homepage;
