# Service Api CV

This project is a Fullstack application developed using React.js, Express.js, and MongoDB. The purpose of the app is to receive CV files in PDF format, extract relevant details such as full name, ID, LinkedIn link, email, and phone number, and then store this information in a MongoDB database. The candidates' details are presented in a user-friendly manner on the website, allowing users to manage candidates by providing options for deletion and resume download.

## Features

- Upload and analyze PDF resume files.
- Extract and store candidate details in a MongoDB database.
- View all candidates with a beautiful and intuitive interface.
- Delete candidates from the database.
- Download resumes for further review.

## Technoligies

- React
- Express.js
- MongoDB
- TypeSciprt

## Folder Structure

backend: Contains the Express.js server code.
frontend/cv-app: Holds the React.js frontend code for the resume analyzer app.
cv-examples: Some pdf files of cv for exmaples.

## Usage

Start the Express.js server:
npm install - _install all packages_
cd backend
nodemon index.js

Start React app:
npm install - _install all packages_
cd frontend/cv-app
npm start
