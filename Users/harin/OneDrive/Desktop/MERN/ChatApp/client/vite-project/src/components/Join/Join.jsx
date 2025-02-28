import { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";  // Importing CSS file

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">  {/* Updated class name */}
      <div className="joinInnerContainer">  {/* Updated class name */}
        <h1 className="heading">Join</h1>  {/* Updated class name */}
        
        <div>
          <input 
            type="text" 
            placeholder="Name" 
            className="joinInput" 
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <input 
            type="text" 
            placeholder="Room Name" 
            className="joinInput" 
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>

        <Link 
          onClick={(event) => {
            if (!name || !room) event.preventDefault();
          }} 
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
