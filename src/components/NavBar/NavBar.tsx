import { Link } from 'react-router-dom';
import './NavBar.css';
import routeNames from '~/constants/RouteNames';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={routeNames.root}>Home</Link>
        </li>
        <li>
          <Link to={routeNames.about}>About</Link>
        </li>
        <li>
          <Link to={routeNames.posts}>Blog Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
