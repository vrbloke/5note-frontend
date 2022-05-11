import './App.css';
import Nav from './components/Nav'
import Board from './components/Board'
import {AiTwotoneSetting} from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Board/>
      <AiTwotoneSetting style={{fontSize:'5vh',margin:'5vh'}}/>
    </div>
  );
}


export default App;
