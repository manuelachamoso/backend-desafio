# MEAN Project - Backoffice

## Description

This project is a MEAN (MongoDB, Express, Angular, Node.js) stack application developed as a part of a job interview challenge. It consists of a backend API built with Node.js and Express, using MongoDB as the database, and a frontend application developed with Angular. 

The backend API provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on user data. It includes features such as creating a new user, retrieving user information, updating user details, and deleting a user. The API utilizes the Express framework for handling HTTP requests and connects to a MongoDB database to store and retrieve user data.

On the frontend, the Angular application provides a user-friendly interface for interacting with the API. It includes features such as displaying a list of users, creating a new user, editing user information, and deleting a user. The Angular application communicates with the backend API to fetch and manipulate user data.

## Technologies Used

- Backend:
  - Node.js
  - Express
  - MongoDB

- Frontend:
  - Angular

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Install the dependencies for the backend:
   ```
   cd backend
   npm install
   ```

3. Configure the MongoDB connection:
   - Open the `backend/config/database.js` file.
   - Replace the `<mongodb-url>` with your MongoDB connection URL.

4. Start the backend server:
   ```
   npm start
   ```

5. Install the dependencies for the frontend:
   ```
   cd frontend
   npm install
   ```

6. Start the frontend application:
   ```
   ng serve
   ```

7. Access the application in your browser:
   ```
   http://localhost:4200
   ```

## Challenges Faced

For the developer, this project presented a significant challenge as it involved working with Angular for the first time. The learning curve for Angular required understanding its concepts, architecture, and best practices. Additionally, integrating the frontend with the backend API and ensuring smooth communication between the two parts of the application was another challenge.

## License

This project is licensed under the [MIT License](LICENSE).

## Owner

This project was developed by Manuela Chamoso
