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
			"placehold.jp",
			"i3.ytimg.com",
			"img.youtube.com",
		],
	},
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: "/:path*",
				headers: [
					{
						key: "Referrer-Policy",
						value:
							process.env.NODE_ENV === "development"
								? "no-referrer-when-downgrade"
								: "origin-when-cross-origin",
					},
				],
			},
		];
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
