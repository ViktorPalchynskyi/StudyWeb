import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Booklist from './pages/Booklist';
import Book from './pages/Book';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';

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
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/books' element={<Booklist/>}/>
          <Route path='/books/:id' element={<Book/>}/>
          <Route path='/books/new' element={<NewBook/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </>
  );
}

export default App;
