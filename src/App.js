import logo from './logo.svg';
import './App.css';
import  { Routes }  from './Routes'

function Header() {
  return (
    <header>
      <nav className='Nav-bar'>
        <img alt="" src={logo} width="7%"/>
        <ul className='Nav-items'>
          <li> <a href="./pages/Main.html"> Main</a></li>
          <li> About </li>
          <li> Contact </li>
        </ul>
      </nav>
    </header>
  );
}

function Body() {
  return (
  <div className='body'>
  test text goes here
  </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes />
      <Header />
      <Body />
    </div>
  );
}

export default App;
