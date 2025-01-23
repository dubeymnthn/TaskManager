# Task Manager API 🚀

## Project Overview
A robust, TypeScript-powered Task Management REST API designed to demonstrate professional-grade backend development skills.

## 🔧 Technical Stack
- **Language**: TypeScript
- **Runtime**: Node.js
- **Framework**: Express.js
- **Data Management**: In-Memory Storage

## 🌟 Key Features
- Create, Read, Update, Delete (CRUD) Task Operations
- Strongly Typed Interfaces
- Comprehensive Error Handling
- Middleware-based Request Processing

## 📦 Project Structure
```
task-manager-api/
├── src/
│   ├── types/          # TypeScript interfaces
│   ├── services/       # Business logic
│   ├── controllers/    # Request handlers
│   ├── routes/         # API endpoint definitions
│   └── utils/          # Utility functions
├── package.json
└── tsconfig.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm (v6+)

### Installation
```bash
# Clone the repository
git clone https://github.com/dubeymnthn/TaskManager.git

# Navigate to project directory
cd task-manager-api

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔍 API Endpoints

### Tasks Management
| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| POST   | `/tasks`       | Create a new task            |
| GET    | `/tasks`       | Retrieve all tasks           |
| GET    | `/tasks/:id`   | Retrieve specific task       |
| PUT    | `/tasks/:id`   | Update an existing task      |
| DELETE | `/tasks/:id`   | Delete a specific task       |

## 💡 Development Insights
- Implements RESTful API design principles
- Uses TypeScript for type safety
- Demonstrates clean, modular architecture
- Includes basic error handling and validation

## 🧪 Testing Strategies
- Manual API testing via Postman/curl
- In-memory data generation for quick demos
- Comprehensive error scenario handling

## 🔒 Best Practices Demonstrated
- Separation of concerns
- Strongly typed interfaces
- Defensive programming
- Clean code principles

## 📝 Future Enhancements
- Persistent database integration
- Authentication middleware
- Advanced filtering/sorting
- Comprehensive unit testing

## 🤝 Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create pull request

## 💬 Contact
**Your Name**
- GitHub: @dubeymnthn
- Email: manthandubey5@gmail.com


## 📜 License

This project is licensed under the MIT License - see the full license details below:

```
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### License Notes
- Open-source and free to use
- Commercial use allowed
- Modification and distribution permitted
- No warranty provided


## 🏆 Interview Preparation Tips
- Explain architectural decisions
- Discuss type safety benefits
- Highlight modular design
- Demonstrate understanding of RESTful principles
```


