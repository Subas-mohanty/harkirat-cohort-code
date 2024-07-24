import WebSocket, { WebSocketServer } from 'ws';
import express from 'express';

const app = express();
const server = app.listen(8080);

const wss = new WebSocketServer({ server });

let userCount = 0;
wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
      wss.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
             client.send(data, { binary: isBinary });
          }
          });
      });
  });
// server.listen(8080, function() {
//     console.log((new Date()) + ' Server is listening on port 8080');
// });
