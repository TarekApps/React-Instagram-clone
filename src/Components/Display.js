import { useState, useEffect } from "react";
import { displayUsers } from "../utils";

const Display = ({ setter }) => {
  const [userList, setUserList] = useState([]);
  const submitHandler = async (event) => {
    event.preventDefault();
    const list = await displayUsers(setter);
    setUserList(list);
    console.log(userList)
  };

  return (
    <div>
      <button onClick={submitHandler}>All users</button>
      <div>
        
      <h1>{userList}</h1>
      </div>
    </div>
  );
};
export default Display;
