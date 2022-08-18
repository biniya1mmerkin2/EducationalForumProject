import NavBar from './components/navbar/navbar';
import Forum from './components/forum/forum';
import { Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
         <>
        <NavBar/>

        
            <Forum />
          
         </>
    
  );
}

export default App;
