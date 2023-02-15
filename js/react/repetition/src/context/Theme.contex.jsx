import React from 'react';

const themes = {
   light: {
      backgroundColor: '#D7D3CB',
      color: '#87ceeb',
   },
   dark: {
      backgroundColor: '#282c34',
      color: '#783114',
   }
};

const ThemeContext = React.createContext(themes.light);

const ThemeProvidr = ({ childer }) => {

};