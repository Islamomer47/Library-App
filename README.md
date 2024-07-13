# Library-App

# Library Management App

Welcome to the Library Management App repository! This project is built using React and integrates with Firebase for storing book data. The app allows users to manage a library catalog, view books, add new books, and perform CRUD operations on book entries.

## Features

### Part 1: Initial Setup

- Set up the project repository and create a React app using `create-react-app`.
- Initialize the project structure with a basic layout including a home component with header, main, and footer sections.
- Populate initial book data using a state object.

### Part 2: Navigation and User Management

- **Navbar Component:** Contains navigation links to Home, About, Contact, and Sign-up pages.
- **About Us Component:** Provides information about the library.
- **Contact Us Component:** Allows users to get in touch with the library.
- **Sign-up Component:** Implements a sign-up form to register users. User data is stored locally (localStorage). If a user is logged in, display a logout button and a welcome message with the username.

### Part 3: Book Catalog Management with Firebase

- **Book Catalog Component:** Displays books fetched from Firebase as cards in a grid layout.
- **Firebase Integration:** Store and retrieve book data from Firebase Firestore.
- **CRUD Operations:** Implement functionality to add, edit, and soft delete books. Soft delete involves marking books as deleted without actually removing them from the database.
- **Axios Usage:** Use Axios for making HTTP requests to interact with the Firebase database.

## Technologies Used

- React
- Firebase (Firestore)
- Axios

## Project Structure

```bash
library-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Home.js
│   │   ├── AboutUs.js
│   │   ├── ContactUs.js
│   │   ├── SignUp.js
│   │   ├── BookCatalog.js
│   ├── App.js
│   ├── index.js
│   ├── firebase.js
│   ├── booksData.json
├── .gitignore
├── package.json
├── README.md
```
