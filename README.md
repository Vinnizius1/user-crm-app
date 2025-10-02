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

This project is configured to connect to a live, read-only API hosted by `my-json-server`. For a quick start, you can run the application without a local API server.

**1. Quick Start (Read-Only Mode)**

Install the dependencies and start the development server. The application will fetch data from the live API.

```sh
npm install
npm run dev
```

**2. Full Development Mode (with Local API)**

The live API is read-only. For full functionality (creating, updating, or deleting users), it's recommended to run the local `json-server`.

First, in the file `src/services/userService.ts`, temporarily change the `API_URL` back to `http://localhost:3001/users`.

Then, run the two servers in separate terminals:

**Terminal 1 (Start the local API server):**
```sh
npm run api
```

**Terminal 2 (Start the development server):**
```sh
npm run dev
```
> **Note:** Remember to change the `API_URL` back to the `my-json-server` link before committing changes intended for production.