import React, { useContext, useEffect, useState } from "react"
import { auth } from "../firebase.config.js"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loader, setLoader] = useState(true)

  const signUpFunction = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const loginFunction = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signUpFunction,
    loginFunction,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
