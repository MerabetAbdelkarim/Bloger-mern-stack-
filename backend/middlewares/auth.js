const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).send({ message: "Access denied. No token provided." });
    }

    const token = authHeader.replace("Bearer ", "");

    try {
        const decoded = jwt.verify(token, "1234567");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send({ message: "Invalid token" });
    }
};
