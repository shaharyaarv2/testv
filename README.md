#  BNI App

This project is a simple Node.js application using Express and EJS for rendering views. It includes a login page where users can enter their credentials.

## Project Structure

- `src/views/login.ejs`: HTML template for the login page.
- `src/routes/index.js`: Defines the routes for the application.
- `src/app.js`: Main entry point of the application.
- `public/assets`: Directory for static assets such as CSS and JavaScript files.
- `package.json`: Configuration file for npm, listing dependencies and scripts.
- `vercel.json`: Configuration file for deploying the application on Vercel.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd node-express-ejs-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Deployment

This application can be deployed on Vercel. Make sure to configure the `vercel.json` file according to your deployment needs.