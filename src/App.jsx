import "./App.css"
import Signup from "./Component/Signup"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import AuthProvider from "./Context/AuthProvider"
import { BrowserRouter, Router } from "react-router-dom/cjs/react-router-dom.min"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom"
import Dashboard from "./Component/Dashboard"
import Login from "./Component/Login"

function App() {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <BrowserRouter>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/SignUp" component={Signup} />
                <Route path="/LogIn" component={Login} />
              </Switch>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </Container>
    </>
  )
}

export default App
