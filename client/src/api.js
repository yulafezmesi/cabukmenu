import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:1337");

function addNPlayer(cb) {
  socket.on("player_data", (res) => cb(null, res.name));
}

export { addNPlayer };
