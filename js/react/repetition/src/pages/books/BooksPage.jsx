import React from 'react';

function BooksPage() {
   const ref = React.createRef();
   const FancyButton = React.forwardRef((props, ref) => (
      <>
         <input type='text' placeholder='fill me' ref={ref} />
         <button onClick={focusOnInput} className="FancyButton">
            {props.children}
         </button>
      </>
   ));

   const focusOnInput = () => ref.current.focus();

   return (
      <>
         <h1>Books Page</h1>
         <FancyButton ref={ref}>Click me to focus on input</FancyButton>;
      </>
   );
}

export default BooksPage;
