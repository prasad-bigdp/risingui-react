import React from 'react'
import componentsData from '../data/componentsData'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
		<div className=' flex flex-col p-5 border border-r-black'>
			{componentsData.map((val) => (
				<p className='p-3 text-2xl text-center hover:bg-blue-400 hover:text-white'>
					<Link to={`/components/${val.id}`}>{val.name}</Link>
				</p>
			))}
		</div>
	)
}

export default Sidebar
