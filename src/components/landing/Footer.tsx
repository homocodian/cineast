import { SiInstagram, SiTwitter, SiDiscord } from "react-icons/si";

function Footer() {
	return (
		<footer className="grid place-items-center space-y-4 border-t border-gray-600 bg-dark-card py-12">
			{/* social links */}
			<div className="flex items-center gap-4">
				<span className="text-lg font-medium">Follow us</span>
				<a
					href="https://www.instagram.com/cineast.app/"
					target="_blank"
					rel="noreferrer"
					className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-700 text-center hover:bg-gray-700"
				>
					<SiInstagram className="h-5 w-6 text-white" />
				</a>
				<a
					href="https://twitter.com/cineast_app"
					target="_blank"
					rel="noreferrer"
					className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-700 text-center hover:bg-gray-700"
				>
					<SiTwitter className="h-5 w-6 text-white" />
				</a>
				<a
					href="https://discord.gg/TbyJkREZ7P"
					target="_blank"
					rel="noreferrer"
					className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-700 text-center hover:bg-gray-700"
				>
					<SiDiscord className="h-5 w-6 text-white" />
				</a>
			</div>

			{/* donwload app */}
			<div className="flex items-center gap-4">
				<span className="text-lg font-medium">Download Now</span>
				<a
					className="btn btn-google"
					href="https://play.google.com/store/apps/details?id=com.cineast.android"
					title="Google Play"
					target="_blank"
					rel="noreferrer"
				>
					Google Play
				</a>
			</div>
			<p className="text-muted">Cineast © 2023</p>
		</footer>
	);
}

export default Footer;
