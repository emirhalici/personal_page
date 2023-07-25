import { Route, Routes } from 'react-router-dom';
import PostsPage from './pages/PostsPage/PostsPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import NavBar from './components/NavBar/NavBar';
import NoPage from './pages/NoPage/NoPage';
import { routeNames } from './constants/RouteNames';
import Footer from './components/Footer/Footer';
import LinksPage from './pages/LinksPage/LinksPage';
import MediaPage from './pages/MediaPage/MediaPage';
import { ThemeContextProvider } from './theme/ThemeContext';
import { useThemeState } from './theme/useTheme';

export default function App() {
  const [isDarkMode, themeState, setThemeState] = useThemeState();

  return (
    <ThemeContextProvider
      isDarkMode={isDarkMode}
      themeState={themeState}
      setThemeState={setThemeState}
    >
      <div className='app-root'>
        <NavBar />
        <div className='flex-1'>
          <Routes>
            <Route path={routeNames.root.path} element={<HomePage />} />
            <Route path={routeNames.posts.path} element={<PostsPage />} />
            <Route path={routeNames.about.path} element={<AboutPage />} />
            <Route path={routeNames.links.path} element={<LinksPage />} />
            <Route path={routeNames.media.path} element={<MediaPage />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}
