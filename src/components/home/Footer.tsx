import {
	SiInstagram,
	SiTwitter,
	SiDiscord,
	SiGoogleplay,
} from "react-icons/si";

function Footer() {
	return (
		<footer className="grid place-items-center space-y-4 border-t border-gray-600 bg-dark-card py-12">
			{/* social links */}
			<div className="flex items-center gap-4">
				<span className="text-lg font-medium">Follow us</span>
				<div className="cursor-pointer rounded-full border border-gray-700 p-3 text-center hover:bg-gray-700">
					<SiInstagram className="h-5 w-6 text-white" />
				</div>
				<div className="cursor-pointer rounded-full border border-gray-700 p-3 text-center hover:bg-gray-700">
					<SiTwitter className="h-5 w-6 text-white" />
				</div>
				<div className="cursor-pointer rounded-full border border-gray-700 p-3 text-center hover:bg-gray-700">
					<SiDiscord className="h-5 w-6 text-white" />
				</div>
			</div>

			{/* donwload app */}
			<div className="flex items-center gap-4">
				<span className="text-lg font-medium">Download Now</span>
				<a
					className="btn btn-google"
					href="https://play.google.com/store/apps/details?id=com.cineast.android"
					title="Google Play"
					target="_blank"
				>
					Google Play
				</a>
			</div>
			<p className="text-muted">Cineast © 2023</p>
		</footer>
	);
}

export default Footer;
