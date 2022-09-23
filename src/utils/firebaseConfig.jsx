// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDnC6nSiv5jbMjTArFvJURnTOlp2eR1vyQ',
	authDomain: 'entropy-unbounded-react.firebaseapp.com',
	projectId: 'entropy-unbounded-react',
	storageBucket: 'entropy-unbounded-react.appspot.com',
	messagingSenderId: '225532053066',
	appId: '1:225532053066:web:d79c3437cac4d6144c48b3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const fsFetchDocs = async () => {
	const querySnapshot = await getDocs(collection(db, 'products'));
	const fsData = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	return fsData;
};

export const fsFetchDocById = async (id) => {
	const docRef = doc(db, 'products', id);
	const docSnap = await getDoc(docRef);		
	if (docSnap.exists()) {
		const item = docSnap.data()
		item.id = id;
		return item;
	} else {
		// doc.data() will be undefined in this case
		console.log('No such document!');
	}
	
};
