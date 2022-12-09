import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const startLogin = () => {
	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	return () => {
		return signInWithPopup(auth, provider);
	};
};
