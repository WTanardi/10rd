'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CardFan = () => {
	const ranks: string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
	const suits: string[] = ['/spade_suit.png', '/diamond_suit.png', '/club_suit.png', '/heart_suit.png'];

	const deck = suits.flatMap((suit) =>
		ranks.map((rank) => ({
			rank: `${rank}`,
			suit: `${suit}`,
		}))
	);

	interface CardProp {
		url: string,
		icon: string,
		name: string
	}

	const card: CardProp[] = [
		{
			name: "God",
			url: "/god",
			icon: "/cross.jpg"
		},
		{
			name: "Music",
			url: "/music",
			icon: "/music.png"
		}
	]

	const [isCurrent, setIsCurrent] = useState<number>(0)

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const maxScroll = document.body.scrollHeight - window.innerHeight;
			const scrollFraction = scrollTop / maxScroll;
			const index = Math.min(51, Math.floor(scrollFraction * 52));
			setIsCurrent(index);
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [])

	const rotation = -((isCurrent / 52) * 270);

	return (
		<div className="relative h-[700vh] mx-auto">
			<div className="sticky top-1/2 left-1/2 translate-y-[-50%]">
				{deck.map((e, i) => {
					const angle = (i / 52) * 270 + rotation;
					const isRed = e.suit === '/heart_suit.png' || e.suit === '/diamond_suit.png';
					const highlight = i === isCurrent;

					return (
						<Link href={card[i]?.url ?? ''} key={i} className={`font-mono text-center leading-3 text-sm md:text-lg md:leading-4 xl:text-2xl xl:leading-5 ${isRed ? 'text-red-500' : 'text-black'} ${highlight ? '' : 'pointer-events-none'}`}>
							< div
								className={`
									absolute w-24 h-36 md:w-28 md:h-40 xl:w-32 xl:h-48
									bg-white rounded-md border-0.5 shadow
									transition-transform duration-300 ease-out
									${highlight ? 'z-50 scale-150 -translate-y-6 shadow-xl border-1 border-gray-200' : 'z-10'}
								`}
								style={{
									top: '45%',
									left: 'var(--card-left)',
									transform: `
										rotate(${angle}deg)
										translateY(var(--card-translateY))
									`,
									transformOrigin: 'center center',
								}}
							>
								<div className="pl-1 pt-1.5 absolute top-0 left-0 flex flex-col gap-0.5 justify-center align-center">
									{e.rank}
									<br />
									<Image src={e.suit} alt="+" width={48} height={48} className="max-w-2 md:max-w-2.5 lg:max-w-3 mx-auto"></Image>
								</div>
								<div className="flex items-center justify-center my-auto h-full">
									{
										card[i]?.icon ? <Image src={card[i]?.icon} alt={card[i]?.name} width={300} height={300} className="border-0 max-w-[75px] md:max-w-[85px] xl:max-w-[100px]" /> : ''
									}
								</div>
								<div className="pl-1 pt-1.5 rotate-180 absolute bottom-0 right-0">
									{e.rank}
									<br />
									<Image src={e.suit} alt="+" width={48} height={48} className="max-w-2 md:max-w-2.5 lg:max-w-3 mx-auto"></Image>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div >
	);
};

export default CardFan;
