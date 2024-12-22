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
git clone https://github.com/your-username/BlogApp-backend.git
cd BlogApp-backend
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
PORT=3000
```

Replace `<your-mongodb-connection-string>` and `<your-jwt-secret>` with your values.

### **4. Start the Application**
#### Development Mode
```bash
npm run dev
```
#### Production Mode
```bash
npm start
```

---

## **Project Structure**
```plaintext
.
├── controllers
│   ├── authController.js
├── models
│   ├── User.js
├── routes
│   ├── authRoutes.js
│   ├── blogRoutes.js
├── app.js
├── db.js
├── package.json
├── .env
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
| POST   | `/api/users/login`  | User login             |

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

## **License**
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

## **Contributing**
If you wish to contribute, fork the repository and submit a pull request with your changes.

---

## **Contact**
For any questions or support, contact:

- **Name:** [Your Name]
- **Email:** [your-email@example.com]
- **GitHub:** [https://github.com/your-username]

