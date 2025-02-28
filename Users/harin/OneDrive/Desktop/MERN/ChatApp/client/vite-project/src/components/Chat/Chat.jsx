import { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string";

const ENDPOINT = "http://localhost:5000"; // Declared globally to avoid re-renders
let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);

    if (!socket) {
      socket = io(ENDPOINT, {
        transports: ["websocket"], // Ensures only WebSocket connection
        reconnection: true, // Enables auto-reconnect
        reconnectionAttempts: 5, // Retry 5 times before failing
        timeout: 5000, // Wait 5s before failing
      });

      console.log("Socket initialized:", socket);
    }

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room });

    // Cleanup function
    return () => {
      if (socket) {
        console.log("Closing socket...");
        socket.disconnect(); // Properly disconnect
        socket = null; // Reset socket instance
      }
    };
  }, []); // Runs only once when component mounts

  return <div>This is CHAT Page</div>;
};

export default Chat;
