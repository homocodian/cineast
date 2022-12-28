import { User, Account } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

import generateRandomNumber from "./generateRandomNumber";

function generateNewUserData(
	user: User | AdapterUser,
	account: Account | null
) {
	return {
		id: user.id,
		username: user.name
			? user.name.split(" ").join("").toLowerCase() + generateRandomNumber()
			: `cineast_user_${generateRandomNumber()}`,
		display_name: user.name,
		email: user.email,
		avatar_url: user.image,
		backdrop_url: "",
		bio: "",
		device_id: "WEB",
		token_id: "",
		auth_method: account?.provider?.toUpperCase(),
	};
}

export default generateNewUserData;
