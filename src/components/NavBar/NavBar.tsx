import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import { allRoutes } from '~/constants/RouteNames';

export default function NavBar() {
  const activePath = useLocation().pathname;

  const links = allRoutes.map((r) => {
    const isActive = r.path === activePath;

    return (
      <li key={r.path}>
        <Link to={r.path} className={isActive ? 'active-link' : undefined}>
          {r.name}
        </Link>
      </li>
    );
  });

  return (
    <nav className='page-fixed-width-root navbar'>
      <ul className='navbar_list'>{links}</ul>
    </nav>
  );
}
