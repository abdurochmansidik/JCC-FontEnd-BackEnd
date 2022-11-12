import NavbarLogout from "../partial/NavbarLogout";

const User = () => {
    return (
        <>
        <NavbarLogout/>
        <div className="container mt-5" style={{paddingBottom: "320px"}}>
                <h4 className="center">Halo : {JSON.parse(localStorage.getItem('user')).username}</h4>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{JSON.parse(localStorage.getItem('user')).name}</td>
                            <td>{JSON.parse(localStorage.getItem('user')).email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default User;