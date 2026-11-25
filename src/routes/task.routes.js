
const express = require("express");
const router = express.Router();

const apiKeyAuth = require("../middleware/apiKey.middleware");
const validateTask = require("../middleware/validateTask.middleware");

const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require("../controllers/task.controller");

// Create a task
router.post("/", apiKeyAuth, validateTask("create"), createTask);

// Get all tasks
router.get("/", getTasks);

// Get a task by ID
router.get("/:id", getTaskById);

// Update a task
router.put("/:id", apiKeyAuth, validateTask("update"), updateTask);

// Delete a task
router.delete("/:id", apiKeyAuth, deleteTask);

module.exports = router;
