﻿# Service Api CV

This project is a Fullstack app developed using React.js, Express.js, and MongoDB. The purpose of the app is to receive CV files in PDF format, extract relevant details such as full name, ID, LinkedIn url, email, and phone number, and then store this information in a MongoDB database. The details of applicants are presented in a user-friendly manner on the website, allowing users to manage candidates by providing options for deletion and cv download.

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

<strong> backend </strong>: Contains the Express.js server code. <br>
<strong> frontend/cv-app </strong>: Holds the React.js frontend code for the resume analyzer app. <br>
<strong> cv-examples </strong>: Some pdf files of cv for exmaples. <br>

## Usage

#### Start the Express.js server: <br>
npm install - _install all packages_  <br>
cd backend  <br>
nodemon index.js  <br>

#### Start React app:  <br>
npm install - _install all packages_  <br>
cd frontend/cv-app  <br>
npm start  <br>
