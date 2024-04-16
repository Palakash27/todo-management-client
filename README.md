# Task Management Application

## Overview

This project is a task management application built using React for the frontend and Node.js with Express for the backend. It allows users to manage their tasks by creating, updating, and deleting them. Users can also sort and search tasks based on various criteria.

## Pages

-   **Home:** Displays a list of tasks grouped by status (To Do, In Progress, Done).
-   **Login:** Allows users to log in to their account.
-   **Signup:** Allows new users to create an account.
-   **Task Create:** Allows users to create a new task.
-   **Task Update:** Allows users to update an existing task.

## Features

-   **Authentication:** Users can log in to their account and only their tasks are displayed.
-   **Task Management:** Users can create, update, and delete tasks.
-   **Drag and Drop:** Tasks can be moved between different status piles by dragging and dropping.
-   **Sorting:** Tasks can be sorted based on title.
-   **Searching:** Users can search for tasks by typing letters in the search bar.
-   **Responsive Design:** The application is responsive and works on all devices.
-   **Error Handling:** Error messages are displayed when an error occurs.
-   **Validation:** Form validation is implemented to ensure that the user enters valid data.
-   **User profiles with avatar:** Users can choose their avatar.

## Assumptions

-   Users are required to log in to view and manage their tasks.
-   Only authenticated users can access the task management features.
-   Tasks are displayed based on their status (To Do, In Progress, Done).
-   The application supports basic CRUD operations for tasks (Create, Read, Update, Delete).
-   Task details include information such as title, description, status, etc.
-   Users can sort tasks by clicking on the sort button located at the top of each status tab.
-   Users can search for tasks by typing any letters in the title or description fields.

## Installation - Node Version (v20.5.0) and npm version (10.5.1)

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd client`
3. Install dependencies: `npm install`
4. Start the backend server: `npm start`
5. Navigate to the frontend directory: `cd client`
6. Install frontend dependencies: `npm install`
7. Start the frontend server: `npm start`

## Technologies Used

-   React.js
-   Node.js
-   Express
-   MongoDB
-   HTML/CSS
-   JavaScript
-   Tailwind CSS

## Author

Aakash Pal
