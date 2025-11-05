# Authentication System

A secure Node.js authentication system with JWT tokens, role-based access control, and user management.

## Features

- User registration and login
- JWT-based authentication
- Role-based authorization (admin/user)
- Protected routes
- User profile management
- Secure password hashing

## Tech Stack

- Node.js
- Express.js
- MongoDB/Database
- JWT (JSON Web Tokens)
- bcrypt for password hashing

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
PORT=3000
JWT_SECRET=your-secret-key
DB_CONNECTION_STRING=your-database-url
```

4. Start the server:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /auth/signup` - Register new user
- `POST /auth/login` - User login

### Protected Routes
- `GET /profile` - Get user profile (requires authentication)
- `GET /users` - Get all users (admin only)

## Usage

### Register a new user
```bash
curl -X POST http://localhost:3000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123","name":"John Doe"}'
```

### Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.