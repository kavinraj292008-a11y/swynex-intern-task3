
const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";
    let code = err.code || "INTERNAL_SERVER_ERROR";

    if (err.name === "ValidationError") {
        statusCode = 400;
        code = "VALIDATION_ERROR";
        message = Object.values(err.errors)
            .map(error => error.message)
            .join(", ");
    }

    if (err.name === "CastError") {
        statusCode = 400;
        code = "INVALID_ID";
        message = "Invalid resource ID";
    }

    res.status(statusCode).json({
        success: false,
        error: {
            code,
            message
        }
    });
};

module.exports = errorHandler;
