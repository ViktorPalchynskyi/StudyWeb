import {  Link } from 'react-router-dom';
import './App.css';
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
