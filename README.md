# CodeFixer - MERN Stack AI-Powered Code Reviewer

This project demonstrates how to build a powerful AI-powered web application using the **MERN Stack** and the **GEMINI API** for ultra-fast AI responses. It integrates **React**, **Node.js**, **Express**, and **MongoDB** to create an AI chatbot or content generation tool.

## What You’ll Learn:
- Setting up a MERN stack project
- Integrating the Deepseek R1 model with the Groq API for fast AI inference
- Building a responsive React frontend with **Tailwind CSS**
- Creating a **Node.js** & **Express** backend to handle AI requests

## Tech Stack:
- **MongoDB** – NoSQL database for storing AI interactions
- **Express.js** – Backend framework for handling requests
- **React.js** – Frontend library for building dynamic user interfaces
- **Tailwind CSS** – Utility-first CSS framework for responsive design
- **Node.js** – JavaScript runtime for server-side development
- **Gemini A1** – Open-weight AI model for content generation and chatbot capabilities, Fast and efficient AI inference engine

## Project Setup

### Prerequisites:
- [Node.js](https://nodejs.org/en) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Cloud instance)
- [Gemini API Key](https://ai.google.dev/gemini-api/docs)
- [Tailwind CSS](https://v3.tailwindcss.com/docs/guides/vite)

### Installation:

1. Clone this repository:
    ```bash
    git clone https://github.com/Elakstein/CodeFixer/
    cd CodeFixer
    ```

2. Install dependencies:
    - Backend (Node.js, Express):
        ```bash
        cd backend
        npm install
        ```
    - Frontend (React, Tailwind CSS):
        ```bash
        cd frontend
        npm install
        ```

3. Set up your **Groq API key** in the `.env` file in the backend directory:
    ```env
    GOOGLE_GEMINI_KEY=AIzaSyCklK1NtGa3wziM3NpD54YyFTbIBnO2S-M
    ```

4. Run the backend server:
    ```bash
    cd backend
    npx nodemon
    ```

5. Run the frontend development server:
    ```bash
    cd frontend
    npm run dev
    ```

6. Open the app in your browser:
    - Frontend: `http://localhost:5173`
    - Backend: `http://localhost:3000/ai/get-review`

## Code & Resources:
- GitHub Repo: [genai_mern_project](https://github.com/Elakstein/CodeFixer/)
- Gemini API Docs: [Groq API Docs](https://ai.google.dev/gemini-api/docs)
- Node.js Docs: [Node.js Docs](https://nodejs.org/en)
- Tailwind CSS Docs: [Tailwind CSS Docs](https://v3.tailwindcss.com/docs/guides/vite)
