import "./styles.css";
import React, { useState } from "react";

export default function App() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = { id: new Date().getTime().toString(), email, password };

      setAllEntry([...allEntry, newEntry]);
      console.log(allEntry);

      setEmail("");
      setPassword("");
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <div className="App">
      <h2>Login</h2>
      <form action="" onSubmit={submitForm}>
        <div className="user-box">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="user-box">
          <label htmlFor="password ">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button id="btn" type="submit">
          Login
        </button>
      </form>
      <div className="dataStyle">
        {allEntry.map((curElem) => {
          const { id, email, password } = curElem;
          return (
            <div className="dataStyle" key={curElem.id}>
              <p>{curElem.email}</p>
              <p>{curElem.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
