import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { THEMES } from "../themes";
import ThemeButton from "./contextExample/ThemeButton";
import Toolbar from "./contextExample/Toolbar";

class WelcomeClassComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = { date: new Date(), theme: THEMES.light };

      this.toggleTheme = () => {
         this.setState(state => ({
            theme:
               state.theme === THEMES.dark
                  ? THEMES.light
                  : THEMES.dark,
         }));
      };
   }

   componentDidMount() {
      // this.timerID = setInterval(
      //    () => this.tick(),
      //    1000
      // );
   }

   componentWillUnmount() {
      clearInterval(this.timerID);
   }

   tick() {
      this.setState({
         date: new Date()
      });
   }

   render() {
      console.log('THEME', this.state.theme);
      return (
         <div>
            <h2>Hello there!</h2>
            <p>{this.state.date.toLocaleTimeString()}</p>
            <ThemeContext.Provider value={this.state.theme}>
               <Toolbar changeTheme={this.toggleTheme} />
               <ThemeButton >
                  Click me
               </ThemeButton>
            </ThemeContext.Provider>
         </div>
      )
   }
}

export default WelcomeClassComponent;