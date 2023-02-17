import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Book from '../pages/books/Book';
import NewBook from '../pages/books/NewBook';
import BooksLayout from '../pages/books/BooksLayout';
import BooksPage from '../pages/books/BooksPage';

function BooksRouter() {

   const booksRef = React.createRef();

   return (
      <Routes>
         <Route element={<BooksLayout />}>
            <Route index element={<BooksPage ref={booksRef} />} />
            <Route path=':id' element={<Book />} />
            <Route path='new' element={<NewBook />} />
         </Route>
      </Routes>
   );
}

export default BooksRouter;
