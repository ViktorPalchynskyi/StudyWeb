import ThemeButton from './ThemeButton';

export default function Toolbar({ changeTheme }) {
   return (
      <ThemeButton onClick={changeTheme}>
         Change Theme
      </ThemeButton>
   )
}