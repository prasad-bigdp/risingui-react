import React from 'react'
import componentsData from '../data/componentsData'
import { Link } from 'react-router-dom'
function Components() {
  return (
		<>
			<h2 className='mt-5 font-bold text-center text-3xl text-black'>
				OUR Components
			</h2>
			<div className=' m-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
				{componentsData.map((val) => (
					<div
						key={val.id}
						className=' p-5 border-2 border-black rounded-2xl bg-gray-400 text-white text-2xl
          text-center'>
						<button>
              <Link to={`/components/${val.id}`}>{val.name}</Link>
						</button>
					</div>
				))}
			</div>
		</>
	)
}

export default Components
