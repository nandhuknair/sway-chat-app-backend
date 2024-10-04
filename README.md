# Sway Chat App

Sway Chat App is a real-time chat application built using React for the frontend and Node.js with Express for the backend, powered by Socket.io for seamless communication. The app allows users to join chat rooms and send messages in real-time, providing an intuitive and dynamic chat experience.

## Features

- **Real-time Messaging**: Instant communication between users using Socket.io. - **Dark & Light **: Implemented Dark and light mode with tailwind css.
- **User-Friendly Interface**: Clean and responsive UI built with React.
- **Rooms-based Chat**: Users can join different rooms for focused conversations.
- **User Notifications**: Get notified when new messages are received.
- **Express & Node.js Backend**: Efficient and scalable backend to handle real-time chat logic.
- **Edit user details**: User can edit name and profile pic.

## Tech Stack

- **Frontend**: React.js (JavaScript)
- **Backend**: Node.js, Express
- **Real-time Communication**: Socket.io
- **Styling**: Tailwind CSS (or mention any other styling used)
- **Deployment**: (e.g., Vercel, Heroku, etc.)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/sway-chat-app.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd sway-chat-app
    ```

3. **Install dependencies for both frontend and backend**:

    - Install frontend dependencies:

      ```bash
      cd client
      npm install
      ```

    - Install backend dependencies:

      ```bash
      cd ../server
      npm install
      ```

4. **Run the application**:

    In the `server` directory, start the backend:

    ```bash
    npm start
    ```

    In the `client` directory, start the frontend:

    ```bash
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to access the chat app.

### Environment Variables

Make sure to set up the following environment variables:

- For backend:  
