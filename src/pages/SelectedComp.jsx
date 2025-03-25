import React from 'react'
import Sidebar from '../components/Sidebar'
import { useParams } from 'react-router-dom'
import componentsData from '../data/componentsData'
import { useState } from 'react'
import { lazy } from 'react'
import { ToastContainer, toast } from "react-toastify"
const ButtonRounded=lazy(()=>import('../components/ui/ButtonRounded'))

function selectedComp ()
{
  const { id } = useParams()
  console.log(id)
  const [selection,setSelection]=useState('Preview')
  function findIndex2()
  {
    for (let ele of componentsData)
    {
      if (ele.id === id)
        return componentsData.indexOf(ele)
    }
  }
  const index = findIndex2()
  console.log(index)
  const copyData = () =>
  {
    window.navigator.clipboard.writeText(componentsData[index].code)
      .then(() => toast("copied"))
    .catch((err)=>console.log(err))
  }
  return (
		<div className=' flex flex-row'>
			<Sidebar />
			<div className=' flex flex-col gap-2'>
				<div className=' flex gap-2 border-2'>
					<button onClick={() => setSelection("Preview")}>Preview</button>
					<button onClick={() => setSelection("code")}>Code</button>
				</div>
				<div className='max-w-full flex justify-center items-center'>
					{selection == "Preview" ? (
						<ButtonRounded />
					) : (
              <div>
                <button className='p-2 bg-gray-400 text-white' onClick={copyData}>copy</button>
                <p>{componentsData[index].code}</p>
                <ToastContainer />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default selectedComp
