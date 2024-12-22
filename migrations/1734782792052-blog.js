const mongoose = require("mongoose");
require("dotenv").config();
const Blog = require("../models/Blog"); 

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
});


async function up() {
  // Ensuring that the Blog model is ready
  const blogsCollection = mongoose.connection.collection("blogs");

  // Example: Add index for title (if not already present)
  await blogsCollection.createIndex({ title: 1 }, { unique: true });


  await Blog.updateMany(
    { publishedAt: { $exists: false } }, 
    { $set: { publishedAt: null } } 
  );

  console.log("Blogs collection schema updated with necessary changes.");
}


async function down() {
  // Example: Remove the index on title if added
  const blogsCollection = mongoose.connection.collection("blogs");
  await blogsCollection.dropIndex("title_1");

  console.log("Blogs collection index dropped.");
}

module.exports = { up, down };