import logo from './logo.svg';
import './App.css';
import WelcomeClassComponent from './pages/WelcomeClassComponent.jsx';
import WelcomeFunctionComponen from './pages/WelcomeFunctionComponen.jsx';
import NameForm from './pages/NameForm';
import Calculator from './tempExample/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Calculator/>
        <NameForm/>
        <WelcomeClassComponent />
        <WelcomeFunctionComponen name='Viktor' age={24}/>
      </header>
    </div>
  );
}

export default App;
