import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    //props are used for reuse components with variable values.
    // example here component Navbar is used with title name amazon.com
    // we can reuse our components again and again
    <Navbar title = "amazon.com"/>
  );
}

export default App;
