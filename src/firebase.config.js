import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyC1FRsfy9WzCaVmdYtoVgt1ztHlMfRmm4E",
  authDomain: "hoolabox-drive.firebaseapp.com",
  projectId: "hoolabox-drive",
  storageBucket: "hoolabox-drive.appspot.com",
  messagingSenderId: "437411372340",
  appId: "1:437411372340:web:372751f43652bcb55c9961"
})

export const auth = app.auth()
export default app