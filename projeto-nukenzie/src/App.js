
import './App.css';
import { useState } from 'react';
import IndexPage from './Components/IndexPage';
import HomePage from './Components/HomePage';

function App() {
const [entry, setEntry] = useState (false) 

  return (
    <div className="App">
      {entry ? (    
      <HomePage setEntry={setEntry}/>
      ) : (
      <IndexPage setEntry={setEntry}/>
      )
    }
    
    </div>
  );
}

export default App;
