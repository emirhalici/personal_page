type Route = {
  path: string;
  name: string;
};

const rootRoute: Route = { path: '/', name: 'Home' };
const postsRoute: Route = { path: '/posts', name: 'Posts' };
const aboutRoute = { path: '/about', name: 'About' };

const routeNames = {
  root: rootRoute,
  posts: postsRoute,
  about: aboutRoute,
};

const allRoutes: Route[] = [rootRoute, postsRoute, aboutRoute];

export { routeNames, allRoutes };
