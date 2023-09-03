import './ThemeToggle.css';
import { useContext } from 'react';
import { BsSun } from 'react-icons/bs';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { MdNightlight } from 'react-icons/md';
import { ThemeContext } from '~/theme/ThemeContext';
import { ThemeState } from '~/theme/useTheme';

const lightIcon: JSX.Element = <BsSun />;
const darkIcon: JSX.Element = <MdNightlight />;
const systemIcon: JSX.Element = <HiOutlineDesktopComputer />;

export default function ThemeToggle() {
  return (
    <div className='theme-toggle'>
      <ThemeIconButton iconType='light' />
      <ThemeIconButton iconType='dark' />
      <ThemeIconButton iconType='system' />
    </div>
  );
}

type ThemeIconButtonProps = {
  iconType: ThemeState;
};
function ThemeIconButton({ iconType }: ThemeIconButtonProps) {
  const [_, themeState, setThemeState] = useContext(ThemeContext);

  const className = iconType === themeState ? 'theme-icon theme-icon-selected' : 'theme-icon';

  return (
    <button onClick={() => setThemeState(iconType)} className={className}>
      {getThemeIcon()}
    </button>
  );

  function getThemeIcon() {
    switch (iconType) {
      case 'light':
        return lightIcon;
      case 'dark':
        return darkIcon;
      case 'system':
        return systemIcon;
    }
  }
}
