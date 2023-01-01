import { ReactNode } from "react";

import Navbar from "./Navbar";
import Container from "./Container";
import SideNavbar from "./SideNavbar";

type RootLayoutProps = {
	children?: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
	return (
		<Container className="mt-5 mb-8 px-4">
			<div className="flex gap-10">
				<aside className="hidden select-none md:block">
					<SideNavbar />
				</aside>
				<div className="flex-grow">
					{/* header */}
					<Navbar />
					{/* main */}
					<div className="mt-6 flex gap-8 md:mt-10">{children}</div>
				</div>
			</div>
		</Container>
	);
}

export default RootLayout;
