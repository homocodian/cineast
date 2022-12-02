import { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

function Container({ children, className }: ContainerProps) {
	return (
		<div className={classNames("mx-auto max-w-6xl", className ?? "")}>
			{children}
		</div>
	);
}

export default Container;
