// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
	getDatabase,
	ref,
	push,
	set,
	query,
	onValue,
	child,
	get,
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export {
	ref,
	push,
	get,
	getDatabase,
	child,
	set,
	onValue,
	database as default,
};

// const dbRef = ref(db, "expenses");

// onValue(
// 	dbRef,
// 	(snapshot) => {
// 		snapshot.forEach((childSnapshot) => {
// 			console.log(childSnapshot.val());
// 		});
// 	},
// 	{ onlyOnce: true }
// );

// const docRef = doc(database, "expenses");
// const docSnap = getDoc(docRef)
// 	.then(() => {
// 		console.log("Document data", docSnap.data());
// 	})
// 	.catch(() => {
// 		console.log("No such document");
// 	});

// const expensesListRef = ref(database, "expenses");

// const expenses = query(expensesListRef);
// expenses.console.log("firebase expenses", expenses);

// const newExpenseRef = push(expensesListRef, {
// 	description: "Rent",
// 	note: "",
// 	amount: 10900,
// 	createdAt: 4234534645,
// });

// const newExpenseRef2 = push(expensesListRef, {
// 	description: "Rent2",
// 	note: "a",
// 	amount: 100,
// 	createdAt: 9234534645,
// });

// const newExpenseRef3 = push(expensesListRef, {
// 	description: "Rent3",
// 	note: "",
// 	amount: 10900,
// 	createdAt: 12312312312,
// });
