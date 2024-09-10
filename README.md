# Fitness Challenge Generator and Tracker

This project is a **Fitness Challenge Generator and Tracker** that allows users to create, update, delete, and retrieve fitness challenges. Users can set dates for challenges and even generate random challenges. The project utilizes a **React** frontend and a **Django** backend, with **Selenium** and **Cypress** used for automated testing.

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
  - [Backend (Django)](#backend-django)
  - [Frontend (React)](#frontend-react)
- [Automated Testing](#automated-testing)
  - [Selenium](#selenium)
  - [Cypress](#cypress)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

The **Fitness Challenge Generator and Tracker** allows users to:

- Create fitness challenges with a title, description, and target date.
- Update existing challenges.
- Delete challenges.
- Retrieve all challenges or get a random challenge.

This project is designed to help fitness enthusiasts stay motivated by providing customizable challenges and a platform to track their progress.

## Tech Stack

- **Frontend**: React (JavaScript)
- **Backend**: Django (Python, Django REST Framework)
- **Database**: SQLite (or any configured Django database)
- **Automated Testing**: Selenium for end-to-end testing and Cypress for frontend testing

## Features

- **CRUD Operations**: Create, update, delete, and retrieve fitness challenges.
- **Random Challenge Generator**: Get random fitness challenges to keep workouts interesting.
- **Date Management**: Set target dates for each fitness challenge to keep track of goals.
- **Automated Testing**: Full coverage with Selenium and Cypress for ensuring the quality of the app.

---

## Setup Instructions

### Backend (Django)

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/fitness-challenge-tracker.git
    cd fitness-challenge-tracker/server
    ```

2. **Set up a Virtual Environment**:
    ```bash
    python3 -m venv env
    source env/bin/activate
    ```

3. **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run Migrations**:
    ```bash
    python manage.py migrate
    ```

5. **Run the Django Development Server**:
    ```bash
    python manage.py runserver
    ```

   The Django server will be running at **http://127.0.0.1:8000/**. You can interact with the API through this endpoint.

### Frontend (React)

1. **Navigate to the `client` Directory**:
    ```bash
    cd ../client  # Assuming the React app is in the client folder
    ```

2. **Install Node.js Dependencies**:
    ```bash
    npm install
    ```

3. **Run the React Development Server**:
    ```bash
    npm start
    ```

   The React app will be running at **http://localhost:3000/**.

---

## Automated Testing

### Selenium

**Selenium** is used for end-to-end browser testing, ensuring the core workflows (like adding or deleting challenges) work properly.

**Running Selenium Tests**:
1. Install **Selenium** and WebDriver for your browser (e.g., ChromeDriver for Chrome):
    ```bash
    pip install selenium
    ```

2. **Run Selenium Tests**:
    - Make sure your Django and React servers are running.
    - Execute the Selenium tests from the command line:
    ```bash
    python path/to/your/selenium_test.py
    ```

### Cypress

**Cypress** is used for frontend testing, verifying that React components behave as expected.

**Running Cypress Tests**:
1. Install **Cypress** in the frontend:
    ```bash
    cd client
    npm install cypress --save-dev
    ```

2. **Open Cypress**:
    ```bash
    npx cypress open
    ```

3. **Write and Run Cypress Tests**:
    - Write your end-to-end (E2E) tests in the `cypress/e2e/` folder.
    - From the Cypress GUI, choose the browser and run the test files in the E2E tab.

---

## API Endpoints

Below are the key API endpoints exposed by the Django backend.

| Endpoint               | Method  | Description                                  |
|------------------------|---------|----------------------------------------------|
| `/challenges/`          | GET     | Retrieve all fitness challenges              |
| `/challenges/`          | POST    | Create a new fitness challenge               |
| `/challenges/random/`   | GET     | Retrieve a random fitness challenge          |
| `/challenges/<id>/`     | PUT     | Update a specific fitness challenge          |
| `/challenges/<id>/`     | DELETE  | Delete a specific fitness challenge          |

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the project.
2. Create a feature branch:
    ```bash
    git checkout -b feature-branch-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Added a new feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch-name
    ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Happy coding and enjoy tracking your fitness challenges!
