import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "",
  authDomain: "hoolabox-drive.firebaseapp.com",
  projectId: "hoolabox-drive",
  storageBucket: "hoolabox-drive.appspot.com",
  messagingSenderId: "437411372340",
  appId: ""

})

export const auth = app.auth()
export default app
