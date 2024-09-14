# BookHaven - E-Commerce Application for a Book Store

## Project Overview

**BookHaven** is a full-stack e-commerce web application designed for an online bookstore. The application allows users to browse books, view details, add books to their shopping cart, and manage their cart items. The backend is built with Node.js and Express, and the frontend uses React for an interactive user interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Backend Structure (MVC Model)](#backend-structure-mvc-model)
- [Frontend Design (Pages and Components)](#frontend-design-pages-and-components)
- [React Hooks Implementation](#react-hooks-implementation)
- [Authentication and Security](#authentication-and-security)
- [Contributing](#contributing)

## Features

- **Home Page**: Displays a list of books with images, titles, and prices.
- **Detail Page**: Shows detailed information about a specific book, including a larger image, description, price, and an "Add to Cart" button.
- **Shopping Cart**: Allows users to add, remove, and modify items in their cart.
- **User Authentication**: Users can sign up, log in, and maintain their cart data securely.
- **Responsive Design**: The application is fully responsive and works well on various devices.

## Technologies Used

- **Frontend**: React, React Router, Context API, CSS
- **Backend**: Node.js, Express.js, MongoDB, JWT, bcrypt
- **Environment Management**: dotenv
- **Version Control**: Git

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/BookHaven.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd BookHaven
    ```

3. **Install dependencies for both backend and frontend:**

    ```bash
    # For backend
    cd backend
    npm install

    # For frontend
    cd ../frontend
    npm install
    ```

4. **Set up environment variables:**

    - Create a `.env` file in the `backend` directory.
    - Add the following variables:

    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

5. **Start the backend server:**

    ```bash
    cd backend
    npm start
    ```

6. **Start the frontend server:**

    ```bash
    cd ../frontend
    npm start
    ```

7. **Access the application:**

    Open your browser and go to `http://localhost:3000`.

## Usage

1. **Home Page**: Browse the available books, categorized by genre.
2. **Detail Page**: Click on any book to see more details.
3. **Add to Cart**: Add books to your shopping cart directly from the detail page.
4. **Cart Management**: View, add, or remove books from your cart. The total cost is calculated automatically.
5. **User Authentication**: Sign up or log in to save your cart data and manage your purchases.

## Backend Structure (MVC Model)

The backend follows the MVC (Model-View-Controller) architectural pattern:

- **Model**: Manages the data and database interactions using Mongoose models.
- **View**: In this API-driven application, the "view" is represented by JSON responses.
- **Controller**: Contains the business logic and interacts with models to handle requests.

## Frontend Design (Pages and Components)

The frontend is structured with a clear separation between Pages and Components:

- **Pages**: Represent the main views of the application (e.g., Home, Product, Cart).
- **Components**: Reusable UI elements that are shared across different pages (e.g., Navbar, Footer, TrendingBooks).

## React Hooks Implementation

React Hooks such as `useState` and `useEffect` are used to manage state and side effects within the application. This ensures efficient and responsive user interactions.

## Authentication and Security

User authentication is handled using JWT (JSON Web Tokens) and bcrypt:

- **bcrypt**: Passwords are hashed before being stored in the database for security.
- **JWT**: Used to create secure tokens for user sessions, ensuring that only authenticated users can access certain routes.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any features or bug fixes you want to add.