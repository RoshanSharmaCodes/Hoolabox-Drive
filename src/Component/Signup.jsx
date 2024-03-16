import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../Context/AuthProvider"
import { Link } from "react-router-dom/cjs/react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function Signup() {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const {currentUser, signUpFunction, loginFunction  } = useAuth()
  const passwordConfirmRef = useRef()

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password does not match")
    }
    if (passwordRef.current.value == "" || passwordConfirmRef.current.value == "" || emailRef.current.value == "") {
      return setError("Input fields cannot be empty")
    }

    try {
      setError("")
      setLoading(true)
      signUpFunction(emailRef.current.value, passwordRef.current.value)
      setLoading(false)
      history.push("/Login")
    } catch {
      setError("Failed to SignIn, Try Again Later...")
    }
  }

  return (
    <>
      {" "}
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4 w-full">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="text-left" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group className="text-left" id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group className="text-left" id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Already have an account? <Link to="/LogIn">Log In</Link></div>
    </>
  )
}
