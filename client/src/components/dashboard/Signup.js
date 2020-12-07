import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "./OctopusLogo.png";

export default function SignUp() {
  const [f_name, setFName] = useState("");
  const [l_name, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <div class="logo-section">
         <img src={logo} alt="Logo" class="logo"/>
      </div>
      <Form onSubmit={handleSubmit}>
        <h2>Octopus</h2>
        <Form.Group size="lg" controlId="f_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={f_name}
            onChange={(e) => setFName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="l_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={l_name}
            onChange={(e) => setLName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          SignUp
        </Button>
        <div>Already have an account? Click <Link to="/login">Here</Link></div>
      </Form>
    </div>
  );
}