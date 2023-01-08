import React, { FC, useState } from "react";
import Image, { ImageProps } from "next/image";

interface CustomImageProps extends ImageProps {
	placeholderImageHeight: number;
	placeholderImageWidth: number;
}

const CustomImage: FC<CustomImageProps> = ({
	placeholderImageHeight,
	placeholderImageWidth,
	...props
}) => {
	const [src, setSrc] = useState(props.src);
	return (
		<Image
			{...props}
			src={src}
			alt={props.alt}
			onError={() =>
				setSrc(
					`https://placehold.jp/${placeholderImageWidth}x${placeholderImageHeight}.png?text=404😥`
				)
			}
		/>
	);
};

export default CustomImage;
