const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const Router = require("./router");

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);

// Enable CORS for API routes
app.use(cors({
  origin: "http://localhost:5173", // Frontend URL
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json()); // Parse JSON
app.use(Router);

// Configure Socket.IO with CORS
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join", ({ name, room }) => {
    console.log(`User ${name} joined room ${room}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
