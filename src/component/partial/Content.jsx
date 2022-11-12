import { useNavigate } from "react-router-dom";

const Content = (props) => {
    
    const navigate = useNavigate()

    return (
        <>
            <div className="col-3 justify-content-center g-4">
                <div className="card bg-light" style={{height: "25rem"}}>
                    <img src={props.img} className="card-img-top" style={{height: "13rem"}} alt="..."/>
                    <div className="card-body">
                    <div className="d-flex justify-content-center pb-2">
                            <button onClick={()=>props.clickRemove(props.id)} className='btn btn-danger m-2'>Remove</button>
                            <button onClick={()=>navigate(`/edit/${props.id}`)} className='btn btn-primary m-2'>Edit</button>
                        </div>
                        <h5 className="card-title text-center fw-semibold pb-2" style={{color: "#101010", fontSize: "16px"}}>{props.title}</h5> 
                        <p className="card-text" style={{fontSize: "14px"}}>{props.body}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;