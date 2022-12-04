import React, { CSSProperties } from "react";

import SearchIcon from "../assets/icons/Search.svg";

interface IProps {
	outerContainerStyle?: CSSProperties;
	inputStyle?: CSSProperties;
}

function Searchbar({ outerContainerStyle, inputStyle }: IProps) {
	return (
		<div
			className="hidden w-1/3 items-center gap-2 rounded-3xl border px-4 py-1 sm:flex"
			style={outerContainerStyle}
		>
			<SearchIcon height={15} width={15} fill="#F2F0F0" />
			<input
				type="text"
				className="w-full bg-transparent px-1 outline-none placeholder:text-sm focus:outline-none "
				placeholder="Search here..."
				style={inputStyle}
			/>
		</div>
	);
}

export default Searchbar;
