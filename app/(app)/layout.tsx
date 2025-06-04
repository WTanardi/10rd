import type { Metadata } from "next";
import "../globals.css";

import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";

import { Montserrat, Monoton } from "next/font/google";

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat'
})

const monoton = Monoton({
	weight: "400",
	subsets: ['latin'],
	variable: '--font-monoton'
})

export const metadata: Metadata = {
	title: "10RD",
	description: "William Tanardi's personal website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable} ${monoton.variable} antialiased`} >
				<div className="container relative bg-gray-900 mx-auto">
					<div className="px-8 pt-8 pb-4 z-10 top-0 left-0 sticky flex justify-between bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
						<Logo />
						<NavBar />
					</div>
					{children}
					<div className="bottom-0 py-4">
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
