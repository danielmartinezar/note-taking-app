# Note-Taking Application

This project is a note-taking application that allows users to manage their notes effectively. Users can perform various actions on their notes, including creating, editing, deleting, archiving, and unarchiving. Additionally, users can organize their notes by adding and removing categories, which are recognized as tags in the application. Tags can be included in the note description using the "#" symbol followed by the tag title.

## Features

### Basic Note Management

- As a user, I want to be able to create, edit, and delete notes.
- As a user, I want to archive/unarchive notes.
- As a user, I want to list my active notes.
- As a user, I want to list my archived notes.


### Advanced Note Management

- As a user, I want to be able to add/remove categories (tags) to notes.
- As a user, I want to be able to filter notes by category (tag).

### Instructions to Run the Application

These are the instructions to run the application on your system.

### Prerequisites

- Docker installed and running on your system.

### Steps to Run the Application

1. Download or clone the repository to your local machine.

2. Open a terminal and navigate to the root folder of the project.

3. Run the installation script depending on your operating system:
    - On macOS or Linux, run `./install.sh`.
    - On Windows, run `./install.ps1`.

4. If you're on macOS or Linux, you may need to give execute permissions to the script. You can do this with the command `chmod +x install.sh`.

5. Ensure Docker is installed and functioning correctly on your system. You can verify this by running `docker --version`.

6. Make sure the Docker daemon service is running. You can start it by running the following command:
   
    ```bash
    sudo systemctl start docker    # For Linux
    ```

7. Once the dependencies are installed and the environment is configured, execute the following command from the project's root directory to build and run the application:

    ```bash
    docker-compose up --build
    ```

8. Wait for the container to build and initialize. Once completed, you can access the application from your web browser using the local address [http://localhost:3000](http://localhost:3000).

9. To stop the application, you can press `Ctrl + C` in the terminal where `docker-compose` is running.

### Port Configuration

- Backend: Port 8080
- Frontend: Port 3000

You should now have the application running on your local system.

## Technologies Used

- **Backend**: Express.js `4.18.3` on Node.js `v21.6.2` with TypeScript
- **ORM**: Prisma `5.10.2`
- **Database**: MySQL
- **Frontend**: React `18.2.0`
- **HTTP Client**: Axios `1.6.7`
- **Styling**: TailwindCSS `3.4.1`

## Database Structure


### Tag Table

| Column    | Data Type | Constraints         |
|-----------|-----------|---------------------|
| id        | VARCHAR   | Primary Key, Unique |
| title     | VARCHAR   | Unique              |

### Note Table

| Column      | Data Type | Constraints              |
|-------------|-----------|--------------------------|
| id          | VARCHAR   | Primary Key, Unique      |
| title       | VARCHAR   |                          |
| description | TEXT      |                          |
| createdAt   | DATETIME  | Default: Current Datetime |
| isArchived  | BOOLEAN   | Default: false           |

### Note_Tag Relationship Table

| Column  | Data Type | Constraints          |
|---------|-----------|----------------------|
| note_id | VARCHAR   | Foreign Key (Note)   |
| tag_id  | VARCHAR   | Foreign Key (Tag)    |

## Backend-end Layered Architecture
```
BACKEND
├── prisma
└── src
    ├── config
    ├── controllers
    ├── repositories
    ├── routes
    ├── services
    ├── utils
    ├── index.ts
    └── server.ts
```

## Front-end Architecture
```
note_app
└── src
    ├── components
    ├── pages
    ├── services
    └── shared
```
