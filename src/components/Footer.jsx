import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
		<footer className='p-5 bg-gray-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
			<div className=' flex flex-col gap-3'>
				<h2 className='text-white text-4xl'>
					SUPER <span className=' text-blue-400'>UI</span>
				</h2>
				<p className=' text-white'>
					An open source components library for tailwind where you can just copy
					paste beautiful tailwind components
				</p>
			</div>
			<div className=' flex flex-col gap-3'>
				<Link to='' className=' text-white'>Home</Link>
				<Link to='' className=' text-white'>About</Link>
				<Link to='' className=' text-white'>Contact</Link>
			</div>
			<div className=' flex flex-col gap-3'>
				<Link to='' className=' text-white'>Components</Link>
				<Link to='' className=' text-white'>Templates</Link>
				<Link to='' className=' text-white'>Blocks</Link>
			</div>
			<div className=' flex flex-col gap-3'>
				<a href='' className=' text-white'>X</a>
				<a href='' className=' text-white'>Github</a>
			</div>
		</footer>
	)
}

export default Footer
