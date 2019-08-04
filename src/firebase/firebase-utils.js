import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAaG2atHe5_BzjsKtSdprEEFJUEmGkWXiA',
	authDomain: 'ng-fitness-tracker-6da2d.firebaseapp.com',
	databaseURL: 'https://ng-fitness-tracker-6da2d.firebaseio.com',
	projectId: 'ng-fitness-tracker-6da2d',
	storageBucket: 'ng-fitness-tracker-6da2d.appspot.com',
	messagingSenderId: '687312032637',
	appId: '1:687312032637:web:c2da07ab7ff6fb93',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
