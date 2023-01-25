
import './App.css';
import { useState } from 'react';
// import BorderContainer from './components/BorderContainer';
import Home from './components/Home';


function App() {
  const [theme, useTheme] = useState([])
  return (
    <div className="App">
      <Home />
      {/* <BorderContainer /> */}
    </div>
  );
}

export default App;
