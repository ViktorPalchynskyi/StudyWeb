import { useNavigate } from "react-router-dom";

function NewBook() {
   const navigate = useNavigate();
   const handleClick = (event) => {
      event.preventDefault();
      navigate('/books', { replace: false, state: { bookName: 'Some' } });
   };
   return (
      <>
         <h1>I`m new book</h1>
         {/* <Navigate to='/books' /> */}
         <button onClick={handleClick}>Click me</button>
      </>
   );
}

export default NewBook;