import { Link } from "react-router";
import ToggleMobileNav from "../pages/toggleMobileNav";

function MobileNav() {
  return (
    <ul id="mobile-nav-menu" className="menu inactive">
      <li>
        <Link onClick={ToggleMobileNav} className="menuItem" to="/overview">
          Overview
        </Link>
      </li>
      <li>
        <Link onClick={ToggleMobileNav} className="menuItem" to="/notes">
          Notes
        </Link>
      </li>
      <li>
        <Link onClick={ToggleMobileNav} className="menuItem" to="/articles">
          Articles
        </Link>
      </li>
      <li>
        <Link onClick={ToggleMobileNav} className="menuItem" to="/projects">
          Projects
        </Link>
      </li>
      <li>
        <Link onClick={ToggleMobileNav} className="menuItem" to="/me">
          About me
        </Link>
      </li>
    </ul>
  );
}

export default MobileNav;
