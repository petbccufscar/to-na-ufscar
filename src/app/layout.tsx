import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InsertSection from "@/components/layout/InsertSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tô na UFSCar?",
	description: "Simulador de notas do SISU para a UFSCar",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div className="flex flex-col justify-between min-h-screen h-full p-4 px-8">
						<div className="flex flex-col gap-4">
							<Header/>
							<InsertSection/>
							{children}
						</div>
						<Footer/>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
