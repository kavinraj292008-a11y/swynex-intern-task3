
const apiKeyAuth = (req, res, next) => {
    const apiKey = req.headers["x-api-key"];

    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({
            success: false,
            error: {
                code: "UNAUTHORIZED",
                message: "Invalid or missing API key"
            }
        });
    }

    next();
};

module.exports = apiKeyAuth;
