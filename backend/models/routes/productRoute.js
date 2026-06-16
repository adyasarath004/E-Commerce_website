 import express from "express";

const router = express.Router();

// Add your product routes here
router.get("/", (req, res) => {
    res.json({ message: "Product routes" });
});

export default router;