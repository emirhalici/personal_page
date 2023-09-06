import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import { allRoutes } from '~/constants/RouteNames';
import { PropsWithChildren } from 'react';

export default function NavBar() {
  const activePath = useLocation().pathname;

  const links = allRoutes.map((r) => {
    const isActive = r.path === activePath;

    return (
      <NavButton path={r.path} isActive={isActive} openInNewTab={false} key={r.path}>
        {r.name}
      </NavButton>
    );
  });

  links.push(
    <NavButton path={dartDateFormatterUrl()} isActive={false} openInNewTab={true}>
      Dart Date Formatter
    </NavButton>,
  );

  return (
    <div className='row-flex margin-vertical-high'>
      <nav className='page-fixed-width-root'>
        <ul className='navbar_list '>{links}</ul>
      </nav>
    </div>
  );
}

const dartDateFormatterUrl = () => {
  const url = window.location;
  if (['www.emirhalici.com', 'www.emir.bio'].includes(url.hostname)) {
    const [_www, ...rest] = url.hostname.split('.');
    return `${url.protocol}//dartdateformatter.${rest.join('.')}`;
  } else if (['emir.bio', 'emirhalici.com'].includes(url.hostname)) {
    return `${url.protocol}//dartdateformatter.${url.host}`;
  } else {
    return 'https://dartdateformatter.vercel.app/';
  }
};

type NavButtonProps = {
  path: string;
  isActive: boolean;
  openInNewTab: boolean;
};
function NavButton({
  path,
  isActive,
  openInNewTab,
  children,
}: NavButtonProps & PropsWithChildren<NavButtonProps>) {
  return (
    <li>
      <Link
        to={path}
        className={isActive ? 'active-link' : undefined}
        target={openInNewTab ? '_blank' : undefined}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    </li>
  );
}
