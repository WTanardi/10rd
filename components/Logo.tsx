import Link from 'next/link'
import React from 'react'

const Logo = ({ home = false }) => {
	return (
		<div className={`font-mono max-w-min ${home ? 'text-7xl xl:text-8xl' : 'text-4xl xl:text-6xl'} `}>
			<Link href={"/"}>
				<div>10</div>
				<div>RD</div>
			</Link>
		</div >
	)
}

export default Logo
