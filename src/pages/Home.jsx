import React from 'react'
import { TypeAnimation } from "react-type-animation"
import {Link} from 'react-router-dom'
function Home() {
  return (
		<div className='relative h-screen'>
			<div className='absolute inset-0'>
				<div className='absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]'></div>
			</div>

			<div className='relative z-10 flex h-full flex-col items-center justify-center px-4'>
				<div className=' max-h-screen h-screen flex  flex-col justify-center items-center gap-10'>
					<h2 className=' boldFont text-7xl text-center'>
						ULTIMATE hub for <br />
						<br />
						<span className=' text-blue-400 text-3xl'>
							<TypeAnimation
								sequence={[
									"React Tailwind Components", // Types 'One'
									1000, // Waits 1s
									"React Tailwind Components.", // Deletes 'One' and types 'Two'
									1000,
									() => {
										console.log("Sequence completed")
									},
								]}
								wrapper='span'
								cursor={true}
								repeat={Infinity}
								style={{ fontSize: "2em", display: "inline-block" }}
							/>
						</span>
					</h2>
					<div>
						<button className=' bg-blue-800 text-white text-2xl p-5 rounded-3xl'>
							<Link to='/components'>Get Components</Link>
						</button>
						<button className=' bg-white border-blue-800 text-black text-2xl p-5 rounded-3xl'>
							Documentation
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
