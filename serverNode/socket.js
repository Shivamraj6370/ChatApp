//import { accessdata } from "./controller/chat";
global.onlineUsers = new Map();
export const useSocket = (io) => {
  io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
      console.log("userId", userId);
      console.log("socket.id", socket.id);
      onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
      console.log("data", data.to);
      const sendUserSocket = onlineUsers.get(data.to);
      console.log("sendUserSocket", sendUserSocket);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit("msg-recieve", data.msg);
      }
    });
  });
};
