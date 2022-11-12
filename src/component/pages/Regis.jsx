import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarLogin from "../partial/NavbarLogin";


const Regis = () => {

    const BASE_URL = 'https://jcc.brandingyou.id/api/'

    const [user, setUser] = useState('');
    const [nam, setNam] = useState('');
    const [mail, setMail] = useState('');
    const [pwd, setPwd] = useState('');
    const navigate = useNavigate()

    const handleRegis = async (e) =>{
        // console.log(user)
        e.preventDefault();
        axios.post(`${BASE_URL}register`, {
        name:nam,
        email:mail,
        username: user,
        password: pwd
      })
      .then(function (response) {

        console.log(response);
        navigate ('/login')
        // localStorage.setItem('token',response.data.data.token)   
        // console.log(response.status);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    return (
    <>
    <NavbarLogin/>
      <div className="wrapper">
        <div className="logo">
          <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="" />
        </div>
        
        <form className="form-horizontal" action='' method="POST">
          <fieldset>
            <div id="legend">
              <legend className="text-center mt-4 mb-4 name">Register</legend>
            </div>

            <div className="control-group">
              <div className="controls form-field d-flex align-items-center">
                  <span className="far fa-user"></span>
                  <input type="text" id="username" name="username" placeholder="Username" className="input-xlarge" autoComplete="off" onChange={(e) => 
                  setUser(e.target.value)} value ={user}/>
              </div>
            </div>

            <div className="control-group">
              <div className="controls form-field d-flex align-items-center">
                  <span className="far fa-user"></span>
                  <input type="text" id="name" name="name" placeholder="Name" className="input-xlarge" autoComplete="off" onChange={(e) => setNam(e.target.value)} 
                  value ={nam}/>
              </div>
            </div>

            <div className="control-group">
              <div className="controls form-field d-flex align-items-center">
                  <span className="far fa-user"></span>
                  <input type="text" id="email" name="email" placeholder="E-mail" className="input-xlarge" autoComplete="off" onChange={(e) =>
                  setMail(e.target.value)} value ={mail}/>
              </div>
            </div>

            <div className="control-group">
              <div className="controls form-field d-flex align-items-center">
                  <span className="far fa-user"></span>
                  <input type="password" id="password" name="password" placeholder="Password" className="input-xlarge" onChange={(e) => setPwd(e.target.value)} 
                  value ={pwd}/>
              </div>
            </div>
        
            <div className="control-group">
              <div className="controls">
                <button className="btn mt-3" onClick={handleRegis}>Register</button>
              </div>
            </div>
          </fieldset>
        </form>

        <div className="text-center fs-6 mt-2">
          <Link to="/login">Login</Link>
        </div>

      </div>
    </>
    )
}

export default Regis;