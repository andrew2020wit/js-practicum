const http = require("http");
const pid = process.pid;
http
  .createServer((req, res) => {
    for (let i = 1; i < 1e7; i++) {}
    res.end("hello /n");
  })
  .listen(3000, () => {
    console.log(`App Server started. Pid: ${pid}`);
  });
