import React from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets/assets'

const ViewAppliation = () => {
  return (
 <div className='contaimer mx-auto p-4'>
  <div>
    <table className='w-full max-w-4xl bg-white border border-gray-200'>
      <thead>
        <tr className='border-b'>
          <th className='py-2 px-4 text-left'>#</th>
          <th className='py-2 px-4 text-left'>username</th>
          <th className='py-2 px-4 text-left max-sm:hidden'>Job title</th>
          <th className='py-2 px-4 text-left max-sm:hidden'>location</th>
          <th className='py-2 px-4 text-left'>Resume</th>
          <th className='py-2 px-4 text-left'>Action</th>
        </tr>
      </thead>
      <tbody>
        {viewApplicationsPageData.map((applicant , index)=>(
          <tr key={index} className='text-gray-700'>
            <td className='py-2 px-4 border-b text-center'>{index + 1}</td>
            <td className='py-2 px-4 border-b text-center flex'><img src={applicant.imgSrc} alt="" className='w-10 h-10 rounded-full mr-3 max-sm:hidden'/>
            <span>{applicant.name}</span>
            </td>
           <td className='py-2 px-4 border-b max-sm:hidden'>{applicant.jobTitle}</td>
           <td className='py-2 px-4 border-b max-sm:hidden'>{applicant.location}</td>
           <td >
            <a href="" target='_blank'>
              Resume <img src={assets.resume_download_icon} alt="" className='bg-blue-50 text-blue-400 px-3 py-1 rounded inline-flex gap-2 items-center'/>
            </a>
           </td>
           <td className='py-2 px-4 border-b relative '>
            <div className='relatieve inline-block text-left group'>
              <button>
                ...
              </button>
              <div className='z-10 hidden absolute right-0 md:left-0 top-0 mt-2 bg-white border border-gray-200 rounded shadow group-hover:block'>
                <button className='block w-full text-left px-4 py-2 text-blue-500 hover:bg-green-100'>Accept</button>
                <button className='block w-full text-left px-4 py-2 text-red-500 hover:bg-green-100'>Reject</button>
              </div>
            </div>
           </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
 </div>
  )
}

export default ViewAppliation