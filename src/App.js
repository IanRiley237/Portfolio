import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello! My name is Ian Riley. Welcome to my Website!
        </p>
      </header>
      
      <main className="App-main">
        <p>
          Hello! My name is Ian Riley. Welcome to my Website!
        </p>
      </main>
      
      <footer>
        This page was built with<img src={logo} className="App-logo" alt="" />React
      </footer>
    </div>
  );
}

export default App;
