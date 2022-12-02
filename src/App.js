import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          안녕? <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_Blank"
          rel="noopener noreferrer"
        >
          안녕하세요
        </a>
        {/* <p>
          package.josn scripts 에서 start에
          WATCHPACK_POLLING=true 넣었다.
        </p> */}
      </header>
    </div>
  );
}

export default App;
