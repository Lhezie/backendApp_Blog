const mongoose = require("mongoose");

module.exports = {
    mongodb: mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
  }),
  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
};
