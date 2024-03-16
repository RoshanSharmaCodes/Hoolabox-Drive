import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../Context/AuthProvider"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function PasswordReset() {
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const {passResetFunction } = useAuth()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (emailRef.current.value == "") {
      return setError("Input fields cannot be empty")
    }

    try {
      setError("")
      setLoading(true)
      passResetFunction(emailRef.current.value)
      setMessage("Passwrod Link has been sent to your email.")
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
          <h2 className="text-center mb-4 w-full">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group className="text-left" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          {message && <div className="w-100 text-center mt-2 text-text-success">{message}</div>}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Want to Login? <Link to="/Login">Log In</Link></div>
    </>
  )
}
