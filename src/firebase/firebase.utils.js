import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
	apiKey: 'AIzaSyAl9hxWwYPf1sBo3kB4xwd8KS5HrfPkzoQ',
	authDomain: 'truth-ecommerce-db.firebaseapp.com',
	projectId: 'truth-ecommerce-db',
	storageBucket: 'truth-ecommerce-db.appspot.com',
	messagingSenderId: '878051015321',
	appId: '1:878051015321:web:487683a156947ef4285608',
	measurementId: 'G-9JV69MJ0RJ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
