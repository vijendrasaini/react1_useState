import logo from './logo.svg';
import './App.css';
import { Counter } from "./Components/Counter"

function App() {

  const coutner = 0
  return <div className='App'>
    <Counter value={coutner}/>
  </div>
}

export default App;



