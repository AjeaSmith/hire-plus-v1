import { initializeApp } from 'firebase/app';
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
	arrayUnion,
} from 'firebase/firestore';
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
	ProfileData,
	UpdatedFields,
} from '../../app/features/profile/profileTypes';
import { JobData } from '../../app/features/job/jobTypes';
import { SignUpFields } from '../../app/features/user/userTypes';
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
type CompanyData = {
	id: string;
	companyName: string;
	companyDescription: string;
	companyUrl: string;
	email: string;
	isHiring: boolean;
	companySize: string;
	jobs: Jobs[];
};
type Jobs = {
	position: string;
	location: string;
	salary: string;
	datePosted: string;
	jobType: string;
	applyUrl: string;
	description: string;
	companyName: string;
};
// Firebase setup
export const auth = getAuth();
export const db = getFirestore(firebaseApp);

// Sign in with google helper
export const signInWithGooglePopup = async (
	additionalInfo = {} as AdditionalInfo
) => {
	const { user } = await signInWithPopup(auth, googleProvider);
	await createUserDocument(user);
};

// sign up with email and password
export const signUpEmailAndPassword = async (formFields: SignUpFields) => {
	const { email, password, displayName } = formFields;

	const { user } = await createUserWithEmailAndPassword(auth, email, password);
	await updateProfile(user, { displayName });
	await createUserDocument(user);
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
	authUser: User
): Promise<void | QueryDocumentSnapshot<ProfileData>> => {
	if (!authUser) return;
	const userDocRef = doc(db, 'employees', authUser.uid);

	const userSnapShot = await getDoc(userDocRef);

	// if user doc doesn't exist, will create one in collection
	if (!userSnapShot.exists()) {
		const { email } = authUser;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				id: authUser.uid,
				email,
				createdAt,
				headline: '',
				isForHire: false,
				websiteURL: '',
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

export const updateUserProfileById = async (data: UpdatedFields) => {
	const {
		id,
		headline,
		summary,
		skills,
		projects,
		experience,
		isForHire,
		websiteURL,
	} = data;
	const docRef = doc(db, 'employees', id);
	const currentDocSnap = await getDoc(docRef);
	await updateDoc(docRef, {
		isForHire: isForHire ? isForHire : currentDocSnap.data().isForHire,
		websiteURL: websiteURL ? websiteURL : currentDocSnap.data().websiteURL,
		headline: headline ? headline : currentDocSnap.data().headline,
		summary: summary ? summary : currentDocSnap.data().summary,
		skills: arrayUnion(...skills),
		projects: arrayUnion(...projects),
		experience: arrayUnion(...experience),
	}).then(() => {
		console.log('updated successfully');
	});
};

// ----------- JOB API ----------------------------
export const getJobs = async (): Promise<JobData[]> => {
	const querySnapshot = await getDocs(collection(db, 'jobs'));
	return querySnapshot.docs.map((doc) => {
		return doc.data() as JobData;
	});
};
export const getJobById = async (id: string): Promise<JobData[]> => {
	const collectionRef = collection(db, 'jobs');
	const q = query(collectionRef, where('id', '==', id));

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((docSnapshot) => {
		return docSnapshot.data() as JobData;
	});
};

// ----------- COMPANY API ----------------------------
export const getCompanyById = async (id: string) => {
	const collectionRef = collection(db, 'employers');
	const q = query(collectionRef, where('id', '==', id));

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((docSnapshot) => {
		return docSnapshot.data() as CompanyData;
	});
};
