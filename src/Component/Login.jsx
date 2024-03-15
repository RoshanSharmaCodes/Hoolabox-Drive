import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../Context/AuthProvider"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function LogIn() {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const {signUpFunction, currentUser, loginFunction } = useAuth()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (passwordRef.current.value == "" || emailRef.current.value == "") {
      return setError("Input fields cannot be empty")
    }

    try {
      setError("")
      setLoading(true)
      loginFunction(emailRef.current.value, passwordRef.current.value)
      setLoading(false)
    } catch {
      setError("Failed to SignIn, Try Again Later...")
    }
  }

  return (
    <>
      {" "}
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4 w-full">Log-In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group className="text-left" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group className="text-left" id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Don't have account? <Link to="/SignUp">Sign Up</Link></div>
    </>
  )
}
