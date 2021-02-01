const cluster = require("cluster");
const os = require("os");
const pid = process.pid;

if (cluster.isMaster) {
  console.log(`=== Master ${process.pid} is running`);

  const cpusCount = os.cpus().length;
  console.log(`Cpus: ${cpusCount}`);

  for (let i = 1; i < cpusCount; i++) {
    const worker = cluster.fork(); //create worker
    worker.send({ text: "Hello from master", masterPID: pid });
    worker.on("message", (msg) => {
      console.log(`Master, catch mes: `, msg);
    });
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
}

if (cluster.isWorker) {
  console.log(`Worker ${process.pid} started`);
  require("./app.js");

  process.on("message", (msg) => {
    console.log(`worker (pid: ${pid}) catch mes:`, msg);
  });
  process.send({ text: "Hello from worker", workerPid: pid });
}
