// const pino = require('pino');

// const logger = pino({
//   level: 'trace',
//   customLevels: {
//     database: 35,
//     security: 45
//   }
// });

// logger.database("Slow Query detected - 1200ms");
// logger.security('Suspicious login attempt from unknown IP')

// Custom Logs

// {"level":35,
//   "time":1782466270310,
//   "pid":15536,
//   "hostname":"Vaishnavi",
//   "msg":"Slow Query detected - 1200ms"}

// Logs
// {
//   "level":30,
//   "time":1782465823992,
//   "pid":6228,
//   "hostname":"Vaishnavi",
//   "msg":"Hello from Pino...!"
// }


// default log levels in pino
// trace - 10
// debug - 20
// info - 30
// warn - 40
// error - 50
// fatal - 60

// ------------------------------------------------------------------

//Human Readable logs with pino-pretty

// const pino = require('pino');

// const logger = pino({
//   formatters: {
//     level(label) {
//       return { level: label } // changes 30 → "info"
//     }
//   }});

// logger.warn("hello to my pino-pretty logs")


const pino = require("pino");

const logger = pino({
  level: process.env.LOG_LEVEL || "info",

  timestamp: pino.stdTimeFunctions.isoTime,

  base: {
    service: "User-Service",
    environment: process.env.NODE_ENV || "development"
  }
});

module.exports = logger;
