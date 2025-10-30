# Full-Stack Web Forum

is a dynamic, full-stack web forum application developed with a Flask backend and a React frontend. It allows users to register, log in securely, create and delete posts in different chatrooms, and engage in real-time discussions.

This project was initially a frontend-only university assignment, which I have significantly extended and transformed into a complete application by building a robust and secure backend API from scratch and refining the frontend with an improved, modern UI.


## ✨ Key Features

- **Full-Stack Architecture:** Flask backend + React frontend designed with a clear separation of concerns and clean API integration.

- **RESTful API:** Built from scratch with Flask and SQLAlchemy, using Blueprints and providing complete CRUD functionality for posts and chatrooms.

- **Secure Authentication:** Implements JWT-based authentication with `HttpOnly`, `SameSite` cookies to protect against XSS and CSRF vulnerabilities.

- **Dynamic Frontend:** Developed a responsive React single-page application using React Router, Context API, and React Bootstrap for cohesive and mobile-friendly UI/UX.

- **Chatroom System:** Users can browse multiple chatrooms, post messages, and delete their own posts.

- **Scalable Database Layer:** PostgreSQL database with SQLAlchemy ORM models for clean data management and efficient querying.

- **Containerized Environment:** Dockerized the frontend, backend, and PostgreSQL database as separate services, orchestrated via Docker Compose for a consistent and reproducible multi-container setup.  

- **CI/CD Pipeline:** An automated GitHub Actions workflow builds and publishes production-ready backend and frontend images to Docker Hub.

---

## 🚀 Technologies

| Category | Technology |
| :--- | :--- |
| **Frontend** | React.js, React Router, React Bootstrap, Vite, JavaScript (ES6+) |
| **Backend** | Python, Flask, SQLAlchemy, PostgreSQL, Flask-JWT-Extended |
| **Development & Deployment** | Docker, Docker Compose, GitHub Actions (CI/CD), Nginx |

---

## 🏗️ Application Architecture

This project follows a classic three-tier architecture with clear modularity between frontend, backend, and database layers.


```
 [ User Browser ]
       |
       | (http://localhost)
       v
 [ Nginx Container (frontend) ]
       |
       +---> [ / ] Serves React Static Files (from /usr/share/nginx/html)
       |
       +---> [ /api/... ] Reverse Proxies to...
                     |
                     v
             [ Flask Container (backend) ]
                     |
                     <--> (via internal 'db' hostname)
                     |
             [ Postgres Container (db) ]
```

- The **frontend** is served via Nginx, which also routes all `/api` traffic to the Flask backend, simplifying client–server communication and removing CORS complexity.
- The **backend** exposes a versioned REST API (`/api/v1/...`) to handle authentication, posts, and chatroom data.
- The **database** persists user accounts, messages, and chatroom metadata.

---

## 🔒 Authentication & Security

- JWT-based authentication with tokens stored in `HttpOnly`, `SameSite` cookies.  
- Backend input validation and request authorization via decorators and middleware.  
- Secure session management to prevent XSS and CSRF attacks.  

---

## ⚙️ Development & Deployment

While the project is designed for **software engineering clarity**, it’s also **production-ready**:

- **Containerized Setup:** Docker Compose orchestrates the frontend, backend, and database for an easy, one-command setup.  
- **Continuous Integration / Deployment:** A GitHub Actions workflow automatically builds, tests, and publishes Docker images for both services to Docker Hub on pushes to `main`.  
- **Reverse Proxy Configuration:** Nginx serves static assets and routes API requests, simplifying deployment and ensuring consistent behavior in production.

To start the application locally:

```bash
git clone https://github.com/nimit-pasricha/web-forum
cd web-forum
docker-compose up --build -d
```

Initialize the database:

```bash
docker-compose exec backend flask init-db
docker-compose exec backend flask seed-db
```

The application is now running:
- Frontend: [http://localhost:80](http://localhost:80)
- Backend APi: `http://localhost:80/api/v1/...`

## 🧑‍💻 Local Development (Non-Docker)

For lightweight local testing, you can run the frontend and backend separately. A Vite proxy handles CORS between localhost:5173 (frontend) and localhost:5000 (backend).
