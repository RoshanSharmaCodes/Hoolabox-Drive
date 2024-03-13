import "./App.css"
import Signup from "./Component/Signup"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import AuthProvider from "./Context/AuthProvider"

function App() {
  return (
    <>
      <AuthProvider>
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Signup />
          </div>
        </Container>
      </AuthProvider>
    </>
  )
}

export default App
