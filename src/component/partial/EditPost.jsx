import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import NavbarLogout from './NavbarLogout';
import { useState, useEffect } from 'react';

function EditPost() {
    const token = localStorage.getItem('token')
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // const [validation, setValidation] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        //panggil function "getPostById"
        getPostById();

    }, []);

    // const updatePost = () => {
    //     navigate("/")
    // }

    const getPostById = async () => {

        //get data from server
        const response = await axios.get(`https://jcc.brandingyou.id/api/post/${id}`, {   
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
             });

        //get response data
        const data = await response.data.data
        
        //assign data to state
        setTitle(data.title);
        setContent(data.content);
    };

    const editPost = async (e) => {
        e.preventDefault();

        await axios.post(`https://jcc.brandingyou.id/api/post/${id}` , {
            title: title,
            content: content
        },{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        } )
        navigate("../post")
    }
    return (
        <>
        <NavbarLogout />
        <div className='container' style={{paddingBottom:"120px"}}> 
             {/* Component Input Post Start */}
             <form>
                    <h4 className="text-center mt-5">Update Post</h4>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan Title"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Deskripsi</label>
                        <input type="text" className="form-control" id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Masukkan Content"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Upload Image</label>
                        <input type="file" className="form-control" id="image" name="image"></input>
                    </div>
                    <button className='btn btn-primary mb-3 me-3' type="submit" onClick={editPost}>Update</button>
                    <button className='btn btn-primary mb-3' type="submit" onClick={() => navigate('../post')}>Back</button>
                </form>
            {/* Component Post Content End */}
        </div>
        </>                     
    );
}

export default EditPost;