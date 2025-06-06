import Link from 'next/link'
import React from 'react'

function NavBar() {
	return (
		<div className='font-mono text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex flex-col gap-2'>
			<div className="group relative w-max self-end">
				<span>
					<Link href={'/portfolio'}>Portfolio</Link>
				</span>
				<span className="absolute -bottom-1 right-0 w-0 transition-all duration-700 h-0.5 bg-white group-hover:w-full"></span>
			</div>
			<div className="group relative w-max self-end">
				<span>
					<Link href={'/about'}>About</Link>
				</span>
				<span className="absolute -bottom-1 right-0 w-0 transition-all duration-700 h-0.5 bg-white group-hover:w-full"></span>
			</div>
		</div>
	)
}

export default NavBar
