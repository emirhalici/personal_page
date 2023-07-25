type Route = {
  path: string;
  name: string;
};

const rootRoute = { path: '/', name: 'Home' };
const postsRoute = { path: '/posts', name: 'Posts' };
const aboutRoute = { path: '/about', name: 'About' };
const linksRoute = { path: '/links', name: 'Links' };
const mediaRoute = { path: '/media', name: 'Media' };

const routeNames = {
  root: rootRoute,
  posts: postsRoute,
  about: aboutRoute,
  links: linksRoute,
  media: mediaRoute,
};

const allRoutes: Route[] = Object.values(routeNames);

export { routeNames, allRoutes };
