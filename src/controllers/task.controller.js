const Task = require("../models/task.model");

const createTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: task
        });

    } catch (error) {
        next(error);
    }
};

const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();

        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });

    } catch (error) {
        next(error);
    }
};

const getTaskById = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
    const error = new Error("Task not found");
    error.statusCode = 404;
    error.code = "NOT_FOUND";
    return next(error);
}

        res.status(200).json({
            success: true,
            data: task
        });

    } catch (error) {
        next(error);
    }
};

const updateTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!task) {
    const error = new Error("Task not found");
    error.statusCode = 404;
    error.code = "NOT_FOUND";
    return next(error);
}

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: task
        });

    } catch (error) {
        next(error);
    }
};

const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
    const error = new Error("Task not found");
    error.statusCode = 404;
    error.code = "NOT_FOUND";
    return next(error);
}

        res.status(200).json({
            success: true,
            message: "Task deleted successfully"
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};