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
		<html lang="en" className="dark">
			<body className={`${montserrat.variable} ${monoton.variable} antialiased`} >
				<div className="container relative bg-gray-900 mx-auto">
					<div className="px-8 py-8 z-10 top-0 left-0 sticky flex justify-between">
						<Logo home={true} />
						<NavBar />
					</div>
					{children}
					<div className="bottom-0 sticky py-4">
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
