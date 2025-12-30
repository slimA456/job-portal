import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css' 
import { JobCategories, JobLocations } from '../assets/assets/assets'


const AddJob = () => {
    const [title,setTitle]=useState()
    const [location,setLocation]=useState('Bangalore')
    const [category,setCategory]=useState('programming')
    const [level,setLevel]=useState('Beginner level')
    const [salary,setSalary]=useState(0)

    const editorRef =useRef(null)
    const quillRef =useRef(null)

    useEffect(() => {
        if (editorRef.current && !quillRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow',
            });
        }
    }, []);``
  


  return (
    <form className='container p-4 flex flex-col w-full items-start gap-3'>
        <div className='w-full'>
            <p>Job Title</p>
            <input type="text" placeholder='type here' required  onChange={e=>setTitle(e.target.value)} requuired className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'/>
        </div>
        <div className='w-full max-w-lg'>
            <p className='my-2'>Job description</p>
            <div ref={editorRef}>
   </div>
            </div>
            <div  className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8 '>
            <div >
                <p className='mb-2 w-full '> job Category</p>
                <select name="" id="" onChange={e=>setCategory(e.target.value)} className='w-full px-3 py-2 border-gray-300 rounded'>
                    {JobCategories.map((category, index)=> (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div >
                <p className='mb-2 '> job Location</p>
                <select name="" id="" onChange={e=>setLocation(e.target.value)} className='w-full px-3 py-2 border-gray-300 rounded'>
                    {JobLocations.map((location , index)=> (
                        <option key={index} value={location}>{location}</option>
                    ))}
                </select>
            </div>

            <div >
                <p className='mb-2 '> job Level</p>
                <select name="" id="" onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2 border-gray-300 rounded'>
                    <option value="Begginer Level">Begginer Level</option>
                    <option value="intermidiate Level">intermidiate Level</option>
                    <option value="senior Level">senior Level</option>       
                </select>
            </div>
   
    </div>

     <div>
        <p>Salary</p>
        <input type="Number" onChange={e => setSalary(e.target.value)}placeholder='2500'/>
    </div>
     <button className='mb-2 bg-black text-white py-2 px-4 rounded'>ADD</button>
        
       
    </form>
  )
  
}

export default AddJob