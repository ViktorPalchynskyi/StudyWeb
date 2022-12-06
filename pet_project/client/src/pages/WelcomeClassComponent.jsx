import React from "react";

class WelcomeClassComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = { date: new Date() };
   }

   componentDidMount() {
      this.timerID = setInterval(
         () => this.tick(),
         1000
      );
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
      return (
         <div>
            <h2>Hello there!</h2>
            <p>{this.state.date.toLocaleTimeString()}</p>
         </div>
      )
   }
}

export default WelcomeClassComponent;