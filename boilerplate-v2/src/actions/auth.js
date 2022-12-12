import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
} from "firebase/auth";

export const login = (uid) => ({
	type: "LOGIN",
	uid,
});

export const logout = () => ({
	type: "LOGOUT",
});

export const startLogin = () => {
	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	return () => {
		return signInWithPopup(auth, provider);
	};
};

export const startLogOut = () => {
	return () => {
		return signOut(getAuth());
	};
};
