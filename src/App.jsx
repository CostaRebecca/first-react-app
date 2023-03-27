import logo from './logo.svg';
import './App.css';
import './components/ButtonComponent';
import ButtonComponent from './components/ButtonComponent';
import  './components/ImgComponent';
import ImgComponent from './components/ImgComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <ButtonComponent title="Intro a ReactJs"/>
        <ImgComponent src="https://www.marchesinietologia.it/wp-content/uploads/2016/03/capra-web-765x509.jpg" alt="capra"/>


       
      </header>
    </div>
  );
}

export default App;
