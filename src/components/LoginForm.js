import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";
const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [loading, setloading] = useState(false);
  const history = useHistory();
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    //do validation
    try {
      setError("");
      setloading(true);
      await login(email, password);
      history.push("/");
    } catch (err) {
      console.log(err);
      setError("User Not Found.");
    }
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)} style={{ height: "330px" }}>
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
      />
      <br />
      <TextInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter password"
        icon="lock"
      />
      <br />
      {error && <p className="error">{error}</p>}
      <br />
      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
