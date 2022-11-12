import axios from "axios";
import { useEffect, useState } from "react";
import Pagenation from "../partial/Pagenation";
import Content from "../partial/Content";
import Search from "../partial/Search";
import NavbarLogout from "../partial/NavbarLogout";

const Post = () => {

    //1 Buat Ngambil API
    const BASE_URL = 'https://jcc.brandingyou.id/api/'

    //3
    const token = localStorage.getItem('token')

    //4-2
    const [loadPost, setLoadPost] = useState([]); 

    //Edit
    // const [isEdit, setEdit] = useState (false);
    
    //2. Buat Ambil Data Post
    const getPost = () =>{
        // console.log(user)
        // e.preventDefault();
        axios.get(`${BASE_URL}post`, {
            headers:{
                'Authorization' : `Bearer ${token}`,
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
      })

      //4-1
      .then(function (response) {
        // console.log(response);
        setLoadPost(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      })
    }

    //7. Buat Mengirim Input Post
    const [input, setInput] = useState({
        title: '',
        content: '',
        image: {}
    });

        const ngePost = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('title', input.title)
        data.append('content', input.content)
        data.append('image', input.image)
        // console.log(input)
        // console.log(data.title);

        axios.post(`${BASE_URL}post`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        })

        .then(res => {
            getPost()
            console.log(res);
        })

        .catch(function (error) {
            console.log(error);
        })
    }
    //End
    
    //8 Buat Handle Remove
    const handleRemove = (id) => {
        axios.delete(`https://jcc.brandingyou.id/api/post/${id}`, {
            headers:{
                'Authorization' : `Bearer ${token}`,
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        })

        .then(res => {
            getPost()
            console.log(res);
        })
    }
    // End

    //9 Buat Handle Edit
    // const handleEdit = (id) => {
    //     setEdit(true) 
    //     axios.get(`https://jcc.brandingyou.id/api/post/${id}`, {
    //         headers:{
    //             'Authorization' : `Bearer ${token}`,
    //             'Accept' : 'application/json',
    //             'Content-Type' : 'application/json'
    //         }
    //     })
    //     .then((res) => {
    //         setInput({
    //             title: res.data.data.title,
    //             content: res.data.data.content,
    //         })
    //         getPost()
    //     })
    // }
    //End

    //5
    useEffect(() => {
        setInterval(() => {
            getPost();
            console.log(loadPost)
        }, 5000) 
    }, [])

    return (
        <>
        <NavbarLogout />
        <div className="container">
            {/* Component Input Post Start */}
            <form>
                <h4 className="text-center mt-5">Input Post</h4>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={input.title} onChange={(e) => setInput((prev) => {
                        return {...prev, [e.target.name]: e.target.value}})}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Deskripsi</label>
                    <input type="text" className="form-control" id="content" name="content" value={input.content} onChange={(e)=> setInput((prev) =>{
                        return{...prev, [e.target.name] : e.target.value}})}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Upload Image</label>
                    <input type="file" className="form-control" id="image" name="image" onChange={(e)=>setInput((prev)=>{
                            return{...prev, [e.target.name] : e.target.files[0]}})}></input>
                </div>
                <button className='btn btn-primary mb-3' onClick={ngePost}>Submit</button>
            </form>
            </div>
            {/* Component Post Content End */}

            {/* Component Search Start */}
            <Search/>
            {/* Component Search End */}

            {/*6. Card Post Start  */}
            <div className="container">
            <div className="row">
            {
                loadPost.map(isiPost => {
                    return <Content key={isiPost.id} id={isiPost.id} title={isiPost.title} clickRemove={handleRemove}  body={isiPost.content} img={isiPost.image}/>
                })
            }
            </div>
            </div>
            {/*6. Card Post End  */}

            {/* Component Pagenation Start */}
            <Pagenation/>
            {/* Component Pagenation End */}

        </>
    )
}

export default Post; 