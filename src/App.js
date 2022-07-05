
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import './App.css';
import NoteState from './context/notes/NoteState';

import {BrowserRouter,Routes, Route} from "react-router-dom"
import { Alert } from './components/Alert';
function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
    <Navbar/>
    <Alert message="This is amazing React course" />
    <div className="container">
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>}/>
        
        
      </Routes>
        {/* it shows that only one route shows at a time */}
      
      </div>
    </BrowserRouter>
    </NoteState>  
    </>
  );
}

export default App;
