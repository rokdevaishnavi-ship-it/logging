
const express = require("express");
const pinoHttp = require("pino-http");

const logger = require("./logger");

const requestId = require("./requestId");
const errorHandler = require("./errorHandler");

const users = require("./users");

const app = express();

app.use(express.json());

// Assign logger to every request
app.use(
    pinoHttp({
        logger
    })
);

// Generate Request ID
app.use(requestId);

// Routes
app.use("/users", users);

// Error Middleware
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, ()=>{

    logger.info(`Server Running on ${PORT}`);

});
