import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';
import {useContext} from 'react';
import { CiDark } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';
export default function ThemeToggle() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <
     
      
    >
      {theme === 'dark' ? (
        <CiDark aria-hidden size={24} onClick={toggleTheme} />
      ) : (
        <CiLight size={24}  onClick={toggleTheme}/>
      )}
    </>
  );
}
