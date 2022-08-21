import { useState } from "react";
import { login } from "../utils";

const LoginUser = ({ setter }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    await login(username, password, setter);
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>LOGIN</h1>
      <label>
        Username:
        <input onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br></br>
      <label>
        Password:
        <input onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br></br>
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginUser;
