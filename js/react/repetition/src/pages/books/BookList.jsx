import { NavLink, useLocation } from "react-router-dom";

function BookList() {
   const booksIds = [1, 2, 3];
   // const locationData = useLocation();
   const changeStyle = ({ isActive }) => ({ color: isActive ? 'tomato' : 'white' });
   return (
      <>
         <nav>
            <ul>
               {booksIds.map((bookId, index) => (
                  <li key={index}>
                     <NavLink style={changeStyle} replace to={`${bookId}`} >Book #{bookId}.</NavLink>
                  </li>
               ))}
               <li>
                  <NavLink style={changeStyle} reloadDocument to='new'>New Book</NavLink>
               </li>
            </ul>
         </nav >
      </>
   );
}

export default BookList;