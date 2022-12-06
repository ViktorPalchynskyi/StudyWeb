import logo from './logo.svg';
import './App.css';
import WelcomeClassComponent from './pages/WelcomeClassComponent.jsx';
import WelcomeFunctionComponen from './pages/WelcomeFunctionComponen.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WelcomeClassComponent />
        <WelcomeFunctionComponen name='Viktor' age={24}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
