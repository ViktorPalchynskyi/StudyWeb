import React, { useContext, useMemo, useState } from 'react';

const themes = {
   light: {
      type: 'light',
      backgroundColor: '#D7D3CB',
      color: '#783114 ',
   },
   dark: {
      type: 'dark',
      backgroundColor: '#282c34',
      color: '#87ceeb',
   }
};

const ThemeContext = React.createContext(null);

const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState(themes.light);
   const value = useMemo(() => [theme, setTheme], [theme]);
   return (
      <ThemeContext.Provider value={value}>
         {children}
      </ThemeContext.Provider>
   )
};

const useTheme = () => {
   const context = useContext(ThemeContext);
   if (!context) {
      throw new Error('useTheme must be used withing a ThemeContext');
   }
   return context;
};

const toggleColor = type => type === 'light' ? themes.dark : themes.light;

export {
   ThemeProvider,
   useTheme,
   toggleColor,
}
