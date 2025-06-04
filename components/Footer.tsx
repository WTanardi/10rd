import React from 'react'
import Link from 'next/link';
import { Instagram, Github, Linkedin } from 'lucide-react';

function Footer() {
	return (
		<div className='flex flex-col gap-2'>
			<ul className='flex justify-center gap-1'>
				<li className='transition-all hover:border-white border-2 rounded-full p-2 border-transparent duration-500'>
					<Link href={'https://www.instagram.com/williamtanardi/'} >
						<Instagram />
					</Link>
				</li>
				<li className='transition-all hover:border-white border-2 rounded-full p-2 border-transparent duration-500'>
					<Link href={'https://github.com/WTanardi'}>
						<Github />
					</Link>
				</li>
				<li className='transition-all hover:border-white border-2 rounded-full p-2 border-transparent duration-500'>
					<Link href={'https://www.linkedin.com/in/williamtanardi/'}>
						<Linkedin />
					</Link>
				</li>
			</ul>
			<div className='font-[Montserrat] text-center cursor-default'>
				&copy; 2025 William Tanardi
			</div>
		</div>
	)
}

export default Footer
