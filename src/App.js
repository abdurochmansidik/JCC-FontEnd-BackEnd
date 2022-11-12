import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/pages/Home';
import Login from './component/pages/Login';
import Regis from './component/pages/Regis';
import Post from './component/pages/Post';
import User from './component/pages/User';
import Footer from './component/partial/Footer';
import Dashboard from './component/pages/Dashboard';
import EditPost from './component/partial/EditPost';


function App() {
  return (
    <BrowserRouter>
    {/* <NavbarLogout/> */}
      <Routes>
        <Route path="/" element = {<Dashboard/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/post" element = {<Post/>}/>
        <Route path="/user" element = {<User/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/regis" element = {<Regis/>}/>
        <Route path="/edit/:id" element={<EditPost/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App;
