import Image from "next/image";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

import Link from "next/link";

interface Project {
	name: string,
	url: string,
	img: string,
	desc: string,
	stack: string[],
	source: string,
	role: string
}

const projects: Project[] = [
	{
		name: "Pantry Pilot",
		url: "https://pantry-pilot.vercel.app/",
		img: "/pantry_pilot_all.webp",
		desc: `
			Pantry Pilot is a web application designed to help users discover meals according to the ingredients they have in store
		`,
		stack: ["/nextjs.webp", "/typescript.webp", "/postgresql.webp", "/prisma.webp", "/tailwind.webp"],
		source: "https://github.com/WTanardi/pantry-pilot",
		role: "Lead developer"
	},
	{
		name: "Movie List Website",
		url: "https://movie-list-website-wt.netlify.app/",
		img: "/movie_list_website_all.webp",
		desc: `
			A movie list website that fetches real-time data from the IMDb API.
			Displaying movie rating and description in a glance.
		`,
		stack: ["/react.webp", "/html.webp", "/css.webp", "/javascript.webp"],
		source: "https://github.com/WTanardi/React-movie-list-website",
		role: "Solo developer"
	},
]

interface Stack {
	name: string,
	img: string
}

const stacks: Stack[] = [
	{
		name: "Next.js",
		img: "/nextjs.webp"
	},
	{
		name: "React.js",
		img: "/react.webp"
	},
	{
		name: "Typescript",
		img: "/typescript.webp"
	},
	{
		name: "Javascript",
		img: "/javascript.webp"
	},
	{
		name: "Tailwind",
		img: "/tailwind.webp"
	},
	{
		name: "Prisma",
		img: "/prisma.webp"
	},
	{
		name: "HTML",
		img: "/html.webp"
	},
	{
		name: "CSS",
		img: "/css.webp"
	},
	{
		name: "Postgresql",
		img: "/postgresql.webp"
	},
	{
		name: "Wordpress",
		img: "/wordpress.webp"
	},
]

export default function Home() {
	return (
		<div>
			<div className="container relative bg-gray-900 mx-auto font-sans max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
				<section className="flex justify-center flex-wrap text-center py-8 gap-4 max-lg:max-w-lg mx-auto">
					<div>
						<h1 className="text-4xl font-bold mb-4 xl:text-6xl">Hi, I&apos;m William Tanardi</h1>
						<p>
							I&apos;m a life-long learner, constantly testing my limits. I pour my pride and soul in everything I do.
						</p>
					</div>
				</section>
				<section className="flex flex-wrap justify-center place-content-center items-center py-8 gap-8">
					<Image src={"/selfportrait.webp"} alt="a picture of william tanardi" height={250} width={250} className="rounded-2xl" />
					<div className="text-center lg:basis-1/2 lg:text-left">
						<h2 className="font-bold text-3xl xl:text-4xl mb-2">I love tinkering</h2>
						<p>
							My journey to becoming a software developer, started when I was little, it was my dad who inspired me.
							<br />
							From then on forward, me and my brothers taught ourselves to tinker with computers.
							<br />
							It&apos;s my passion to make unique web experiences.
						</p>
					</div>
				</section>
				<section className="flex flex-col justify-center place-content-center items-center py-8">
					<h2 className="text-3xl xl:text-4xl font-bold mb-4">
						My skills
					</h2>
					<div className="flex flex-wrap place-content-evenly">
						{
							stacks.map((e, i) => (
								<div key={i} className="border-1 rounded-full m-1 py-2 px-4 flex gap-2">
									{e.name} <Image src={e.img} alt={e.name} height={24} width={24} />
								</div>
							))
						}
					</div>
				</section>
				<section className="flex flex-col justify-center place-content-center items-center py-8 gap-4">
					<div className="text-3xl xl:text-4xl font-bold mb-4">
						Recent Works
					</div>
					{
						projects.map((e, i) => (
							<Card key={i} className="w-full">
								<CardHeader className="w-full justify-center items-center">
									<Image src={e.img} alt={e.name} height={500} width={1000} />
								</CardHeader>
								<CardContent>
									<CardTitle>
										<p className="font-semibold text-2xl lg:text-3xl xl:text-4xl">
											{e.name}
										</p>
									</CardTitle>
									<CardDescription className="flex flex-col gap-4">
										<p className="font-medium xl:text-xl">
											{e.role}
										</p>
										<p className="xl:text-lg">
											{e.desc}
										</p>
										<div className="flex gap-1">
											{
												e.stack.map((el, idx) => (
													<div key={idx} className="border-1 rounded-full p-2 flex justify-center items-center">
														<Image src={el} alt={el} height={24} width={24} />
													</div>
												))
											}
										</div>
									</CardDescription>
								</CardContent>
								<CardFooter className="flex gap-2">
									<CardAction className="py-2 px-4 border-1 rounded-full text-sm hover:border-white transition-all duration-700 xl:text-lg">
										<Link href={e.url}>View Project</Link>
									</CardAction>
									<CardAction className="py-2 px-4 border-1 rounded-full text-sm hover:border-white transition-all duration-700 xl:text-lg">
										<Link href={e.source}>Source Code</Link>
									</CardAction>
								</CardFooter>
							</Card>
						))
					}
				</section>
				<section className="flex flex-col justify-center place-content-center items-center py-8 gap-4">
					<h2 className="text-3xl xl:text-4xl font-bold mb-4">
						Get in touch
					</h2>
					<Link href={"mailto:william.tanardi@gmail.com"} className="font-medium text-cyan-400 hover:text-cyan-600 hover:underline transition-all">william.tanardi@gmail.com</Link>
					<p>
						Here&apos;s my <Link href={"https://drive.google.com/file/d/1S03FCP78rN3DXWIqUnFivYeIWtY_af4T/view?usp=drive_link"} className="font-medium text-cyan-400 hover:text-cyan-600 hover:underline transition-all">CV</Link>
					</p>
				</section>
			</div>
		</div>
	);
}
