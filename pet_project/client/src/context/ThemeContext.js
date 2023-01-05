import { THEMES } from '../themes';
import React from "react";

export const ThemeContext = React.createContext({
   theme: THEMES.light,
   toggleTheme: () => {},
});