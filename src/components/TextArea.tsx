import { useState, ChangeEvent } from "react";

interface TextAreaProps {
	maxLength: number;
	className?: string;
	row?: number;
}

function TextArea({ maxLength, className, row }: TextAreaProps) {
	const [text, setText] = useState("");
	const [textCount, setTextCount] = useState(0);

	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
		setTextCount(e.target.textLength);
	};

	return (
		<div>
			<textarea
				className={`w-full rounded-md bg-[#2E2E2E] px-4 py-2 shadow-none placeholder:text-muted focus:outline-none ${
					className ?? ""
				}`}
				placeholder="Enter your thoughts..."
				maxLength={maxLength}
				onChange={onChange}
				value={text}
				rows={row}
			/>
			<div className="text-end">
				{textCount} / {maxLength}
			</div>
		</div>
	);
}

export default TextArea;
