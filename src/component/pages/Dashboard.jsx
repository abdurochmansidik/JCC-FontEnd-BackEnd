import NavbarLogin from "../partial/NavbarLogin";
const Dashboard = () => {
    return (
        <>
        <NavbarLogin/>
            <div className="p-10 bg-surface-secondary">
            <div className="h1 text-center mt-5" style={{paddingBottom: "180px"}}>
                <h1>Home Page</h1>
                <div className="logo mt-5">
                    <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="" />
                </div>
            </div>
            <div className="mb-8 text-center">
                <h3 className="mb-2">Crafted with FrontEnd Developer</h3>
                <p>The design system for React JS</p>
            </div>
            </div>
        </>
    )
}

export default Dashboard;