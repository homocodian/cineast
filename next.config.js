/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"pbs.twimg.com",
			"lh3.googleusercontent.com",
			"source.unsplash.com",
			"image.tmdb.org",
			"res.cloudinary.com",
			"media.tenor.com",
		],
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: {
				loader: "@svgr/webpack",
				options: {
					svgoConfig: {
						plugins: [
							{
								name: "removeViewBox",
								active: false,
							},
						],
					},
				},
			},
		});

		return config;
	},
};

module.exports = nextConfig;
