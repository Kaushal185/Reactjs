import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    //props are used for reuse components with variable values.
    // example here component Navbar is used with title name amazon.com
    // we can reuse our components again and again
    <Navbar title = "amazon.com" about = "About"/>
    
    // <Navbar/> This is Navbar having default tile and about values
  );
}

export default App;
