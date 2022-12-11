import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
		return res.status(401).json({ message: "Invalid token" });
	}
	try {
		if (!req.query.url) {
			for (const url of req.body) {
				await res.revalidate(url);
			}
		} else {
			await res.revalidate(req.query.url as string);
		}
		return res.json({ revalidated: true });
	} catch (err) {
		return res.status(500).send("Error revalidating");
	}
}
