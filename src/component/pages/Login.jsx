import { useState } from "react";
import axios from "axios";
import NavbarLogin from "../partial/NavbarLogin";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

    const BASE_URL = 'https://jcc.brandingyou.id/api/'

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        // console.log(user)
        e.preventDefault();
        //     const response = await axios.post(LOGIN_URL, JSON.stringify({username: user,password: pwd}),
        //   {
        //     headers: {'Content-Type': 'application/json'},
        //     withCredentials: true
        //   })
        axios.post(`${BASE_URL}login`, {
            username: user,
            password: pwd
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Headers': '*',
                // 'Access-Control-Allow-Credentials': 'true'
            }
        })
            .then(function (response) {
                console.log(response.data.data.token);
                localStorage.setItem('token', response.data.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.data.user))
                navigate('/post');
                //   console.log(response.status);
                //   console.log(response.data);
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

                <div className="text-center mt-4 name">
                    Login
                </div>

                <form className="p-3 mt-3">

                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="text" name="username" id="username" autoComplete="off" onChange={(e) => setUser(e.target.value)}
                            value={user} placeholder="Username" required />
                    </div>
                    
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" name="password" id="password" onChange={(e) => setPwd(e.target.value)}
                            value={pwd} placeholder="Password" required />
                    </div>

                    <button className="btn mt-3" onClick={handleSubmit}>Login</button>
                
                </form>

                <div className="text-center fs-6">
                    <Link to="/regis">Sign up</Link>
                </div>

            </div>
        </>
    )
}

export default Login;