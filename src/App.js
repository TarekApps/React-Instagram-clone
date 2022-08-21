import "./App.css";
import { useState, useEffect } from "react";
import Pictures from "./Components/Pictures";
import Signup from "./Components/Signup";
import LoginUser from "./Components/LoginUser";
import Display from "./Components/Display";

function App() {
  const [user, setUser] = useState();
  const [loggedIn, setloggedIn] = useState();
  const [showUsers, setShowUsers] = useState(false);
  const [users, setUsers] = useState([""]);


  return (
    <div className='App'>
      <Signup setter={setUser} />
      <LoginUser setter={setloggedIn} />
      <h1>{user}</h1>
      <h1>{loggedIn}</h1>
      <div className="listOfUsers">
        <button onClick={(event) => {setShowUsers(!showUsers)}}>Toggle Users </button>
        { showUsers && <Display setter = {setUsers}/>      
      }
        {/* <Display setter={setUsers} />
      <h1>{users}</h1> */}
      </div>

    
      
      <div>
        <div />
      </div>
    </div>
  );
}

export default App;
