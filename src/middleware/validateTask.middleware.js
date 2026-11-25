
const validateTask = (type) => {
    return (req, res, next) => {
        const { title, description, status } = req.body;

        const allowedFields = ["title", "description", "status"];

        const invalidFields = Object.keys(req.body).filter(
            (field) => !allowedFields.includes(field)
        );

        if (invalidFields.length > 0) {
            return res.status(400).json({
                success: false,
                error: {
                    code: "INVALID_FIELDS",
                    message: `Unexpected fields: ${invalidFields.join(", ")}`
                }
            });
        }

        if (type === "create" && (
            typeof title !== "string" || !title.trim()
        )) {
            return res.status(400).json({
                success: false,
                error: {
                    code: "VALIDATION_ERROR",
                    message: "Task title is required and must be a string"
                }
            });
        }

        if (title !== undefined) {
            if (
                typeof title !== "string" ||
                title.trim().length < 3 ||
                title.trim().length > 100
            ) {
                return res.status(400).json({
                    success: false,
                    error: {
                        code: "VALIDATION_ERROR",
                        message: "Title must contain 3 to 100 characters"
                    }
                });
            }
        }

        if (description !== undefined) {
            if (
                typeof description !== "string" ||
                description.length > 500
            ) {
                return res.status(400).json({
                    success: false,
                    error: {
                        code: "VALIDATION_ERROR",
                        message: "Description must be a string with at most 500 characters"
                    }
                });
            }
        }

        if (
            status !== undefined &&
            !["pending", "in-progress", "completed"].includes(status)
        ) {
            return res.status(400).json({
                success: false,
                error: {
                    code: "VALIDATION_ERROR",
                    message: "Status must be pending, in-progress, or completed"
                }
            });
        }

        next();
    };
};

module.exports = validateTask;
