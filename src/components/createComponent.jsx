import React, { useState } from "react";
import postservice from "../services/postService";
function CreateComponent()
{
    const[title,setTitle]=useState("")
    const[date,setDate]=useState("")
    const[image,setImage]=useState("")
    const[message,setMessage]=useState("")

    const handleSubmit = async(event)=>{
         event.preventDefault()
         const formData = new FormData();

         formData.append('title',title)
         formData.append('date',date)
         formData.append('image',image)

         const response = await postservice.create(formData)
         if(response.data.success === true)
         {
            setMessage("Data Created Successfully...")
         }
         else{
            setMessage("Data Failed To Create...")
         }

         setTimeout(function(){
            setMessage('')
         },5000)
         event.target.reset()
    }
    return(
        <div>
           <h1>Create Post</h1>
           <form onSubmit={handleSubmit}>
            <input type="text"
            name="name"
            placeholder="Enter title"
            onChange={event => setTitle(event.target.value)}
            required
            />
            <br /><br />
            <input type="date"
            name="date"
            onChange={event => setDate(event.target.value)}
            required
            />
            <br /><br />
            <input type="file"
            name="image"
            placeholder="Enter title"
            onChange={event => setImage(event.target.files[0])}
            required
            />
            <br /><br />
            <button>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    )
}
export default CreateComponent;