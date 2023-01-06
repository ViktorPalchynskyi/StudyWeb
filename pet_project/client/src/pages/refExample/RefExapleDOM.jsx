import React from 'react';
import CutomClassRefInput from './RefExapleClassComponent';

class CutomRefInput extends React.Component {
   constructor(props) {
      super(props);
      this.textInput = React.createRef();
      this.classTextInput = React.createRef();
   }

   componentDidMount() {
      // console.log(this.classTextInput.current);
      // this.classTextInput.current.focusTextInput();
   }


   focusTextInput = () => {
      this.textInput.current.focus();
      this.textInput.current.value = 'here';
   }

   render() {
      return (
         <div>
            <input
               type='text'
            />
            <input
               type='text'
               ref={this.textInput}
            />
            <input
               type='text'
            />
            <input
               type='button'
               value='focus on text area'
               onClick={this.focusTextInput}
            />
            {/* <CutomClassRefInput ref={this.classTextInput} /> */}
         </div>
      )
   }
}

export default CutomRefInput;