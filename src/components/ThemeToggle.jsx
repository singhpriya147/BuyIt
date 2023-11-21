import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';
import {useContext} from 'react';


export default function ThemeToggle() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      type='button'
      // className={styles.button}
      aria-label={theme}
      aria-live='polite'
      title='toggles light and dark mode'
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <BsMoonStarsFill aria-hidden size={24} />
      ) : (
        <BsSunFill aria-hidden size={24} />
      )}
    </button>
  );
}
