import { Route, Routes } from 'react-router-dom';
import PostsPage from './pages/PostsPage/PostsPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import NavBar from './components/NavBar/NavBar';
import routeNames from './constants/RouteNames';
import NoPage from './pages/NoPage/NoPage';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={routeNames.root} element={<HomePage />} />
        <Route path={routeNames.posts} element={<PostsPage />} />
        <Route path={routeNames.about} element={<AboutPage />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </>
  );
}
