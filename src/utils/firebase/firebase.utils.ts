import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	User,
	NextOrObserver,
	onAuthStateChanged,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	QueryDocumentSnapshot,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCg113wgJGlfL1T8B7SwVSO6a-UezmyAas',
	authDomain: 'hireplus-268ed.firebaseapp.com',
	projectId: 'hireplus-268ed',
	storageBucket: 'hireplus-268ed.appspot.com',
	messagingSenderId: '884090567451',
	appId: '1:884090567451:web:0556a5662a9b0d368ff1be',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});

type AdditionalInfo = {
	displayName?: string;
};
type UserData = {
	createdAt: Date;
	displayName: string;
	email: string;
};
type FormFields = {
	email: string;
	password: string;
	displayName: string;
};

export const auth = getAuth(firebaseApp);
export const db = getFirestore();

// Sign in with google helper
export const signInWithGooglePopup = async (
	userChoice: string,
	additionalInfo: AdditionalInfo
) => {
	await signInWithPopup(auth, googleProvider);
	await createUserBasedOnChoice(auth.currentUser, additionalInfo, userChoice);
};

//Sign in with email and password helper
export const signInEmailAndPassword = async (
	email: string,
	password: string
) => {
	if (!email || !password) return;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		console.log('successfully signed in');
	} catch (error) {
		// send back user not found error
		console.log(error);
	}
};

// create db from signed in user
export const createUserBasedOnChoice = async (
	authUser: User,
	additionalInfo = {} as AdditionalInfo,
	userChoice: string
): Promise<void | QueryDocumentSnapshot<UserData>> => {
	if (!authUser) return;
	const userDocRef =
		userChoice === 'employees'
			? doc(db, 'employees', authUser.uid)
			: doc(db, 'employers', authUser.uid);

	const userSnapShot = await getDoc(userDocRef);

	// if user doc doesn't exist, will create one in collection
	if (!userSnapShot.exists()) {
		const { email, displayName } = authUser;
		const createdAt = new Date();

		try {
			if (userChoice === 'employees') {
				await setDoc(userDocRef, {
					email,
					displayName,
					createdAt,
					...additionalInfo,
					title: '',
					isForHire: false,
					websiteURL: '',
					githubUrl: '',
					yearsOfExperience: 0,
					skills: [],
					summary: '',
					projects: [],
				});
			} else if (userChoice === 'employers') {
				await setDoc(userDocRef, {
					email,
					displayName,
					createdAt,
					...additionalInfo,
					company: '',
					companyURL: '',
					isHiring: false,
					companySize: 50,
					companyType: '',
					jobs: [],
				});
			}
		} catch (error) {
			console.log('get user auth and create doc', error);
		}
		return userSnapShot as QueryDocumentSnapshot<UserData>;
	}
};

// sign up with email and password
export const signUpEmailAndPassword = async (
	formFields: FormFields,
	userChoice: string
) => {
	const { email, password, displayName } = formFields;
	const allowedChoices = ['employees', 'employers'];
	if (!allowedChoices.includes(userChoice)) return;
	try {
		await createUserWithEmailAndPassword(auth, email, password);
		await createUserBasedOnChoice(
			auth.currentUser,
			{ displayName },
			userChoice
		);
	} catch (error) {
		console.log('from within sign up method', error);
	}
};

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
	onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(userAuth) => {
				unsubscribe();
				resolve(userAuth);
			},
			reject
		);
	});
};
