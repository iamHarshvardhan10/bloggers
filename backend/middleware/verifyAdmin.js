export const isAdmin = (req, res, next) => {
    try {
        if (!req.user || req.user.role !== "Admin") {
            return res.status(403).json({
                message: "Access denied. Admins only.",
                success: false
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
            error: error.message
        });
    }
};
