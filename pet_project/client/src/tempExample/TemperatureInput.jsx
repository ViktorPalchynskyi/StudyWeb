import React from "react";

const scaleNames = {
   c: 'Celsius',
   f: 'Farengate',
};

class TemperatureInput extends React.Component {
   handleChange = (event) => this.props.onTemperatureChange(event.target.value);

   render() {
      const scale = this.props.scale;
      const temperature = this.props.temperature;
      return (
         <fieldset>
            <legend>Type temperature in {scaleNames[scale]}</legend>
            <input value={temperature} onChange={this.handleChange} />
         </fieldset>
      );
   }
}

export default TemperatureInput;