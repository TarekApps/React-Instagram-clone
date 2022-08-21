import { useEffect} from "react";
import { displayUsers } from "../utils";

const Display = ({ setter }) => {
  const [list, setList] 

  useEffect(() => {
    displayUsers(setter);
  }, []);

  

  return (
    <div>
      <div>
      </div>
    </div>
  );
};
export default Display;
