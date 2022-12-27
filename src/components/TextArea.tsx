import { useState, ChangeEvent } from "react";

interface TextAreaProps {
	maxLength: number;
}

function TextArea({ maxLength }: TextAreaProps) {
	const [text, setText] = useState("");
	const [textCount, setTextCount] = useState(0);

	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
		setTextCount(e.target.textLength);
	};

	return (
		<div>
			<textarea
				className="w-full rounded-md bg-transparent px-4 py-2 shadow-none ring-0 focus:border focus:border-twitter-blue focus:outline-none"
				placeholder="Enter your thoughts..."
				maxLength={maxLength}
				onChange={onChange}
				value={text}
			/>
			<div className="text-end">
				{textCount} / {maxLength}
			</div>
		</div>
	);
}

export default TextArea;
