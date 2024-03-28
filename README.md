**Project Name: Backend Authentication and Authorization**

**Description:**
This project is a backend application built with Node.js and MongoDB, focusing on user authentication and authorization. It provides a robust foundation for implementing secure registration, login, and authorization functionalities in web or mobile applications.

**Features:**
- User registration: Users can create accounts by providing necessary information such as username, email, and password. Passwords are securely hashed using bcrypt before being stored in the database.
- User login: Registered users can log in to their accounts by providing valid credentials. Upon successful authentication, users receive a JSON Web Token (JWT) that can be used for accessing protected routes.
- Authorization: Access to certain routes or resources is restricted to authenticated users. JWTs are utilized to verify the identity of users and grant access based on their roles or permissions.
- Environment variables: The application utilizes the dotenv library to manage environment variables, allowing for easy configuration across different environments (e.g., development, staging, production).

**Technologies Used:**
- Node.js: A runtime environment for executing JavaScript code on the server side.
- Express.js: A web application framework for Node.js used to define API routes and handle HTTP requests.
- MongoDB: A NoSQL database used for storing user data and other application-related information.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB, providing a higher-level abstraction for interacting with the database.
- bcrypt: A library used for securely hashing passwords to enhance security.
- jsonwebtoken: A library for generating and verifying JSON Web Tokens (JWTs) used for authentication.
- nodemon: A utility that automatically restarts the server when changes are detected, enhancing the development workflow.

**Setup:**
1. Clone the repository: `git clone https://github.com/emmasaf/authorization-mongodb.git`
2. Install dependencies: `npm install`
3. Create a `.env` file in the project root directory and add necessary environment variables (e.g., `PORT`, `DB_URL`, `SECRET_KEY`).
4. Start the server: `npm run dev`

**API Endpoints:**
- POST `/auth/register`: Register a new user.
- POST `/auth/login`: Log in with existing credentials and receive a JWT.
- GET `/auth/user`: Retrieve user profile information (protected route, requires authentication).

**Contributing:**
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.


**Author:**
emulkin

**Contact:**
For inquiries or support, please contact [Your Email Address].

**Acknowledgements:**
Special thanks to the creators of the libraries and technologies used in this project.

**References:**
- Express.js documentation: [https://expressjs.com/](https://expressjs.com/)
- MongoDB documentation: [https://docs.mongodb.com/](https://docs.mongodb.com/)
- Mongoose documentation: [https://mongoosejs.com/](https://mongoosejs.com/)
- bcrypt documentation: [https://github.com/kelektiv/node.bcrypt.js](https://github.com/kelektiv/node.bcrypt.js)
- jsonwebtoken documentation: [https://github.com/auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- nodemon documentation: [https://nodemon.io/](https://nodemon.io/)