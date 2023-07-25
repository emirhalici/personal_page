import { createContext } from 'react';
import { SetThemeState, ThemeState, defaultThemeData } from './useTheme';
import { PropsWithRequiredChildren } from '~/constants/Types';

const ThemeContext = createContext<[boolean, ThemeState, SetThemeState]>(defaultThemeData);

function ThemeContextProvider(
  props: {
    isDarkMode: boolean;
    themeState: ThemeState;
    setThemeState: SetThemeState;
  } & PropsWithRequiredChildren,
) {
  return (
    <ThemeContext.Provider value={[props.isDarkMode, props.themeState, props.setThemeState]}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
