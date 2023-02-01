
import './App.scss';
import { useState } from 'react';
import ChooseTheme from './components/ChooseTheme';
import BorderContainer from './components/BorderContainer';
import Home from './components/Home';


function App() {
  const [theme, useTheme] = useState([])
  return (
    <div className="App">
      <Home />
      <ChooseTheme />
      <BorderContainer />
    </div>
  );
}

export default App;
