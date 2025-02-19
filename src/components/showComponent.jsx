import postservice from "../services/postService";
import React,{useState,useEffect} from "react";
import UpdateModalComponent from "./UpdateComponent";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function ShowComponent(){
    const[posts,setPosts] = useState({})

    const fetchPosts = async () =>{
        setPosts(await postservice.getPosts())
        
    }
    
    useEffect(()=>{
        fetchPosts()
    },[posts]);

    const deletePosts = async(id, e)=>{
        var resp = await  postservice.deletePosts(id);
        if(resp.data.success===true){
           alert(resp.data.msg)
            document.getElementById(id).parentElement.parentElement.remove();
           
          }
        else{
            alert(resp.data.msg)
        }
    }
    

    return(
        <div>
           <h1>Posts Data</h1>
           {posts.data !== undefined && posts.data.data.length > 0 && (
            <table style={{width:'100%'}} border='1'>
                <thead>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Image</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </thead>
                <tbody>
                    {
                        posts.data.data.map(post=>(
                            <tr>
                                <td>{post.title}</td>
                                <td>{post.date}</td>
                                <td>
                                    <img src={"http://localhost:9000/api/postImages/"+post.image} alt="This is data"  style={{width:'70px',height:'50px'}}/>                              
                                </td>
                                <td>
                                    <button id={post._id} onClick={(e)=> deletePosts(post._id,e)}>Delete</button>
                                </td>
                                <td>
                                    <UpdateModalComponent id={post._id} title={post.title} date={post.date}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
           )
           }
        </div>
    )
}

export default ShowComponent;