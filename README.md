# BlogApp Backend

This repository contains the backend code for the BlogApp application. The backend is built using Node.js, Express, and MongoDB, providing API routes for user authentication, blog management, and database interactions.

## Features
- User registration and login with password hashing.
- JSON Web Token (JWT) based authentication.
- CRUD operations for blogs.
- Centralized error handling.
- MongoDB database connection with Mongoose.


## Requirements

Before running this application, ensure you have the following installed:

- Node.js (v16.x or later)
- npm (v8.x or later)
- MongoDB (Local or Atlas Cloud Instance)


## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/BackendApp_Blog.git
cd BackendApp_Blog
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Set Up Environment Variables**
Create a `.env` file in the root directory and add the following variables:

```
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=6000
JWT_EXPIRATION=1h
```

Replace `<your-mongodb-connection-string>` and `<your-jwt-secret>` with your values.


Here’s the "Set Up the Database" section formatted and ready to copy:



## **3. Set Up the Database

### Create Migrations
To create a new migration:
```bash
npx migrate-mongoose create <migration-name> -d "<MONGO_URI>"
```

**Example**:
```bash
npx migrate-mongoose create create_blog -d "mongodb+srv://name:pass@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority"
```

### List Available Migrations
To list all available migrations:
```bash
npx migrate-mongoose -d "<MONGO_URI>" list
```

### Run Migrations
To run a specific migration:
```bash
npx migrate-mongoose -d "<MONGO_URI>" up <migration-name>
```

**Example**:
```bash
npx migrate-mongoose -d "mongodb+srv://name:pass@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority" up create_blog
```

To run all pending migrations:
```bash
npx migrate-mongoose -d "<MONGO_URI>" up
```

--- 


### **4. Start the Application**
#### Development Mode
```bash
npm run dev
```
#### Production Mode
```bash
npm start
```



## **Project Structure**
```plaintext
.
BACKENDAPP_BLOG/
├── config/
├── controllers/
│   ├── authController.js
│   ├── blogController.js
├── middleware/
│   ├── authMiddleware.js
├── migrations/
│   ├── 17347827290252-blog.js
│   ├── 1734782783888-users.js
├── models/
│   ├── Blog.js
│   ├── User.js
├── node_modules/ (generated after installing dependencies)
├── routes/
├── test/
│   ├── blog.test.js
│   ├── user.test.js
├── utils/
├── .env
├── .gitignore
├── app.js
├── generateSecret.js
├── initMongoose.js
├── jestConfig.js
├── package-lock.json
├── package.json
```

### Key Files
- **`app.js`**: Entry point for the application.
- **`authController.js`**: Handles user authentication logic.
- **`User.js`**: Mongoose model for user data.
- **`authRoutes.js`**: Routes for signup and login.

---

## **API Endpoints**

### **Authentication**
| Method | Endpoint       | Description             |
|--------|----------------|-------------------------|
| POST   | `/api/users/signup` | User signup            |
| POST   | `/api/users/sigin`  | User login             |

### **Blogs**
| Method | Endpoint       | Description             |
|--------|----------------|-------------------------|
| GET    | `/api/blogs`       | Get all blogs          |
| POST   | `/api/blogs`       | Create a new blog      |
| PUT    | `/api/blogs/:id`   | Update a blog by ID    |
| DELETE | `/api/blogs/:id`   | Delete a blog by ID    |

---

## **Testing the API**
You can use tools like [Thunder Client](https://www.thunderclient.io/) or [Postman](https://www.postman.com/) to test the API endpoints. Example request payloads:

### **Signup**
#### Endpoint: `POST /api/users/signup`
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

### **Login**
#### Endpoint: `POST /api/users/login`
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

---

## **Troubleshooting**

### Common Issues
1. **Database Connection Error:**
   - Ensure your MongoDB URI in `.env` is correct and accessible.

2. **JWT Errors:**
   - Check that `JWT_SECRET` is defined in your `.env` file.

3. **Route Not Found (404):**
   - Confirm the route paths are correctly defined and used.

4. **App Crashing:**
   - Use `console.log()` to debug the error source.

---


## Additional Notes  

- Use `nodemon` for development to enable automatic restarts when files change:  
  ```bash  
  npm install -g nodemon  
  nodemon  
  ```  

- Ensure your MongoDB Atlas cluster is accessible by allowing IP addresses or setting `0.0.0.0/0` for unrestricted access (not recommended for production).  

- Refer to the [migrate-mongoose documentation](https://www.npmjs.com/package/migrate-mongoose) for advanced usage.  

---  

## **Contact**
For any questions or support, contact:

- **Name:** Elizabeth E.
- **Email:** [lizziliana@gmail.com]
- **GitHub:** [https://github.com/lizziliana]

