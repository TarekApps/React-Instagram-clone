import { useState } from "react";
import { deleteUser } from "../utils";

const DeleteUser = ({ setter }) => {
  const [username, setUsername] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    await deleteUser(username, setter);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Please enter username to delete:</label>
      <br></br>
      <input
        onChange={(event) => setUsername(event.target.value)}
        placeholder='Username'
      ></input>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default DeleteUser;
