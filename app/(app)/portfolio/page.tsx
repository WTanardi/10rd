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

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";

interface Project {
	name: string,
	url?: string,
	image: string,
	description: string,
	stack: string[],
}

const projects: Project[] = [
	{
		name: "Movie List Website",
		url: "https://movie-list-website-wt.netlify.app/",
		image: "/movie_list_website.png",
		description: `
			A movie list website that fetches real-time data from the IMDb API.
			Displaying movie rating and description in a glance.
		`,
		stack: ["/react.svg"]
	},
	{
		name: "Pantry Pilot",
		url: "https://pantry-pilot.vercel.app/",
		image: "/pantry_pilot.png",
		description: `
			Pantry Pilot is a web application designed to help users discover meals according to the ingredients they have in store
		`,
		stack: ["/nextjs.svg", "/postgresql.svg", "/nextauth.svg", "/prisma.svg", "/tailwind.svg"]
	}
]

export default function Home() {
	return (
		<div>
			<div className="container relative bg-gray-900 mx-auto font-sans">
				<section className="py-2 text-center px-8">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold py-4">
						Recent Works
					</h1>
				</section>
				<section className="flex justify-center flex-wrap">
					<Carousel className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto py-8">
						<CarouselContent>
							{projects.map((e, i) => (
								<CarouselItem key={i} className="basis-11/12 lg:basis-2/3">
									<Card className="pt-0 shadow-xl rounded-t-3xl border-1 border-gray-900 bg-gray-800 h-120">
										<div className="px-0 h-144 overflow-hidden mask-b-from-20% mask-b-to-95% rounded-t-2xl select-none">
											<Image src={e.image} alt={e.image} height={1000} width={1000} className="object-fit layout-fill" />
										</div>
										<CardHeader className="text-2xl md:text-4xl mt-0 font-medium">
											<Link href={e.url}>
												{e.name}
											</Link>
										</CardHeader>
										<CardContent className="font-light flex flex-col justify-between h-full">
											<p>
												{e.description}
											</p>
											<div className="flex gap-2">
												{
													e.stack.map((tech, idx) => (
														<div key={idx} className="border-1 rounded-full max-w-9 mt-4 p-2 select-none">
															<Image src={tech} alt={tech} height={100} width={100} />
														</div>
													))
												}
											</div>
										</CardContent>
										<CardFooter className="w-full">
											<CardAction className="rounded-full border-1 py-2 px-4 hover:border-white duration-700 select-none">
												<Link href={'/'}>View Project</Link>
											</CardAction>
										</CardFooter>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</section>
			</div>
		</div>
	);
}
