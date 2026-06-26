
module.exports = (err, req, res, next) => {

    req.log.error({
        requestId: req.requestId,
        error: err.message,
        stack: err.stack
    });

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });

};