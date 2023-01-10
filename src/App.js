
import './App.css';
import { useState } from 'react';
import BorderContainer from './components/BorderContainer';


function App() {
  const [theme, useTheme] = useState([])
  return (
    <div className="App">
      <BorderContainer />
    </div>
  );
}

export default App;
