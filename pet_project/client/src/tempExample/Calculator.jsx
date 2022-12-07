import React from "react";
import {
   toCelsius,
   toFahrenheit,
   tryConvert,
} from "../helpers/temperatureConvert";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends React.Component {
   constructor(props) {
      super(props);
      this.state = { scale: 'c', temperature: '' };
   }

   handleFahrenheitChange = (temperature) => this.setState({ scale: 'f', temperature });

   handleCelsiusChange = (temperature) => this.setState({ scale: 'c', temperature });

   render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
      return (
         <div>
            <TemperatureInput
               scale='f'
               temperature={fahrenheit}
               onTemperatureChange={this.handleFahrenheitChange}
            />
            <TemperatureInput
               scale='c'
               temperature={celsius}
               onTemperatureChange={this.handleCelsiusChange}
            />
            <BoilingVerdict
               celsius={celsius}
            />
         </div>
      );
   }
}

export default Calculator;