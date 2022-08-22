import { useState } from "react";
import { updateUser } from "../utils";

const UpdateUser = ({ setter }) => {
  const [username, setUsername] = useState();
  const [newUsername, setNewUsername] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    await updateUser(username, newUsername, setter);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Please enter username to Update:</label>
      <br></br>
      <input
        onChange={(event) => setUsername(event.target.value)}
        placeholder='Username'
      ></input>
      <input
        onChange={(event) => setNewUsername(event.target.value)}
        placeholder='New Username'
      ></input>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default UpdateUser;
