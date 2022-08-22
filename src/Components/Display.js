import { useEffect, useState} from "react";
import { displayUsers } from "../utils";

const Display = () => {
  const [list, setList] = useState()
  useEffect(() => {
    displayUsers(setList);
  }, []);

  

  return (
    <div>
      <div>
        <h1>{list}</h1>
      </div>
    </div>
  );
};
export default Display;
