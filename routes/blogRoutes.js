const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/authMiddleware");
const { body, validationResult } = require("express-validator");
const {
  createBlog,
  getBlogs,
  getBlogById,
  getBlogsByAuthorId,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogContoller");

const validateCreateBlog = [
  body("title").notEmpty().withMessage("Title is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

router.post("/", authenticate, validateCreateBlog, createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.get("/author/:id", getBlogsByAuthorId);
router.put("/:id", authenticate, updateBlog);
router.delete("/:id", authenticate, deleteBlog);

module.exports = router;
