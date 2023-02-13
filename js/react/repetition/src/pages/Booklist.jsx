import { Link } from "react-router-dom";

function Booklist() {
   const booksIds = [1, 2, 3];
   return (
      <nav>
         <ul>
            {booksIds.map(bookId => (
               <Link to={`${bookId}`} >Book #{bookId}</Link>
            ))}
            <Link to='new'>New Book</Link>
         </ul>
      </nav >
   );
}

export default Booklist;