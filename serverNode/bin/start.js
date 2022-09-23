"use strict";
require("@babel/polyfill");
require("@babel/register");

const app = require("../app").default;
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const socketIO = new Server(server, {
  cors: {
    origin: "*",
  },
});

const useocket = require("../socket").useSocket;
useocket(socketIO);

const config = require("../config");
const configValue = config.get("staging");
const port = configValue.port_no;

server.listen(port);
server.on("listening", () => {
  console.log("server is created on port no: " + port);
});
