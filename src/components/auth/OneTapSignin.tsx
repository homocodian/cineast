import { useState, useEffect } from "react";
import Script from "next/script";

import useOneTapSignin from "@hooks/useOneTapSignin";

type OneTapSigninProps = {
	setLoading?: (value: boolean) => void;
};

function OneTapSignin({ setLoading }: OneTapSigninProps) {
	const [googleOneTapScriptLoaded, setGoogleOneTapScriptLoaded] =
		useState(false);
	const { isLoading: _oneTapIsLoading } = useOneTapSignin({
		redirect: false,
		parentContainerId: "oneTap",
		oneTapScriptLoaded: googleOneTapScriptLoaded,
	});

	useEffect(() => {
		if (!setLoading) return;
		setLoading(_oneTapIsLoading);
	}, [_oneTapIsLoading]);

	return (
		<>
			<Script
				src="https://accounts.google.com/gsi/client"
				defer
				onLoad={() => {
					setGoogleOneTapScriptLoaded(true);
				}}
			/>
			<div
				id="oneTap"
				style={{ position: "absolute", top: "50px", right: "0" }}
			/>
		</>
	);
}

export default OneTapSignin;
