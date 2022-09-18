import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Identify from './components/Identify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Identify/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
