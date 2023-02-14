import { Outlet } from "react-router-dom";
import BookList from "./BookList";

function BooksLayout() {
   return (
      <>
         <BookList />
         <Outlet context={{ name: 'Viktor Paylchynskyi' }} />
      </>
   );
}

export default BooksLayout;