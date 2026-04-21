# CI/CD Pipeline Project

## Overview
Production-grade CI/CD pipeline with automated testing, 
containerization, and deployment.

## Architecture
[Diagram दो ASCII art या image]

## Tech Stack
- Node.js (application)
- Jest (testing)
- Docker (containerization)
- Jenkins (CI/CD automation)
- Docker Hub (image registry)
- GitHub (version control)

## Key Features
✅ Automated unit testing (3 test suites)
✅ Docker containerization with multi-stage builds
✅ Jenkins pipeline automation
✅ Auto push to Docker Hub
✅ Health checks & monitoring
✅ Secure credential management

## Setup Instructions
### Local Development
```bash
npm install
npm test
npm start
```

### Docker
```bash
docker build -t ci-cd-demo .
docker run -p 3000:3000 ci-cd-demo
```

### Jenkins Pipeline
Pipeline automatically:
1. Clones code from GitHub
2. Runs tests
3. Builds Docker image
4. Pushes to Docker Hub
5. Deploys application

## Endpoints
- GET /health - Health check
- GET /api/users - Get users
- POST /api/users - Create user

## Results
✅ 3/3 tests passing
✅ Docker image successfully pushed
✅ Zero manual deployment steps
✅ Full automated CI/CD workflow

## What I Learned
- Jenkins pipeline creation & management
- Docker containerization best practices
- Multi-stage builds for optimization
- CI/CD automation concepts
- Credential management & security
- Git workflow & branching

## Future Enhancements
- Add Kubernetes deployment
- Implement monitoring (Prometheus)
- Add integration tests
- Setup staging environment
- Implement canary deployments
