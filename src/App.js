import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <font face='Luminari'> <h3>Rene <code>Lopez</code> Verun</h3></font>
        </p>
        <a
          className="App-link"
          href="https://github.com/ReneLopezVerun"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Rene
        </a>
      </header>
    </div>
  );
}

export default App;
