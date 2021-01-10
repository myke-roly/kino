import app from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './config';

export function initialApp() {
  if (!app.apps.length) {
    app.initializeApp(firebaseConfig);
    // app.analytics();
  } else {
    app.auth();
  }
}

interface UserI {
  email: string;
  password: string;
}

export async function signIn(user: UserI): Promise<any> {
  return await app.auth().signInWithEmailAndPassword(user.email, user.password);
}

export async function signUp(user: UserI): Promise<any> {
  return await app.auth().createUserWithEmailAndPassword(user.email, user.password);
}

export async function signOut() {
  await app.auth().signOut();
}
