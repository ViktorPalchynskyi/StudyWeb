import {  Link } from 'react-router-dom';
import './App.css';
import { useTheme } from './context/Theme.contex';
import AppRoutes from './router';

function App() {
  const [theme] = useTheme(); 
  return (
      <div style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
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
      </div>
  );
}

export default App;
