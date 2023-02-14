import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Book from './pages/books/Book';
import NewBook from './pages/books/NewBook';
import NotFound from './pages/NotFound';
import BooksLayout from './pages/books/BooksLayout';
import AppRoutes from './router';

function App() {
  return (
      <>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/books'>Books</Link>
            </li>
          </ul>
        </nav>
        <AppRoutes/>
      </>
  );
}

export default App;
