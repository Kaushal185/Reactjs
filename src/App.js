import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    //props are used for reuse components with variable values.
    // example here component Navbar is used with title name amazon.com
    <>
     {/* App() return only single component while returning bunch them all inside single entity.
    we can reuse our components again and again */}
    <Navbar title = "amazon.com" about = "About"/>
    
    {/* // <Navbar/> This is Navbar having default tile and about values */}
    <TextForm heading = "Enter Text Here"/>
    </>
  );
}

export default App;
