import { Route, Routes } from 'react-router-dom';
import Book from '../pages/books/Book';
import NewBook from '../pages/books/NewBook';
import BooksLayout from '../pages/books/BooksLayout';
import BookList from '../pages/books/BookList';

function BooksRouter() {
   return (
      <Routes>
         <Route element={<BooksLayout />}>
            {/* <Route index element={<BookList />} /> */}
            <Route index element={<h1>Books Page</h1>} />
            <Route path=':id' element={<Book />} />
            <Route path='new' element={<NewBook />} />
         </Route>
      </Routes>
   );
}

export default BooksRouter;
