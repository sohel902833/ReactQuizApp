import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Result from "../components/Pages/Result";
import { AuthProvider } from "../context/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Signup from "./Pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute exact path="/signup" component={Signup} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/quiz/:videoId" component={Quiz} />
            <PrivateRoute exact path="/result/:videoId" component={Result} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}
export default App;
