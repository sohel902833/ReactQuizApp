import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";
const SignupForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setloading] = useState(false);
  const history = useHistory();
  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    //do validation
    if (password !== confirmPassword) {
      return setError("Password Doesn't Matched.");
    }

    try {
      setError("");
      setloading(true);
      await signup(email, password, userName);
      history.push("/");
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }

  return (
    <Form
      onSubmit={(e) => handleSubmit(e)}
      style={{ height: "500px" }}
      className={`form`}
    >
      <TextInput
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        required
        placeholder="Enter Name"
        icon="person"
      />
      <TextInput
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter Email"
        icon="alternate_email"
      />
      <TextInput
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter Password"
        icon="lock"
      />
      <TextInput
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        placeholder="Confirm Password"
        icon="lock_clock"
      />
      <CheckBox
        required
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        type="checkbox"
        text="I agree to the Terms & Conditions"
      />
      {error && <p className="error">{error}</p>}
      <br />
      <Button disabled={loading} type="submit">
        <span>Submit now</span>
      </Button>
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
