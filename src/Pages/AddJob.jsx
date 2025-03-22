import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
const AddJob = () => {
    const [title,setTitle]=useState()
    const [location,setLocation]=useState('Bangalore')
    const [category,setCategory]=useState('programming')
    const [level,setLevel]=useState('Beginner level')
    const [salary,setSalary]=useState(0)

    const editorRef =useRef(null)
    const quillRef =useRef(null)

    useEffect(()=>{
if(editorRef.current){
    quillRef.current=new Quill(editorRef.current,{
        theme:'snow',
    })
}
    },[])
  return (
    <form>
        <div>
            <p>Job Title</p>
            <input type="text" placeholder='type here' required  onChange={e=>setTitle(e.target.value)}/>
        </div>
        <div>
            <p>Job description</p>
            <div ref={editorRef}>

            </div>
        </div>
    </form>
  )
}

export default AddJob