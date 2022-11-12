// import axios from "axios";
// import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavbarLogin = () => {

//    const navigate = useNavigate()
   
//    const Logout = async () => {
//        try {
//            // delete token dan user di local storage
//            localStorage.removeItem("token");
//            localStorage.removeItem("user");
//            // pindah ke hlmn login
//            navigate("/home")
            
//         } catch (error) {
//             console.log(error);
//         }
//     }

    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
            <div className="container-xl">
                {/* <!-- Logo --> */}
                <a className="navbar-brand" href="/">
                <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" className="h-10" alt="..."/>
                </a>
                {/* <!-- Navbar toggle --> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                {/* <!-- Collapse --> */}
                <div className="collapse navbar-collapse" id="navbarCollapse">
                {/* <!-- Nav --> */}
                <div className="navbar-nav mx-lg-auto">
                    {/* <a className="nav-item nav-link" href="/">Blog</a> */}
                </div>
                {/* <!-- Right navigation --> */}
                <div className="navbar-nav ms-lg-4">
                    <Link className="nav-item nav-link active" to="/" aria-current="page">Home</Link>
                    {/* <Link className="nav-item nav-link" to="/post">Post</Link> */}
                    {/* <Link className="nav-item nav-link" to="/user">User</Link> */}
                    <Link className="nav-item nav-link" to="/login">Login</Link>
                </div>
                {/* <!-- Action --> */}
                <div className="d-flex align-items-lg-center mt-3 mt-lg-0 gap-2">
                    <Link to="/regis" className="btn btn-sm btn-primary w-full w-lg-auto">
                    Register
                    </Link>
                    {/* <button onClick={Logout} className="btn btn-sm btn-primary w-full w-lg-auto">
                    Logout
                    </button> */}
                </div>
                </div>
            </div>
            </nav>
        </>
    )
}

export default NavbarLogin; 