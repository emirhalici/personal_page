import { useEffect } from 'react';
import useLocalStorage from '~/hooks/useLocalStorage';
const themeStateKey = 'themeStateKey';
type ThemeState = 'light' | 'dark' | 'system';
type SetThemeState = (themeState: ThemeState) => void;

function useThemeState(): [boolean, ThemeState, SetThemeState] {
  const [themeState, setThemeState] = useLocalStorage<ThemeState>(themeStateKey, 'system');

  useEffect(() => {
    const applyThemeChangesToDOM = () => {
      const darkMode = isDarkMode(themeState);
      console.log(`Applying, isDarkMode: ${darkMode}`);
      if (darkMode) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    };

    applyThemeChangesToDOM();
  }, [themeState]);

  return [isDarkMode(themeState), themeState, setThemeState];
}

function isDarkMode(themeState: ThemeState): boolean {
  const useSystemPreference = themeState === 'system';
  return useSystemPreference ? systemPrefersDarkMode() : themeState === 'dark';
}

function systemPrefersDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const defaultThemeData: [boolean, ThemeState, SetThemeState] = [
  isDarkMode('system'),
  'system',
  (_) => console.warn('ThemeContext using default state!'),
];

export type { ThemeState, SetThemeState };
export { useThemeState, defaultThemeData };
