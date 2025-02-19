import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import postservice from '../services/postService'
function UpdateModalComponent(props)
{
    const [isShow,invokeModal] = useState(false)

    const [id,setId] = useState(props.id)
    const [title,setTitle] = useState(props.title)
    const [date,setDate] = useState(props.date)
    const [selectedFile,setSelectedFile] = useState('')

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const formData = new FormData();
        
        formData.append('id',id)
        formData.append('title',title)
        formData.append('date',date)

        if(selectedFile !=='' && selectedFile.length !==0)
        {
           formData.append('image',selectedFile)
        }

        const resp = await postservice.updatePosts(formData)
        if(resp.data.success === true)
        {
            alert(resp.data.msg)
        }
        else{
            alert(resp.data.msg)
        }
        initModal()
    }
    
    const initModal = () =>{
        return invokeModal(!isShow)
    }

   return(
    <>
      <Button variant='success' onClick={initModal}>
          Edit
      </Button>

      <Modal show={isShow}>
         <Modal.Header closeButton onClick={initModal}>
            <Modal.Title>Update Post</Modal.Title>
         </Modal.Header>
         <form onSubmit={handleSubmit}>
        <Modal.Body>
            <input type="text"
                   name="title"
                   placeholder="Enter the title"
                   value={title}
                   onChange={event=> setTitle(event.target.value)}
                   required/>
            <br /><br />
            <input type="date"
                   name="date"
                   value={date}
                   onChange={event=> setDate(event.target.value)}
                   required/>
            <br /><br />
            <input type="file"
                   name="image"
                   
                   onChange={event=> setSelectedFile(event.target.files[0])}
                   />
            <br /><br />
           
        </Modal.Body>

         <Modal.Footer>
            <Button variant='danger' onClick={initModal}>
                Close
            </Button>
            <Button variant='dark' type="submit">
                Update
            </Button>
        </Modal.Footer>
        </form>

      </Modal>
    </>
   )
}
export default UpdateModalComponent