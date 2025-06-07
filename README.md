# Military Welfare Management System

A comprehensive digital platform for managing military welfare schemes, community support, and resource sharing for Indian Armed Forces personnel and their families.

## Features

- Multi-Role Authentication System
- Welfare Scheme Management
- Emergency Contact Network
- Resource Sharing Marketplace
- Grievance Redressal System

## Tech Stack

- MongoDB - Database
- Express.js - Backend Framework
- React.js - Frontend Framework
- Node.js - Runtime Environment
- JWT - Authentication
- Redux - State Management
- Material-UI - UI Components

## Project Structure

```
military-welfare/
├── client/                 # React frontend
├── server/                 # Express backend
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. Create a .env file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development servers:
   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend server
   cd ../client
   npm start
   ```

## API Documentation

The API documentation will be available at `/api-docs` when the server is running.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 