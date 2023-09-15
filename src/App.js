
 import './App.css';
import Login from './Compents/Login';
 import Register from './Compents/Register';
 import About from "./Compents/About"
import Header from './Compents/Header';
import Home from "./Compents/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 function App() {
  return (
    <div className="App">
<BrowserRouter>
<Header/>
<Routes>
    <Route path ="/"element={<Home/>}>Home</Route>
  <Route path ="/login"element={<Login/>}>Login</Route>
   <Route path ="/register" element={<Register/>}>Register</Route>
   <Route  path ="/about" element={<About/>}>About</Route>

</Routes>
</BrowserRouter>
   </div>
  );
}

export default App;
