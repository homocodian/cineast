import { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
	className: string | undefined;
}

function Container({ children, className }: ContainerProps) {
	return <div className={`mx-auto max-w-5xl ${className}`}>{children}</div>;
}

export default Container;
