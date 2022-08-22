import "./App.css";
import { useState, useEffect } from "react";
import Pictures from "./Components/Pictures";
import Signup from "./Components/Signup";
import LoginUser from "./Components/LoginUser";
import Display from "./Components/Display";
import DeleteUser from "./Components/DeleteUser";
import UpdateUser from "./Components/UpdateUser";

function App() {
  const [user, setUser] = useState();
  const [loggedIn, setloggedIn] = useState();
  const [showUsers, setShowUsers] = useState(false);
  const [users, setUsers] = useState([""]);
  const [displayPics, SetDisplayPics] = useState(false);

  return (
    <div className='App'>
      <h1>INSTAGRAM CLONE</h1>
      <Signup setter={setUser} />
      <LoginUser setter={setloggedIn} />
      <h1>{user}</h1>
      <h1>{loggedIn}</h1>
      <div className='listOfUsers'>
        <button
          onClick={(event) => {
            setShowUsers(!showUsers);
          }}
        >
          Toggle Users{" "}
        </button>
        {showUsers && <Display setter={setUsers} />}
      </div>
      {loggedIn ? (
        <div className='picturesCont'>
          <button
            onClick={(event) => {
              SetDisplayPics(!displayPics);
            }}
          >
            Toggle Pictures
          </button>
          {displayPics && <Pictures />}
          <div className='deleteCont'>
            <DeleteUser />
          </div>
          <div className='updateCont'>
            <UpdateUser />
          </div>
        </div>
      ) : (
        <div>
          <h1>please login to see your instagram feed!</h1>
        </div>
      )}

      <div>
        <div />
      </div>
    </div>
  );
}

export default App;
