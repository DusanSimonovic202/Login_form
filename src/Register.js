import { useState } from "react";

export const Register = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          value={name}
          id="name"
          placeholder="full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">email</label>
        <input
          value={email}
          type="email"
          placeholder="Your email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          value={password}
          type="password"
          placeholder="Your password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => onFormSwitch("login")}>
        Don't have an account ? Login
      </button>
    </div>
  );
};
