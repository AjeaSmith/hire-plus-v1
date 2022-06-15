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
	updateProfile,
	signOut,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	QueryDocumentSnapshot,
	collection,
	query,
	getDocs,
	where,
	updateDoc,
} from 'firebase/firestore';
import { SignUpFields, ProfileData } from '../../app/features/user/userTypes';
import { ExperienceData } from '../../app/features/profile/profileTypes';
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

export const auth = getAuth();
export const db = getFirestore();

// Sign in with google helper
export const signInWithGooglePopup = async (
	additionalInfo = {} as AdditionalInfo
) => {
	await signInWithPopup(auth, googleProvider);
	await createUserDocument(auth.currentUser, additionalInfo);
};

// sign up with email and password
export const signUpEmailAndPassword = async (formFields: SignUpFields) => {
	const { email, password, displayName } = formFields;

	const { user } = await createUserWithEmailAndPassword(auth, email, password);
	await updateProfile(user, { displayName });
	await createUserDocument(user, { displayName });
	// return { uid: user.uid, displayName: user.displayName };
	return user;
};

// Sign in with email and password helper
export const signInEmailAndPassword = async (
	email: string,
	password: string
) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

// create db from signed in user
export const createUserDocument = async (
	authUser: User,
	additionalInfo = {} as AdditionalInfo
): Promise<void | QueryDocumentSnapshot<ProfileData>> => {
	if (!authUser) return;
	const userDocRef = doc(db, 'employees', authUser.uid);

	const userSnapShot = await getDoc(userDocRef);

	// if user doc doesn't exist, will create one in collection
	if (!userSnapShot.exists()) {
		const { email, displayName } = authUser;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				id: authUser.uid,
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
				experience: [],
			});
		} catch (error) {
			console.log('get user auth and create doc', error);
		}
		return userSnapShot as QueryDocumentSnapshot<ProfileData>;
	}
};

export const logoutUser = async () => await signOut(auth);

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

// ----------- PROFILE API ----------------------------

export const getProfile = async (id: string): Promise<ProfileData[]> => {
	const collectionRef = collection(db, 'employees');
	const q = query(collectionRef, where('id', '==', id));

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((docSnapshot) => {
		return docSnapshot.data() as ProfileData;
	});
};

export const updateProfileById = async (
	id: string,
	data: {}
): Promise<void> => {
	const docRef = doc(db, 'employees', id);

	updateDoc(docRef, {
		title: 'Web developer!',
	}).then(() => {
		console.log('updated successfully');
	});
};
