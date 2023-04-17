# nextjsCRUD

<h1>Laravel and Next.js CRUD Operation</h1>
This project demonstrates a simple CRUD (Create, Read, Update, Delete) operation using Laravel and Next.js. The backend is built with Laravel, and the frontend is built with Next.js.

Installation
To run this project, you will need to have the following software installed on your system:

PHP 7.4 or later
MySQL 5.7 or later
Node.js 14.x or later
npm 6.x or later
Once you have these prerequisites installed, follow these steps:

bash

cd <repository>
Install the Laravel dependencies:

composer install
Create a new .env file:

bash

cp .env.example .env
Generate a new application key:

vbnet

php artisan key:generate
Update the database configuration in the .env file with your MySQL database details:

makefile
Copy code
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=<your_database_name>
DB_USERNAME=<your_database_username>
DB_PASSWORD=<your_database_password>
Run the database migrations:


php artisan migrate
Install the Next.js dependencies:

bash

cd my-app
npm install
Start the Laravel server:


php artisan serve
Start the Next.js development server:


npm run dev

Usage

Once you have the Laravel and Next.js servers running, you can access the application by visiting http://localhost:3000 for Next.js and http://localhost:8000 for lravel in your web browser.

The application allows you to perform CRUD operations on a users table. You can add a new user, edit an existing user, delete a user, and view all the users.




