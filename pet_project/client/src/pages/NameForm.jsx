import React from "react";

class NameForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         textValue: '',
         optionValue: 'apple',
      };
   }

   handleSubmit = (event) => {
      alert('Name is ' + this.state.textValue);
      alert('Name is ' + this.state.optionValue);
      event.pereventDefault();
   };

   handleTextChange = (event) => {
      this.setState({
         textValue: event.target.value
      });
   };

   handleSelectChange = (event) => {
      this.setState({
         optionValue: event.target.value
      });
   };

   render() {
      if (this.state.textValue) {
         throw new Error('Fuck you, man!');
      }
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <label>
                  Name:
                  <input type="text" value={this.state.textValue} onChange={this.handleTextChange} />
               </label>
               <input type="submit" value="Send" />
            </form>
            <form onSubmit={this.handleSubmit}>
               <label>
                  Your favorite taste:
                  <select value={this.state.optionValue} onChange={this.handleSelectChange}>
                     <option value="cherry">Cherry</option>
                     <option value="banana">Banana</option>
                     <option value="apple">Apple</option>
                     <option value="orange">Orange</option>
                  </select>
               </label>
               <input type="submit" value="Send" />
            </form>
         </div>
      );
   }
}

export default NameForm;