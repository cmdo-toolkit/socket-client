import debug from "debug";

const socket = debug("cmdo-socket");

export const log = {
  socket,
  error: socket.extend("error"),
  outgoing: socket.extend("outgoing"),
  response: socket.extend("response"),
  message: socket.extend("message"),
  heartbeat: socket.extend("heartbeat")
};
