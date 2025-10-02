# User CRM App

A simple CRM application to manage users, built with React, Vite, and TypeScript.

## Features

- **Create Users**: Add new users with their name, email, and location.
- **Automatic Avatars**: Automatically generates a unique avatar for each user based on their name using the Multiavatar API.
- **User Dashboard**: Displays all users in a clean, card-based interface.
- **Mock API**: Uses `json-server` to simulate a RESTful backend for development.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **API Simulation**: json-server
- **HTTP Client**: Axios
- **Linting**: ESLint

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository (or download the source code).
2. Navigate to the project directory and install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

1.  **Start the API server**:
    Open a terminal and run the following command to start the `json-server`. It will run on `http://localhost:3002`.
    ```sh
    npm run api
    ```

2.  **Start the development server**:
    Open a second terminal and run the `dev` command. This will start the Vite development server, typically on `http://localhost:5173`.
    ```sh
    npm run dev
    ```

3. Open your browser and navigate to the address provided by the Vite server to see the application in action.