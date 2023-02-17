import React from 'react';

function BooksPage({ ref }) {
   const fancyBooksPage = React.forwardRef((props, ref) => (
      <>
         <h1>Books Page</h1>
         <input type='text' placeholder='fill me' ref={ref} />
         <button onClick={focusOnInput}>Click to focus on input</button>
      </>
   ))

   const focusOnInput = () => ref.current.focus();

   return fancyBooksPage;
}

export default BooksPage;
