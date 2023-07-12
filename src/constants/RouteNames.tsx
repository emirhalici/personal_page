type Route = {
  path: string;
  name: string;
};

const rootRoute = { path: '/', name: 'Home' };
const postsRoute = { path: '/posts', name: 'Posts' };
const aboutRoute = { path: '/about', name: 'About' };
const linksRoute = { path: '/links', name: 'Links' };

const routeNames = {
  root: rootRoute,
  posts: postsRoute,
  about: aboutRoute,
  links: linksRoute,
};

const allRoutes: Route[] = [rootRoute, postsRoute, aboutRoute, linksRoute];

export { routeNames, allRoutes };
