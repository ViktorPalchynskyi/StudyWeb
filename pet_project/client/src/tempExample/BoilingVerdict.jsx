import React from "react";

class BoilingVerdict extends React.Component {
   render() {
      if (this.props.celsius >= 100) {
         return <p>Water will boil.</p>;
      }
      return <p>Water will not boil.</p>;
   }
}

export default BoilingVerdict;