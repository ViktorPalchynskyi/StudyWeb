import { Link } from "react-router-dom";

function BookList() {
   const booksIds = [1, 2, 3];
   return (
      <nav>
         <ul>
            {booksIds.map((bookId, index) => (
               <li key={index}>
                  <Link to={`${bookId}`} >Book #{bookId}.</Link>
               </li>
            ))}
            <li>
               <Link to='new'>New Book</Link>
            </li>
         </ul>
      </nav >
   );
}

export default BookList;