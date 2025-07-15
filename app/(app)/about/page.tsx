import Image from "next/image";
import Link from "next/link";

interface FAQ {
	question: string,
	answer: string
}

const faq: FAQ[] = [
	{
		question: "Why is the website called 10rd?",
		answer: "It's a wordplay of my surname 'Tanardi', 10rd is read (ˈtɛnˈɑrˈdi)"
	}
]

export default function Home() {
	return (
		<div>
			<div className="container relative bg-gray-900 mx-auto font-sans max-w-sm md:max-w-xl lg:max-w-3xl">
				<section className="p-8 flex flex-col justify-center items-center gap-4">
					<Image src={"/williamtanardi.webp"} height={250} width={250} alt="a photo of william tanardi" />
					<p>Jack of all trades</p>
				</section>
				<section className="p-8 flex flex-col gap-4">
					<div className="text-left">
						<h2 className="text-xl font-bold lg:text-3xl">
							Who
						</h2>
						<div>
							My name is William Tanardi, but most people call me either Willy or Billy
						</div>
					</div>
					<div className="text-right">
						<h2 className="text-xl font-bold lg:text-3xl">
							Where
						</h2>
						<p>
							I was born and raised in Indonesia
						</p>
					</div>
					<div className="text-left">
						<h2 className="text-xl font-bold lg:text-3xl">
							What
						</h2>
						<p>
							This is a personal website I&apos;ve built with a deck of cards as the concept.
						</p>
					</div>
					<div className="text-right">
						<h2 className="text-xl font-bold lg:text-3xl">
							Why
						</h2>
						<p>
							Because I wanna share and showcase many parts of my life.
						</p>
					</div>
					<div className="text-left">
						<h2 className="text-xl font-bold lg:text-3xl">
							When
						</h2>
						<p>
							This website will be in continuous development, as I grow, this website grows as well.
						</p>
					</div>
					<div className="text-right">
						<h2 className="text-xl font-bold lg:text-3xl">
							How
						</h2>
						<p>
							Currently, this website is built using NextJS, you can see the source code right <Link href={"https://github.com/WTanardi/10rd"} className="text-cyan-300 underline">here</Link>
						</p>
					</div>
				</section>
				<section className="p-8 flex flex-col justify-center items-center gap-4 text-center">
					<h2 className="text-3xl font-bold">
						FAQ:
					</h2>
					<ul>
						{
							faq.map((e, i) => (
								<div key={i}>
									<li className="font-semibold">
										{e.question}
									</li>
									<li>
										{e.answer}
									</li>
								</div>
							))
						}
						<li></li>
					</ul>
				</section>
			</div >
		</div >
	);
}
