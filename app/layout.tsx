import { ReactNode } from "react";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { inter, scp } from "@/app/fonts";
import Breadcrumbs from "@/components/Breadcrumbs";

interface LayoutProps {
	children: ReactNode;
	title: string;
}

export const metadata = {
	title: "Reviews",
	description: "desc",
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en" className={`${scp.variable} ${inter.variable}`}>
			<body className={`flex flex-col min-h-screen prose-invert `}>
				<Nav />
				<main className="relative w-full max-w-[1200px] px-2 py-6 mx-auto grow border-slate-300">
					<div className="mb-6">
						<Breadcrumbs />
					</div>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
