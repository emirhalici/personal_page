import { Route, Routes } from 'react-router-dom';
import PostsPage from './pages/PostsPage/PostsPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import NavBar from './components/NavBar/NavBar';
import NoPage from './pages/NoPage/NoPage';
import { routeNames } from './constants/RouteNames';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={routeNames.root.path} element={<HomePage />} />
        <Route path={routeNames.posts.path} element={<PostsPage />} />
        <Route path={routeNames.about.path} element={<AboutPage />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </>
  );
}
