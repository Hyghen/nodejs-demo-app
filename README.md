# Node.js Demo App 🚀

This is a simple Node.js web application that I deployed using Docker and automated the deployment process using GitHub Actions.

---

## 👨‍💻 Step by Step explanation of what i have done 

### 1. Created a Node.js Application
- Built a simple `index.js` file using Express framework
- App listens on port `3000` and shows a welcome message

### 2. Wrote a Dockerfile
- Created a Dockerfile to containerize the Node.js app
- Used `node:18` as the base image
- Exposed port `3000` for access


### 4. Set Up GitHub Repository
- Pushed all code to [GitHub](https://github.com/Hyghen/nodejs-demo-app)

### 5. Wrote GitHub Actions Workflow
- Created `.github/workflows/main.yml`
- Workflow does 3 main things:
  1. **Checks out the code**
  2. **Builds Docker image**
  3. **Pushes image to DockerHub**

### 6. Connected DockerHub with GitHub
- Added DockerHub username and password as GitHub Secrets:
  - `USERNAME_FOR_DOCKER`
  - `PASSWORD_FOR_DOCKER`


## 🐳 How to Run the App Locally

1. **Clone the repo**
-- git clone https://github.com/Hyghen/nodejs-demo-app.git
-- cd nodejs-demo-app

2. **Build Docker image**
-- docker build -t nodejs-demo-app .

3. **Run Docker container**
-- docker run -d -p 3000:3000 nodejs-demo-app

4. **Open in browser**
-- http://localhost:3000 or curl in server -- curl http://localhost:3000


🔗 DockerHub
Image is available here:
-- https://hub.docker.com/repository/docker/chitransh8824/nodejs_demo_app/


📌 Tools Used
-- Node.js & Express
-- Docker
-- GitHub Actions (CI/CD)
-- DockerHub

🙋‍♂️ Author
Chitransh Jangid
GitHub: https://www.github.com/Hyghen
