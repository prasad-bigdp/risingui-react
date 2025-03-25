import React from "react"
import { Link } from "react-router-dom"

function Header() {
	return (
		<header>
			<nav className='bg-gray-800'>
				<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
					<div className='relative flex h-16 items-center justify-between'>
						<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
							<button
								type='button'
								className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset'
								aria-controls='mobile-menu'
								aria-expanded='false'>
								<span className='absolute -inset-0.5'></span>
								<span className='sr-only'>Open main menu</span>
								<svg
									className='block size-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									aria-hidden='true'
									data-slot='icon'>
									<path
										strokeLineCap='round'
										d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
									/>
								</svg>
								<svg
									className='hidden size-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									aria-hidden='true'
									data-slot='icon'>
									<path
										strokeLineCap='round'
										d='M6 18 18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
						<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-between'>
							<div className='flex shrink-0 items-center'>
								<h2 className=' text-3xl boldFont text-white'>
									SUPER <span className=' text-blue-400'>UI</span>
								</h2>
							</div>
							<div className='hidden sm:ml-6 sm:block'>
								<div className='flex space-x-4'>
									<Link
										to=''
										className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
										aria-current='page'>
										Home
									</Link>
									<Link
										to='about'
										className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
										About
									</Link>
									<Link
										to='Contact'
										className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
										Contact
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className='sm:hidden'
					id='mobile-menu'>
					<div className='space-y-1 px-2 pt-2 pb-3'>
						<Link
							to=''
							className='block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
							aria-current='page'>
							Home
						</Link>
						<Link
							to='Components'
							className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
							Components
						</Link>
						<Link
							to='Contact'
							className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'>
							Contact
						</Link>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
