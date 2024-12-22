const mongoose = require("mongoose");
const User = require("../models/User");
const { faker } = require("@faker-js/faker");

jest.setTimeout(10000);

beforeAll(async () => {
  if (mongoose.connection.readyState === 0) {
    const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/test_db";
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
    });
  }
});

beforeEach(async () => {
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("User Model", () => {
  it("should create a new user and hash the password", async () => {
    const email = faker.internet.email();
    const user = new User({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: email,
      password: "password123",
    });

    await user.save();

    
    expect(user.password).not.toBe("password123");

   
    const foundUser = await User.findOne({ email: email });

   
    expect(foundUser.password).not.toBe("password123");

  
    const isMatch = await foundUser.comparePassword("password123");
    expect(isMatch).toBe(true);
  });


  it("should throw an error when creating a user with a duplicate email", async () => {
    const email = faker.internet.email();

    const user1 = new User({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: email,
      password: "password123",
    });

    await user1.save();

    const user2 = new User({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: email,
      password: "password456",
    });

    try {
      await user2.save();
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.code).toBe(11000); 
    }
  });

 
  it("should return false when comparing incorrect password", async () => {
    const email = faker.internet.email();

    const user = new User({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: email,
      password: "password123",
    });

    await user.save();

    const isMatch = await user.comparePassword("wrongpassword");
    expect(isMatch).toBe(false); 
  });

 
  it("should hash the password before saving", async () => {
    const email = faker.internet.email();

    const user = new User({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: email,
      password: "password123",
    });

    await user.save();

    const foundUser = await User.findOne({ email });

    expect(foundUser).toBeDefined();
    expect(foundUser.password).not.toBe("password123");
    const isMatch = await foundUser.comparePassword("password123");
    expect(isMatch).toBe(true);
  });
});