# ITCS 4155 Class Project - SCRUM Development

## Project Overview
This repository contains the work for our ITCS 4155 class project. Our team is utilizing the SCRUM framework to collaborate and develop a software solution. The project emphasizes agile development, iterative progress, and consistent communication.

## Team Members
**SCRUM Master** Nihal Adhikary  
**Product Owner** Chris Berns (Team Lead)  
**Developer** Diptesh Mool  
**Developer** Dhruv Mukherjee  
**Developer** Shlok Singh  
**Developer** Evan Stark  

## Project Goals
The primary goal of this project is to design, develop, and deliver a functional software application while practicing SCRUM methodologies. Our objectives include:

1. **Sprint Planning:** Breaking the project into manageable sprints with specific deliverables.
2. **Collaboration:** Utilizing daily stand-ups, retrospectives, and task boards to coordinate efforts and track progress.
3. **Iteration:** Delivering incremental updates to ensure continuous improvement and adaptability.
4. **Documentation:** Maintaining clear and thorough documentation for all aspects of the project.

## SCRUM Roles
- **Product Owner:** Chris Berns, responsible for defining the vision and prioritizing the backlog.
- **SCRUM Master:** Ensures that the team follows SCRUM principles and facilitates processes.
- **Development Team:** All members contribute equally to the design, development, and testing of the project.

## Development Process
Our workflow includes:

1. **Sprint Planning Meetings** to identify tasks and define goals for the sprint.
2. **Daily Stand-ups** to provide updates and address blockers.
3. **Sprint Retrospectives** to reflect on the sprint and identify areas for improvement.
4. **Backlog Grooming** to ensure tasks are clearly defined and prioritized.

We use GitHub tools to manage our backlog and track progress.

---

# **Project Setup (Both Mac and Windows)**

## **Step 1: Install Node.js**
1. Download Node.js from: [Node.js official website](https://nodejs.org/en/)
2. Install the **LTS (Long-Term Support) version**.
3. After installation, verify it is installed by running:
   ```bash
   node -v
   ```
   If successful, it will return a version number.

---

## **Step 2: Install Git**
Git is required to download the project.

1. Check if Git is installed by running:
   ```bash
   git --version
   ```
   If Git is not installed, download it from: [Git official website](https://git-scm.com/)

---

## **Step 3: Clone the Project from GitHub**
1. Open **Command Prompt (Windows)** or **Terminal (Mac/Linux)**.
2. Navigate to the directory where you want to store the project (e.g., Desktop):
   ```bash
   cd Desktop
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/ITSC-4155-Spring-2025/Group8.git
   ```
4. Move into the project folder:
   ```bash
   cd Group8
   ```

---

## **Step 4: Frontend Setup**
The frontend is the **user interface** of the project. We need to install dependencies and run it.

### **Navigate to the Frontend Directory**
```bash
cd frontend/finfit-frontend
```

### **Install Frontend Dependencies**
```bash
npm install
```

### **Run the Frontend**
```bash
npm start
```

### **Access the Web Pages**
- **User Page:** [http://localhost:3000/user](http://localhost:3000/user)
- **Leaderboard Page:** [http://localhost:3000/leaderboard](http://localhost:3000/leaderboard)
- **Login Page:** (http://localhost:3000/login)

---

## **Repository Structure**
- `/src`: Source code
- `/docs`: Project documentation
- `/tests`: Test cases
- `/backlog`: Backlog items and sprint planning documents

---

# **FinFit Project Setup (Mac & Windows)**

## **Step 1: Install Prerequisites**

### ✅ MySQL (v8.0+)
- Download: [MySQL Downloads](https://dev.mysql.com/downloads/)
- Ensure MySQL server is **installed and running**

### ✅ Python (v3.9+)
- Download: [Python Downloads](https://www.python.org/downloads/)
- Make sure `pip` is included during installation

### ✅ Node.js (v16+)
- Download: [Node.js Official Website](https://nodejs.org/en/)
- Install the **LTS version**
- Verify installation:
  ```bash
  node -v
  npm -v
Step 2: Database Setup
✅ Install MySQL
Download: MySQL Downloads

Follow the installer instructions for your system

✅ Start MySQL as Root
💻 Mac
bash
Copy
Edit
mysql -u root -p
💻 Windows (if above doesn’t work)
bash
Copy
Edit
cd "C:\Program Files\MySQL\<YOUR_MYSQL_INSTALL_DIR>\bin"
.\mysql.exe -u root -p
✅ Create Database and User
Once you're in the MySQL CLI, run:

sql
Copy
Edit
CREATE DATABASE finfit_new;

CREATE USER 'django_user'@'localhost' IDENTIFIED BY 'FinFitAdmin';

GRANT ALL PRIVILEGES ON finfit_new.* TO 'django_user'@'localhost';

FLUSH PRIVILEGES;
Step 3: Backend Setup
✅ Navigate to the Backend Directory
bash
Copy
Edit
cd backend/
✅ Install Required Python Packages (if needed)
If you see this error: ModuleNotFoundError: pymysql
Run:

bash
Copy
Edit
pip install pymysql
If you see this error: ModuleNotFoundError: corsheaders
Run:

bash
Copy
Edit
pip install django-cors-headers
✅ Update settings.py Database Configuration
Edit backend/settings.py and update the DATABASES section:

python
Copy
Edit
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'finfit_new',  # ← Updated name
        'USER': 'django_user',
        'PASSWORD': 'FinFitAdmin',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
✅ Run Migrations
bash
Copy
Edit
python manage.py makemigrations
python manage.py migrate
Step 4: Add Users to the Database (Optional)
✅ Reopen MySQL CLI
bash
Copy
Edit
mysql -u root -p
✅ Select the Database
sql
Copy
Edit
USE finfit_new;
✅ Insert Sample Users
Paste the following into the MySQL CLI:

sql
Copy
Edit
INSERT INTO api_customuser (
  password, last_login, is_superuser, username, first_name, last_name, email,
  is_staff, is_active, date_joined, points
)
VALUES
('pbkdf2_sha256$260000$hash1', NULL, 0, 'mintyFalcon23', 'Alice', 'Smith', 'minty.falcon23@example.com', 0, 1, NOW(), 100),
('pbkdf2_sha256$260000$hash2', NULL, 0, 'cloudTrekker88', 'Bob', 'Johnson', 'cloud.trekker88@example.com', 0, 1, NOW(), 250),
('pbkdf2_sha256$260000$hash3', NULL, 0, 'zenKoala17', 'Carol', 'Williams', 'zen.koala17@example.com', 0, 1, NOW(), 300),
('pbkdf2_sha256$260000$hash4', NULL, 0, 'blazeWolf49', 'David', 'Brown', 'blaze.wolf49@example.com', 0, 1, NOW(), 350),
('pbkdf2_sha256$260000$hash5', NULL, 0, 'aquaNinja55', 'Eve', 'Jones', 'aqua.ninja55@example.com', 0, 1, NOW(), 100),
('pbkdf2_sha256$260000$hash6', NULL, 0, 'crimsonEcho33', 'Frank', 'Garcia', 'crimson.echo33@example.com', 0, 1, NOW(), 250),
('pbkdf2_sha256$260000$hash7', NULL, 0, 'novaTiger91', 'Grace', 'Miller', 'nova.tiger91@example.com', 0, 1, NOW(), 450),
('pbkdf2_sha256$260000$hash8', NULL, 0, 'stormPanda62', 'Hank', 'Davis', 'storm.panda62@example.com', 0, 1, NOW(), 86),
('pbkdf2_sha256$260000$hash9', NULL, 0, 'glowFox12', 'Ivy', 'Martinez', 'glow.fox12@example.com', 0, 1, NOW(), 59),
('pbkdf2_sha256$260000$hash10', NULL, 0, 'frostByte84', 'Jack', 'Hernandez', 'frost.byte84@example.com', 0, 1, NOW(), 93),
('pbkdf2_sha256$260000$hash11', NULL, 0, 'neonRider76', 'Karen', 'Lopez', 'neon.rider76@example.com', 0, 1, NOW(), 61),
('pbkdf2_sha256$260000$hash12', NULL, 0, 'plasmaOtter29', 'Leo', 'Gonzalez', 'plasma.otter29@example.com', 0, 1, NOW(), 88),
('pbkdf2_sha256$260000$hash13', NULL, 0, 'sunburstOwl67', 'Mona', 'Wilson', 'sunburst.owl67@example.com', 0, 1, NOW(), 95),
('pbkdf2_sha256$260000$hash14', NULL, 0, 'silverRaven90', 'Nick', 'Anderson', 'silver.raven90@example.com', 0, 1, NOW(), 76),
('pbkdf2_sha256$260000$hash15', NULL, 0, 'echoShadow19', 'Olivia', 'Thomas', 'echo.shadow19@example.com', 0, 1, NOW(), 53),
('pbkdf2_sha256$260000$hash16', NULL, 0, 'electricLynx38', 'Paul', 'Taylor', 'electric.lynx38@example.com', 0, 1, NOW(), 85),
('pbkdf2_sha256$260000$hash17', NULL, 0, 'warpEagle27', 'Quinn', 'Moore', 'warp.eagle27@example.com', 0, 1, NOW(), 90),
('pbkdf2_sha256$260000$hash18', NULL, 0, 'cobaltBear15', 'Rachel', 'Jackson', 'cobalt.bear15@example.com', 0, 1, NOW(), 69),
('pbkdf2_sha256$260000$hash19', NULL, 0, 'thunderYak99', 'Steve', 'Martin', 'thunder.yak99@example.com', 0, 1, NOW(), 72),
('pbkdf2_sha256$260000$hash20', NULL, 0, 'jadeHawk22', 'Tina', 'Lee', 'jade.hawk22@example.com', 0, 1, NOW(), 91);
Step 5: Start Backend Server
✅ Run Django Development Server
bash
Copy
Edit
python manage.py runserver
Step 6: Frontend Setup
✅ Navigate to the Frontend Directory
bash
Copy
Edit
cd frontend
cd finfit-frontend
✅ Install Frontend Dependencies
bash
Copy
Edit
npm install --force
✅ Start the Frontend
bash
Copy
Edit
npm start
Step 7: Access the Application
Main App: http://localhost:3000

Dashboard: http://localhost:3000/dashboard

Leaderboard: http://localhost:3000/leaderboard

Login Page: http://localhost:3000/login

## **Contributing to the Project**
We follow a collaborative approach to development. To contribute:

1. **Create a branch for your feature:**
   ```bash
   git checkout -b <branch_name>
   ```
2. **Make your changes and commit them:**
   ```bash
   git commit -m "<commit_message>"
   ```
3. **Push your changes and create a pull request:**
   ```bash
   git push origin <branch_name>
   ```

---

## **Troubleshooting**

### **Node.js or Git Not Found**
- Ensure you have installed them correctly.
- Restart your computer and try again.

### **Frontend Not Running**
- If `npm start` fails, try:
   ```bash
   npm cache clean --force
   npm install
   npm start
   ```

---

## **Communication**
Our team communicates via SMS messages/GitHub messaging.

## **Contact**
For any questions concerning the project, please contact:

**Chris Berns** (Team Lead and Product Owner)  
cberns@charlotte.edu  

## **License**
MIT License  

For any questions, please contact Chris Berns.
