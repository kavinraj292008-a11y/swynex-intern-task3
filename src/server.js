
const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const errorHandler = require("./middleware/error.middleware");

dotenv.config();

const app = express();

app.use(express.json());

const healthRoutes = require("./routes/health.routes");
const taskRoutes = require("./routes/task.routes");

app.use("/", healthRoutes);
app.use("/api/tasks", taskRoutes);

// Handle unknown routes
app.use((req, res, next) => {
    const error = new Error("Route not found");
    error.statusCode = 404;
    error.code = "ROUTE_NOT_FOUND";

    next(error);
});

// Centralized error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
