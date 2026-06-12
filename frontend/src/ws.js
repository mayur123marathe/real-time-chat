import { io } from "socket.io-client";

export function connectWS() {
  return io("https://real-time-chat-0f38.onrender.com");
}
