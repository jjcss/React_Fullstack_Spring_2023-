
<!-- # Intro to React -->

<img src="https://i.imgur.com/JybZuXd.png" alt="drawing" width="100"/> <img src="https://i.imgur.com/Bzkqs5I.png" alt="drawing" width="100"/>

# Computer Science Society Club

## Table of Contents
- [Introduction](#Introduction)
- [Pre Requisites](#Pre-Requisites)
- [React Demo](#React-Demo)
    - [Pre-Demo](#Pre-Demo)
    - [Review Code Template](#Review-Code-Template)
    - [Creating our Backend Server](#Creating-our-Backend-Server)
    - [Installing MySQL + MySQL Workbench](#Installing-MySQL-+-MySQL-Workbench)
    - [Create MySQL Workbench Database](#Create-MySQL-Workbench-Database)
    - [Connect MySQL Database to your React Project](#Connect-MySQL-Database-to-your-React-Project)
    - [C - Create Data](#C---Create-Data)
    - [R - Read Data](#R---Read-Data)
    - [U - Update Data](#U---Update-Data)
    - [D - Delete Data](#D---Delete-Data)
    - [The End](#The-End)
- [Continue Learning About React](#Continue-Learning-About-React)

# React (Fullstack) Workshop 

**Date:** Monday, March 13th, 2022 <br>
**Description**: In this workshop You will learn about arguably the most used framework out there, React. We’ll go over how to connect our React projects to a backend, in this case, MySQL. Then, we'll go over how to implement the CRUD method in our React projects to display data. <br>
**Workshop Zoom Recording**: [TBD]() <br>
**Workshop Google Slides**: [TBD]() <br>

---


## Introduction

**Description**: We will be learning how to connect a React Project to a backend (MySQL). With this, we will be building a **Movie Application**, where we can add any new movies and its review that you watched. <br>
**We will be going over**: 
- Using **Vite** to run our React application
- Connect our React Project to a backend server, MySQL (MySQL Workbench)
- CRUD Method

**What is the CRUD Method?**:
The **[CRUD](https://www.freecodecamp.org/news/crud-operations-explained/)** method refers to the four basic operations a software application should be able to perform and it stands for:
- C: Creating Data
    - Done through a **POST** request
- R: Updating Data
    - Done through a **GET** request
- U: Updating Data
    - Done through a **PUT** request
- D: Deleting Data
    - Done through a **DELETE** request


**Final Website State of our Project**:
<details>
        <summary>Creating and Reading Data</summary>
        <img src="https://i.imgur.com/vg50zh3.gif" alt="drawing" width="500" height="300"/>
        </details>
<details>
        <summary>Updating Data</summary>
        <img src="https://i.imgur.com/IzjHpza.gif" alt="drawing" width="500" height="300"/>
        </details>
<details>
        <summary>Deleting Data</summary>
        <img src="https://i.imgur.com/w3sEXdA.gif" alt="drawing" width="500" height="300"/>
        </details>
        

---

## Pre Requisites
- [ ] **Download & Install React**: 
    - [ ] Make sure you have [React](https://developer.apple.com/xcode/) downloaded and installed.
        - Step 1:
            - Head over to the [Node JS website](https://nodejs.org/en/) and downloaded the latest version of React. We recommend you download the `Recommended for most users` version.
                <details>
                    <summary>Example</summary>
                    <img src="https://i.imgur.com/wa6kNWy.png" alt="drawing" width="400" height="200"/>
                </details>
        - Step 2:
            - Locate the downloaded packages and open it up. Click continue to install all necessary packages onto your system. You might get asked to enter your username and password. That's totally fine.
        - Step 3:
            - Once you've downloaded Node & React, let's open up our terminal.
                <details>
                        <summary>Example</summary>
                        <img src="https://i.imgur.com/MX165d1.png" alt="drawing" width="400" height="200"/>
                </details>
        - Step 4:
            - Once in your terminal, let's enter the command `node -v`. This command, if you've installed everything successfully, will display the current version of Node that you've just downloaded.
                <details>
                            <summary>Example</summary>
                            <img src="https://i.imgur.com/QH9Phfp.png" alt="drawing" width="500" height="200"/>
                </details>
            - Next, enter the command `npm -v`. If you installed everything correctly, you'll get the version of npm on your terminal.
                <details>
                            <summary>Example</summary>
                            <img src="https://i.imgur.com/seOiEiG.png" alt="drawing" width="500" height="200"/>
                </details>
        - Step 5 - Create React Project using [Vite](https://vitejs.dev/guide/) or [Create-React-app](https://reactjs.org/docs/create-a-new-react-app.html):
            - Option 1: Vite (For this demo, we are using Vite)
                - What is **Vite**?
                    - VIte is a development tool that comes with a dev server and is used for modern web applications. It offers a faster and smoother workflow in terms of development
                    - Once you have checked that everything was installed properly, it is now time to create our first React project. To do this, enter the command `npm create @vitelatest` in your terminal (command line). As soon as you enter this, you'll get an output asking you to enter a project name. Enter the name of your project, it can be anything. Next, your terminal might ask you to for the name of your "package", enter any name or click enter. Next, you'll be asked to select a framework, click on `React`. Then you'll be asked to enter a "variant", click on `Javascript`. 
                        - <details>
                                    <summary>You should see this on your terminal</summary>
                                    <img src="https://i.imgur.com/blh5j9N.png" alt="drawing" width="500" height="200"/>
                        </details>
                    - In your terminal you should see three commands that we are going to enter. So, enter the command `cd your_project_name` and press enter. This will change your directory, where you will now be inside the project you've just created. 
                    - Next, enter the command `npm install`. This will install all the necessary packages for you.
                    - Then, enter the command `npm run dev`, to run your React Vite environment.
                        - <details>
                                    <summary>You should see this on your terminal</summary>
                                    <img src="https://i.imgur.com/neH4Y0Q.png" alt="drawing" width="500" height="200"/>
                        </details>
                    - If everything was done correctly, you should see the above output on your terminal. As a last step, go to your terminal, that is running your environment, and copy the localhost link that you see. It should be something along the lines of `http://localhost:5173/`. Go to your browser and paste in the link you just copied. If you see the output below (Vite + React Symbols) on your browser, you are ready to begin coding.
                        - <details>
                                    <summary>You should see this on your browser</summary>
                                    <img src="https://i.imgur.com/89t4GyP.png" alt="drawing" width="500" height="200"/>
                        </details>
                    - Finally, to begin coding, you will need to open up your React project on a Coding Editor. We highly recommend you use and download [Visual Studio Code](https://code.visualstudio.com/download) as a coding editor. Once you selected a coding editor, go to where you downloaded/saved your React project and open it up on your editor. That's it. Happy coding!

                - > Note: Every time you want to create a new React project with **Vite**, you would just need to enter the commands starting from this step (step 5).
                - > Note: The good thing about Vite is that the installation is very fast, as opposed to "create-react-app"
        - Option 2: Create-react-app
            - Once you have checked that everything was installed properly, it is now time to create our first React project. To do this, enter the command `npx create-react-app enter-any-name-here`. Once you get an output saying "Happy Hacking" in your terminal, this means you've successfully installed React, and created your first project. 
            - > Note: Every time you want to create a new React project, you would just need to enter the command above into your terminal.
            - > Note: Depending on your system, the installation of React may take a long time. Take this into account when installing.
                <details>
                            <summary>Example</summary>
                            <img src="https://i.imgur.com/ySZcvYX.png" alt="drawing" width="500" height="200"/>
                </details>
            - You've successfully installed React and created your project! Now, let's see how we can access our project. To begin coding, you will need to cd into the project that you just created. Since I named my project `enter-any-name-here`, I will type in the following command to cd into this project, `cd enter-any-name-here`.
            - > Note: this step is required because in the next step we will be "turning on" our React project. 
                <details>
                            <summary>Example</summary>
                            <img src="https://i.imgur.com/nZIRCPQ.png" alt="drawing" width="500" height="400"/>
                </details>
            - Now, to get your React project up and running, you will need to type in the command `npm start` in your terminal. This will run your React project on your terminal and on a new browser. If you see the outputs like the screenshots below, then you've done all the steps correctly.
            - > Note: On the browser that opens up when you enter the command above, that is the initial code that all React projects start with.
                <details>
                            <summary>Terminal Example</summary>
                            <img src="https://i.imgur.com/O72bfsy.png" alt="drawing" width="500" height="200"/>
                </details>
                <details>
                            <summary>Browser Example</summary>
                            <img src="https://i.imgur.com/TOMxHV5.png" alt="drawing" width="500" height="300"/>
                </details>
            - Finally, to begin coding, you will need to open up your React project on a Coding Editor. We highly recommend you use and download [Visual Studio Code](https://code.visualstudio.com/download) as a coding editor. Once you selected a coding editor, go to where you downloaded/saved your React project and open it up on your editor. That's it. Happy coding!

> Note: Using Vite to install React will save you much more time, compared to create-react-app.
> **Resources**:
> Video on installing [React on Mac](https://www.youtube.com/watch?v=2oA9d93T9Aw)
> Install React [Article](https://www.knowledgehut.com/blog/web-development/install-react-on-mac)

---

# React Demo

## Pre-Demo
> Note: Before we get started on the demo, make sure you have completed the **Pre Requisites Steps 1 - 4**. This will allow us to proceed without any errors for the next few steps. Lastly, remember that for this demo, we used the **Vite** option. Make sure you have **[Visual Studio Code](https://code.visualstudio.com/download)** downloaded as well, which is a coding editor.

**Description**: In this section, we will be downloading the required "Initial_Code" template folder and opening it up with the proper commands.

0) Scroll all the way up, and located the `<> Code` green button. Click the green button and then click on the "Download Zip" button to download all files in this repository. 
    <details>
    <summary>Code Button</summary>
    <img src="https://i.imgur.com/FxWCKe4.gif" alt="drawing" width="500" height="300"/>
    </details>

1) Locate where you downloaded this folder and unzip the downloaded file. Once you unzip your file, you should now have a folder along the lines of "React_Fullstack_Spring_2023--". Click on the new folder and locate the "Initial_Code" folder. Drag the "Initial_Code" folder out of the "React_Fullstack_Spring_2023--" folder. 
    <details>
    <summary>Unzip File</summary>
    <img src="https://i.imgur.com/wKrR6jH.gif" alt="drawing" width="500" height="200"/>
    </details>

2) Let's open up our terminal. Inside of your terminal, locate your "Initial_Code" folder. I put my "Initial_Code" folder in my desktop, so I will enter the command `cd desktop` in my terminal. Afterwards, I entered the command `cd Initial_Code` to access my folder. To check that I accessed the folder correctly, I entered the command `ls` to see all the files inside of the folder.
    <details>
    <summary>Terminal Folder Access</summary>
    <img src="https://i.imgur.com/youFhWH.gif" alt="drawing" width="500" height="200"/>
    </details>

3) Now, we are going to install all the React packages that will allow our project to run. Thus, once you've accessed the "Initial_Code" folder from your terminal, enter the command `npm install`.
    <details>
    <summary>npm install</summary>
    <img src="https://i.imgur.com/tAv23Qo.gif" alt="drawing" width="500" height="200"/>
    </details>

4) Next, we want to run our Vite React project environment. We can do this with the command `npm run dev`. You should now see your environment running properly.
    <details>
    <summary>npm run dev</summary>
    <img src="https://i.imgur.com/2oJYP5P.gif" alt="drawing" width="500" height="200"/>
    </details>
    
5) Now, to complete this section, let's copy the "local:" http link that your terminal gives you. My terminal gives me `http://localhost:5173/`, but yours can be different. Then, head over to your browser and paste the link and press enter. You should now see the website UI Template. Make sure this terminal tab is always open.
    <details>
    <summary>Local host</summary>
    <img src="https://i.imgur.com/4mWSVJi.gif" alt="drawing" width="500" height="200"/>
    </details>
    <details>
    <summary>Browser</summary>
    <img src="https://i.imgur.com/b1zWfLm.gif" alt="drawing" width="600" height="300"/>
    </details>
6) Lastly, let's open up Visual Studio Code. After VS Code is opened, let's open up our "Initial_Code" folder. You should see the files and code from the repository.
    <details>
    <summary>VS Code</summary>
    <img src="https://i.imgur.com/OX9aydw.gif" alt="drawing" width="600" height="300"/>
    </details>
    
## Review Code Template
Take a few minutes to review the code in Visual Studio code. What is in the file, is the **front-end** of our website. The main files you should take a look at is the `App.jsx` & `App.css` files. As you can see, we will be building a movie review and movie name list application. Currently, since we have no backend, nothing happens when we press enter on an input or when we click a button.

## Creating our Backend Server
**Description**: In this section, we will be creating our **backend server** through the installation of various packages and a few other things.

1. Creating client folder
    - After reviewing our code, in VS Code let's create a `client` folder that we will use to store all our **front-end code**. 
        <details>
        <summary>Client folder</summary>
        <img src="https://i.imgur.com/CrvY5eO.gif" alt="drawing" width="500" height="300"/>
        </details>
    - Next, let's drag in all our files in our "Initial_Code" folder and insert them into the `client` folder. Make sure all files are now in the `client` folder.
        <details>
        <summary>Add files to Client folder</summary>
        <img src="https://i.imgur.com/Ts5xmQy.gif" alt="drawing" width="500" height="300"/>
        </details>
    - If you haven't noticed, go back to your browser tab that shows our applications website. Reload the page. You should see the "This localhost page can’t be found" message on your browser. This is because we created a new folder and we aren't directly inside of it from our terminal. To fix this, go to your terminal and exit out of your environment with the command `control c`. Now, enter the command `cd client` into your terminal. Now, enter the command `npm run dev` to start your environment again. Reload your browser. 
        <details>
        <summary>Re-run environment</summary>
        <img src="https://i.imgur.com/CsIZUAz.gif" alt="drawing" width="500" height="300"/>
        </details>
2. Creating server folder
    - Let's go back to VS Code, and outside of the `client` folder, let's create a `server` folder. We will include all our logic relating to our backend inside of this folder.
        <details>
        <summary>Server folder</summary>
        <img src="https://i.imgur.com/ETLXG4E.gif" alt="drawing" width="500" height="300"/>
        </details>
    - Next, let's open up a new terminal tab, but make sure you are inside of the "Initial_Code" directory. We should be familiar with these steps. In the new terminal let's enter the command `cd server`. Similar to running the front-end environment, we will have to run a backend environment that will be running in the back. We still have a few more steps to have our backend invironment running.
        <details>
        <summary>cd server</summary>
        <img src="https://i.imgur.com/p33Gfzf.gif" alt="drawing" width="500" height="300"/>
        </details>
3. Running Server Node Packages
    - Now, still in our server terminal, let's enter in the command `npm init`. Press ente/yesr to anything your terminal asks you. This command will create a "package.json" file in your VS Code that will contain all our server packages.
        <details>
        <summary>npm init</summary>
        <img src="https://i.imgur.com/oXBu9DE.gif" alt="drawing" width="500" height="300"/>
        </details>
        <details>
        <summary>package.json file</summary>
        <img src="https://i.imgur.com/g6vhuIZ.png" alt="drawing" width="500" height="300"/>
        </details>
    - Next, we are going to install a few more packages that will allow us to run our server successfully. Go back to your server terminal and enter the command `npm install express body-parser mysql nodemon cors`. After they're done installing, you should see the new additions in your "package.json" file.
        - express: our actual express server
        - body-parser: parses our request and converts it into a format from which you can easily extract relevant information
        - mysql: database we will be using for our application
        - nodemon: will automatically refresh our backend when we add new code
        - cors: will allow our backend to communicate with the frontend
        <details>
        <summary>install more packages</summary>
        <img src="https://i.imgur.com/iqgqQub.gif" alt="drawing" width="500" height="300"/>
        </details>
    - Lastly, since we've installed the **nodemon** package, let's go to our `package.json` file in our VS Code. Your file probably looks like this:
        - ```
          {
              "name": "server",
              "version": "1.0.0",
              "description": "",
              "main": "index.js",
              "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
              },
              "author": "",
              "license": "ISC",
              "dependencies": {
                "body-parser": "^1.20.2",
                "cors": "^2.8.5",
                "express": "^4.18.2",
                "mysql": "^2.18.1",
                "nodemon": "^2.0.21"
              }
            }
          ```
        - Let's update this file to include these two nodemon lines, inside of "scripts". The lines below will allow our server backend to refresh continuously without us having to restart it everytime we make a new change:
            - ```
              "start": "node index.js",
              "devStart": "nodemon index.js",
              ```
        - Your `package.json` file should now have this code:
            - ```
              {
                  "name": "server",
                  "version": "1.0.0",
                  "description": "",
                  "main": "index.js",
                  "scripts": {
                    "start": "node index.js",
                    "devStart": "nodemon index.js",
                    "test": "echo \"Error: no test specified\" && exit 1"
                  },
                  "author": "",
                  "license": "ISC",
                  "dependencies": {
                    "body-parser": "^1.20.2",
                    "cors": "^2.8.5",
                    "express": "^4.18.2",
                    "mysql": "^2.18.1",
                    "nodemon": "^2.0.21"
                  }
                }
              ```

4. Creating Server File (index.js)
    - Now, let's go back to VS Code, and inside of our `server` folder, let's create a `index.js` file. In this file, we'll include logic for our backend.
        <details>
        <summary>create index.js file</summary>
        <img src="https://i.imgur.com/kqpCvX0.gif" alt="drawing" width="500" height="300"/>
        </details>
    - In your new `index.js` file, enter the following code. The important lines of code you should know is "app.listen()" & creating your express server in the first two lines of code:
        ```
        // code that will make our backend server run
        const express = require("express"); 
        const app = express(); // setting up our express server
        const bodyParser = require("body-parser");
        const cors = require("cors");


        // code that will save ud errors in the future
        app.use(cors());
        app.use(express.json());
        app.use(bodyParser.urlencoded({extended:true}));
        //

        // let's us run our backend server. Message will output in our server terminal
        app.listen(3001, () => {
            console.log("running on port 3001");
        })
        ```

5. Running your backend server
    - Now that you've installed all necessary packages and included the boiler plate code, let's run our backend server. Enter the command `npm run devStart` in your backend terminal. If you've done everything correctly up until this point, you should see the following messages on your terminal.
        <details>
        <summary>run backend server</summary>
        <img src="https://i.imgur.com/14JQ2Mj.gif" alt="drawing" width="500" height="300"/>
        </details>

## Installing MySQL + MySQL Workbench
> Note: Please install MySQL Workbench. Installation shouldn't take more than 5 minutes. 
-> [MySQL WorkBench Installation](https://dev.mysql.com/downloads/workbench/)
-> [MYSQL WorkBench Installation Youtube video](https://www.youtube.com/watch?v=sY_QPWiIeDQ&ab_channel=CodeJava)
**Description**: MySQL Workbench will allow us to visualize that data that we will be adding to our database. If you've already installed MySQL Workbench, you can move on to the next step.

## Create MySQL Workbench Database
**Description**: We will be creating our first Database on the application. We will be creating our data set, which will include an `id`, `movieName` & `movieReview`.
1. Once we've installed the application, let's open it up. Click on the first "MySQL Connection" that you see on your screen. Make sure you remember your "root" password. 
        <details>
            <summary>database environment</summary>
            <img src="https://i.imgur.com/Fxtdjzg.gif" alt="drawing" width="500" height="300"/>
            </details>

2. In our application, let's located the "Schema" section, which should be to the side of "Administration". On the left side under "Schemas", let's create a new "Schema" (Database). Double click, and click on "create schema". Then, enter the name of your database. I'll name my `MovieReviews` (remember the name of your database). Then, press "apply" and "apply" again for the next few screens. After this, you should see your newly created database under "Schemas".
    <details>
            <summary>create database</summary>
            <img src="https://i.imgur.com/o2o5iUS.gif" alt="drawing" width="500" height="300"/>
            </details>

3. Now, let's open up our database, and let's create a new "Table". A table is where we are going to store all our data. To do this, double click on "Table", then click on "Create Table", and name your table "movie_reviews".
    <details>
            <summary>create table</summary>
            <img src="https://i.imgur.com/zU6JCDC.gif" alt="drawing" width="500" height="300"/>
            </details>

4. Now, we are going to define the data that we'd like to create. The first dataset that we will create is `id`, it's datatype will be `int`, and we should make sure that the "primary key (PK)", "not null (NN)" and "auto increment (AI)" are all turned on. T
    - the primary key is used to help us uniquely identify each row in a table
    - Not null means that we never want the `id` to have a null value
    - Auto increment will increase the `id` value by one everytime we add a new movie review to the table.
        <details>
                <summary>create "id" variable </summary>
                <img src="https://i.imgur.com/7fwRRar.gif" alt="drawing" width="500" height="300"/>
                </details>

5. Next, let's create our next dataset, `movieName`. Give it a dataype of "VARCHAR(200)". This means that the length of the movie entered cannot be longer than 200 characters. Let's only select the "not null (NN)" option, as we never want a Movie name to be empty.
    <details>
                <summary>create "movieName" variable </summary>
                <img src="https://i.imgur.com/ExE2teA.gif" alt="drawing" width="500" height="300"/>
                </details>

6. Next, let's create our last dataset, `movieReview`. Give it a datatype of "TEXT(500)". "Text(500)" means that the Movie Review cannot be longer than 500 characters. Let's only selet the "not null (NN)" option, as we never want a Move Review to be empty.
    <details>
                <summary>create "movieReview" variable </summary>
                <img src="https://i.imgur.com/PjsFgB7.gif" alt="drawing" width="500" height="300"/>
                </details>
                
7. Now that we created all variables we will be using, let's go to the bottom right corner, and click on "Apply". Once you click it, you'll see that the application has created SQL code based on your selections. Then, click on "Apply" & "Close".
    <details>
                <summary>Apply Table additions </summary>
                <img src="https://i.imgur.com/dtz3fQd.gif" alt="drawing" width="500" height="300"/>
                </details>

8. Lastly, locate the "Tables" section and click on the table you just created "movie_reviews". Double click on the table and click on "Select rows - limit 1000". This will allow you to see the 3 datasets that you just created in a table format.
    <details>
                <summary>See Table columns </summary>
                <img src="https://i.imgur.com/XcI1znT.gif" alt="drawing" width="500" height="300"/>
                </details>

## Connect MySQL Database to your React Project
**Description**: We will be connecting the database that we just created with our React Project (backend server).
1. Let's head back to our VS Code, but make sure you don't exit out of your MySQL Workbench database. Let's head to the `server` folder and let's then click on the `index.js` file.
2. Similar to how we created variables for "cors", "express", and "bodyparser", we are going to create a variables for "mysql". This will allow us to create SQL commands and connect our DB. So, under the `const cors = require("cors")` line, enter the following line:
    ```
    const mysql = require("mysql");
    ```
    <details>
                <summary>Updated index.js file </summary>
                <img src="https://i.imgur.com/XP2gSkc.png" alt="drawing" width="500" height="300"/>
                </details>
3. Next, we are now going to create a connection to our database with the variable we just created. Two lines under the code above, let's add in the following code:
    ```
    // will allow us to create a connection with our MySQL Database
    const db = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'Enter_your_password_here',
        database: 'MovieReviews'
    });
    ```
    - `createPool` -> function used to allow us to create conenction with db
    - `host` -> enter the name of your system host. If you don't know, put `localhost`, as that is the default name for MySQL DB's.
    - `user` -> enter the username of your DB connection. The default is `root`, unless you changes it
    - `password` -> When you installed MySQL Workbench, you were asked for a password. Put the password you entered.
    - `database` -> Enter the name of the database you create in Workbench. In this tutorial we name our DB `MovieReviews`
    <details>
                <summary>Createpool code </summary>
                <img src="https://i.imgur.com/eOaUBt3.png" alt="drawing" width="500" height="300"/>
                </details>

4. Next, two lines below the code above, we are now going to write some MySQL code and add some data to our database and to test if our connections are working as expected. Let's enter in the following lines of code:
    ```
    // test connection to database
    app.get("/", (req,res) => {
        const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Avengers', 'love');";

        db.query(sqlInsert, (err, result) => {
            res.send("hi");
        });
    });
    ```
    - `app.get("/")` -> let express know that we want to run some code whenever there is a HTTP **GET** request with a path of "/"
    - `(req,res) =>` -> is a callback function. "req", short for request. "res", short for response. They can be named anything but it's standard to name them "req" and "res". "req" object represents the HTTP request and has properties for the request query string, parameters, body, and HTTP headers. "res" object represents the HTTP response that an Express app sends when it gets an HTTP request. Above we use "res" to send a message to our browser, "hi" .
    - `const sqlInsert` -> creating a variable that will store our SQL code that we want to input to our database.
        - "**INSERT INTO movie_reviews**": informing our Database that we want to insert data into the **movie_reviews" table that we alreaady created.
        - "**(movieName, movieReview)**": letting our database know that we want to insert data into our two dataset variables (columns) in our table, that we've created when we set up our database. They have to be the same name as your columns.
        - "**VALUES ('Avengers', 'love')**": letting our DB know that we want to insert these two strings. 'Avengers' would go in the "movieName" column, and "love" will go in the "movieReview" column.
    - `db.query(sqlInsert, (err,result))` -> We use `db.query` to let our DB know that we want to run a SQL query (code). The first parameter that we enter into `query()` is the `sqlInsert` variable that stores our SQL code. The second parameter `(err,result)`, "err" stands for error and is used to return an error, if any. "result" we don't need to worry about just yet.
    - `res.send("hi")` -> is a message we will show in our browser.
    <details>
                <summary>DB Query </summary>
                <img src="https://i.imgur.com/l5uCIH3.png" alt="drawing" width="500" height="300"/>
                </details>
                
5. Now that we wrote our first connection to our DB, let's test out the code that we just entered. Go to a browser tab and enter in the link `http://127.0.0.1:3001/`. This is the browser that your backend is currently running in. Notice that the link is different then where your frontend website is running.
    <details>
                <summary>3001 Link </summary>
                <img src="https://i.imgur.com/etXZ2yv.png" alt="drawing" width="500" height="300"/>
                </details>

6. Refresh your browser page. Let's head back over to our MySQL Workbench application and now let's refresh our database to see, if the data that we ran is showing up in our database. If everything ran correctly, you should see the "Avengers" data, as seen below:
    <details>
                <summary>Workbench data </summary>
                <img src="https://i.imgur.com/HvxOFDb.gif" alt="drawing" width="500" height="300"/>
                </details>
                
7. Congrats! Your database is successfully connected to your project. Now that we tested that the connection works, we can delete the `sqlInsert` code and `db.query(...)` code. We were only using it for testing.
    <details>
                <summary>Updated index.js file </summary>
                <img src="https://i.imgur.com/8dwYeB8.png" alt="drawing" width="500" height="300"/>
                </details>

## C - Create Data 
**Description**: In this section, we will begin the CRUD method, specifically with Creating Data. The section is broken up into 2 sections: **frontend** & **backend**. Whenever you work on a fullstack project, you're always going to have to include logic on both ends (frontend & backend - communicating with each other).

- Frontend
    1.  Let's head back to our VS Code, and let's open up our client folder and let's head over to our `App.jsx` file. In order for our **frontend** to communicate with our **backend** we are going to have to install a package called **Axios**. Axios will let us make requests to our backend server. So, let's open up our **client** terminal tab. Exit out of your environment with the command `control c`. Follow this up with the command `npm i axios`, to install axios. Make sure you are in the `client` directory. Then, after axios finished installing, restart your frontend environment with the command `npm run dev`.
        <details>
                    <summary>Install axios</summary>
                    <img src="https://i.imgur.com/yOWSHbv.gif" alt="drawing" width="500" height="300"/>
                    </details>
    2. Next, in our `App.jsx` file let's import **Axios** to this file. Enter the following code at the top of the file:
        ```
        import Axios from 'axios';
        ```
        <details>
                    <summary>import axios</summary>
                    <img src="https://i.imgur.com/XdUzjcD.png" alt="drawing" width="500" height="300"/>
                    </details>
                    
    3. Let's begin writing some code in our `App.jsx` file. We will now begin writing an Axios connection to our backend. We will be passing data from our frontend to our backend. Enter the following code in your `submitReview` function:
        ```
        // send movieName and review data to backend
          const submitReview = () => {
            Axios.post("http://127.0.0.1:3001/api/insert", {
              movieName: movieName,
              movieReview: review,
            }) .then(() => {
              alert("success");
            });
          };
        ```
        - `Axios.post("http://127.0.0.1:3001/api/insert")` 
            - Post -> POST request that will send data to our api endpoint via the url link that you see above. Notice that `"http://127.0.0.1:3001/"` is the same link as our backend link. 
            - `"api/insert"` -> is the url link that we want to send the data to. We will use the same link when we connect our backend for this section.
        - ```
            movieName: movieName,
            movieReview: review,
            ```
            - movieName: movieName -> the left "movieName" is the parameter name that we will create in the backend side. The right "movieName" is our "movieName" variable that we created in this file. Locate the Movie Name input in our file, and take notice of the "onChange" function. Based on the value that the user enters in this input, it will store the input into the "setMovieName" variable that we also created in this file. In summary, we are sending the "movieName" data that the user enters into the input to our backend.
            - movieReview: review -> the left "movieReview" is the parameter name that we will create in the backend side. The right 'review' is our "review" variable that we created in this file. Locate the Movie Review input in our file. Take notice of the "onChange" function. Any value the user enters into this input will store it into the "setReview" variable. 
            - Typical process : store data (input) into variable -> send it to the backend
        - Lastly, check where the `submitReview` function is being called. It is being called in the **submit button**, which is called in the React "onClick" function.
            <details>
                        <summary>Axios POST request</summary>
                        <img src="https://i.imgur.com/fpEbBxf.png" alt="drawing" width="500" height="300"/>
                        </details>

    
- Backend
    1. Now that we've added our **POST** request on the frontend, we have to receive the connection in our backend. Let's head back to our `server` folder and let's select the `index.js` file. Enter the following code anywhere in your file:
        ```
        // C - POST created data to database
        app.post("/api/insert", (req,res) => {
            const movieName = req.body.movieName;
            const movieReview = req.body.movieReview;

            const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)";

            db.query(sqlInsert, [movieName,movieReview], (err,result) => {
                console.log(err);
            });
        });
        ```
        - `app.post("/api/insert", (req,res) => )`
            - `app.post()` -> gets the url link from the **POST** request from the frontend.
            - "/api/insert" -> same url link as the one from our frontend POST request.
        - `const movieName = req.body.movieName;` -> creating a variable that stores the request variable from our frontend POST request. Keep note that `req.body.movieName` used the same "movieName" variable as the one in our frontend.
        - `const movieReview = req.body.movieReview` -> same as above.
        - `const sqlInsert` -> similar SQL Code that we did earlier, but the only difference is `(?,?)`. This let's our code know that we want to enter two values that we get from our frontend (movieName , movieReview).
        - `db.query(sqlInsert, [movieName,movieReview], (err,result) =>)`
            - `db.query` -> send a query (SQL Code) to our database
            - `sqlInsert` -> SQL code we want to run
            - `[movieName,movieReview]` -> this is where we input the two variables that would go in the `(?,?)` SQL Code.
            <details>
                        <summary>Backend POST request</summary>
                        <img src="https://i.imgur.com/TrNPDk7.png" alt="drawing" width="500" height="300"/>
                        </details>
    2. Next, let's head over to our **Website UI Browser**. Refresh your page. In the Movie name input and Movie Review Input, enter some information that you want to insert into your data. Then, click the "Submit button". If everything worked correctly, your data should be uploaded into your database.
        <details>
                        <summary>Insert Website Data</summary>
                        <img src="https://i.imgur.com/QJMocuh.gif" alt="drawing" width="500" height="300"/>
                        </details>
    3. Then, head back to your MySQL Workbench application. Refresh your table data. You should now see the movie name and review you just submitted. Congrats!.
        <details>
                        <summary>MySQL Workbench Data</summary>
                        <img src="https://i.imgur.com/hc8U6Es.gif" alt="drawing" width="500" height="300"/>
                        </details>

> Note: To make sure everything is going right, always keep an eye on your **MySQL Workbench** to see that all data is being shown.

## R - Read Data 
**Description**: In this section, we will begin **Reading** the data that we just inserted in the **Create** section. This section is split into two sections, **backend** and **frontend**. Notice that for **Reading** data, we will be starting with the **backend**.

- Backend
    1. Head over to your `server` folder and select the `index.js` file. We will now be reading data from our `movie_reviews` table from our database, and then sending it to our frontend. To do this, enter the following code anywhere in your file:
        ```
        // R - Read movie data from database
        app.get("/api/get", (req,res) => {
            const sqlSelect = "SELECT * FROM movie_reviews";

            db.query(sqlSelect, (err,result) => {
                res.send(result);
            });
        });
        ```
        - `app.get("/api/get", (req,res))`
            - `app.get()` -> function used to handle **GET** requests. 
            - `"/api/get"` -> is the endpoint url that we will use to connect with our frontend
        - `const sqlSelect = "SELECT * FROM movie_reviews"`;
            - `SELECT *` -> means get all the data..
            - `FROM movie_reviews` -> .. from our `movie_reviews` table in our database.
        - `db.query(sqlSelect, (err,result) => )`
            - `db.query()` -> use to tell our database to run our SQL Code.
            - `sqlSelect` -> run SQL code stored in this variable.
        - `res.send(result)` -> use to send our data (stored in result) to our frontend.
        <details>
                        <summary>GET Database Data</summary>
                        <img src="https://i.imgur.com/i9Y08Iz.png" alt="drawing" width="500" height="300"/>
                        </details>
    
- Frontend
    1. Let's head back to our `client` folder and let's select the `App.jsx` file. Let's head to our `App()` function and let's create new "useState" variables. We will use these variables to store our `movieName` & `movieReview` data. Enter the following code into your file:
        ```
        const [movieReviewList, setMovieList] = useState([]);
        ```
        - `movieReviewList` -> will store all the movie data (both movieName & movieReview). We are setting (storing) the current data we get.
        - `setMovieList` -> will update the data (both movieName & movieReview) to update the state of the data.
        - Notice that the **useState** takes in an empty array. This array will store the data that we get from our backend.
            <details>
                        <summary>create Movie Data array</summary>
                        <img src="https://i.imgur.com/0CVKdd0.png" alt="drawing" width="500" height="300"/>
                        </details>
                        
    2. Now, let's locate our `useEffect()` empty function. `useEffect` is a built in React function that allows us to run code every time the web page renders. This is helpful for **GET** requests. So, inside of this function let's add in the following code that will allow us to connect to our **backend**, receive the backend data (movie data), and use the `setMovieList` to update our movie data state:
        ```
        useEffect(() => {
            Axios.get("http://127.0.0.1:3001/api/get").then((response) => {
              setMovieList(response.data);
            });
        }, []);
        ```
        - `Axios.get()` -> using **Axios** to connect with our **backend**.
        - `"http://127.0.0.1:3001/api/get"` -> using the same link as we did in our backend (endpoint). 
        - `.then((response) =>)` -> if our endpoint works, then we use the `.then()` function to receive the data from our backend and store it in the `response` parameter.
        - `setMovieList(response.data)` -> accessing data in `response.data` and then setting our data from our backend and updating the state of `setMovieList`. 
            <details>
                        <summary>Setting movie data</summary>
                        <img src="https://i.imgur.com/NwDiq7k.png" alt="drawing" width="500" height="300"/>
                        </details>
    3. Now, to begin displaying our data in our Website UI, and let's locate the mock data that we have for the Spiderman movie (row). The code should look like this:
        ```
        {/* One movie row */}
          <div>
            <div className="movie-container">
                  <div className="movie-review-inner-container">
                      <h3 className="movie-review-title">Spider Man (2002)</h3>
                     <br />
                      <p className="review-desc"> This movie is a masterpiece. Spider-Man (2002) is generally one of my favorite Spider-Man movies of all time, it tells an amazing origin story about Peter Parker and how he became everyone's favorite Wall-Crawler. First the actors did a fantastic job in this movie including William Defoe, his performance as Green Goblin is easily the most iconic part about this movie and how his interpretation of Green Goblin is easily one of the best villains in Spidey's arsenal.  </p>
                  </div>

                  {/* Review Input */}
                  <textarea className='input_style2' type="text" onChange={(e) => {
                        setNewReview(e.target.value);
                      }} />

                  <div className= "buttons-container">
                    {/* update button */}
                    <button className="update-button" onClick={() => {
                      updateReview(val.movieName)
                    }} >Update</button>
                        &nbsp; &nbsp;

                    {/* delete button */}
                    <button onClick={() => {
                      deleteReview(val.movieName)
                    }} className="delete-button">Delete</button>
                </div>
                <br /><br />
            </div>
          </div>
          {/*  */}
        ```
    4. Right above before the row starts, we are going to add the following code that will allow us to loop over our `movieReviewList` array and begin displaying the data inside of it:
        ```
        {movieReviewList.map((val) => {
            return
        })}
        ```
        - `movieReviewList` -> is our variable that stores all our movie data (we got from our backend)
        - `.map((val) => )` -> for loop function that will allow us to access each single movie data in `movieReviewList`, using the `val` parameter.
        - `return` -> we will use to return our row from **Step 3**.
            <details>
                        <summary>Loop over movieReviewList</summary>
                        <img src="https://i.imgur.com/Gei8eRj.png" alt="drawing" width="500" height="300"/>
                        </details>
                        

    5. Next, let's copy our row code (from **step 3**), and let's paste it inside of our `.map() function` we did in **step 4**, after the `return` keyword. 
        <details>
                        <summary>Copy & Paste Row code</summary>
                        <img src="https://i.imgur.com/3iwmFtI.gif" alt="drawing" width="500" height="300"/>
                        </details>


    6. Next, now that we are looping over our data, let's locate the the `h3` tag (inside of the movie row) where the mock Movie Name data is located(Spider Man (2002). The `h3` tag should look like this:
        ```
        <h3 className="movie-review-title">Spider Man (2002)</h3>
        ```
        - Replace **Spider Man (2002)** with the following code:
            ```
            <h3 className="movie-review-title">{val.movieName}</h3>
            ```
            - `{val.movieName}` -> we are using the `val` parameter to access the "movieName" data.
    7. Now, let's locate the `p` tag, inside of the moview row, where the mock movie review data is located (This movie is a masterpiece...). The `p` tag should look like this:
        ```
        <p className="review-desc"> This movie is a masterpiece. Spider-Man (2002) is generally one of my favorite Spider-Man movies of all time, it tells an amazing origin story about Peter Parker and how he became everyone's favorite Wall-Crawler. First the actors did a fantastic job in this movie including William Defoe, his performance as Green Goblin is easily the most iconic part about this movie and how his interpretation of Green Goblin is easily one of the best villains in Spidey's arsenal.  </p>
        ```
        - Replace the Spiderman **movie review** with the following code:
            ```
            <p className="review-desc"> {val.movieReview} </p>
            ```
            - `{val.movieReview}` -> we are using the `val` parameter to access the "movieReview" data.
        <details>
                        <summary>Updated movie row</summary>
                        <img src="https://i.imgur.com/oX2q9Y7.png" alt="drawing" width="500" height="300"/>
                        </details>

    8. Next, let's head ove to our **Website (UI) browser tab**, and let's see our new changes. We should now see all our data from our database in the website.
        <details>
            <summary>Movie Data on Website</summary>
            <img src="https://i.imgur.com/Tt3Hzjg.gif" alt="drawing" width="500" height="300"/>
            </details>
    9. Now, in the website, enter in a new movie name and movie review in the input fields. Try scrolling down to see if it shows on the website. It doesn't show on the website automatically, but if your **reload** the page and scroll down, you should now see the new movie name and movie review.
        <details>
            <summary>Add new name and review on website</summary>
            <img src="https://i.imgur.com/icDjRxd.gif" alt="drawing" width="500" height="300"/>
            </details>
    
    10. To automatically show the new **movie name** and **movie review** on the website you have to add in some logic. In our file, let's locate our `submitReview()` function. In the function let's delete the `.then(...)` function, as we don't need it. 
        <details>
            <summary>Delete .then() function</summary>
            <img src="https://i.imgur.com/xBjkPsZ.gif" alt="drawing" width="500" height="300"/>
            </details>
    11. Now, in the `submitReview()` function, we are going to add in the following code that will allow us to update the state of our data and set it to `setMovieList()`:
        ```
        setMovieList([...movieReviewList, {movieName: movieName, movieReview: review}]);
        ```
        - `[...movieReviewList, {movieName: movieName, movieReview: review}]`
            - `...movieReviewList` -> select all data stored in `movieReviewList` array
            - `{movieName: movieName, movieReview: review}` -> pass in object with new `movieName` & `review`, which allows us to update our webiste and display the data as soon as it is submitted.
        <details>
            <summary>update setMovieList state</summary>
            <img src="https://i.imgur.com/NR206hQ.png" alt="drawing" width="500" height="300"/>
            </details>
        <details>
            <summary>See data added in Website</summary>
            <img src="https://i.imgur.com/7W6329E.gif" alt="drawing" width="500" height="300"/>
            </details>
    12. Congrats on learning how to **Read** and display your data on your website.

> Note: To make sure everything is going right, always keep an eye on your **MySQL Workbench** to see that all data is being shown.

## U - Update Data 
**Description**: In this section, we will begin **updating** the data (movie Review) that we display in our Website UI. This section is split into two sections, **frontend** and **backend**. Notice that for **Updating** data, we will be starting with the **frontend**.

- Frontend
    1. In our `App.jsx` file let's locate our `updateReview()` function. This Function takes in a `movie` parameter. Inside of this function, the following code we enter will send the updated `movieName` & `newReview` to our backend server:
        ```
        // update our Movie Review
          const updateReview = (movie) => {
            Axios.put("http://127.0.0.1:3001/api/update", {
              movieName: movie,
              movieReview: newReview,
            });

            setNewReview("");
          }
        ```
        - `Axios.put("http://127.0.0.0.1:300/api/update")` -> the `put() function` is used to make a **PUT** request, which updates data. Inside of the function we have the URL link **endpoint** that we will use to send our new data to the our backend server.
        - ```
          movieName: movie,
          movieReview: newReview,
          ```
            - passing our updated`movie` (parameter) & `newReview` data to our backend.
        - `setNewReview("")` -> after we send our updated data to our backend, we will updated the state of `setNewReview` to an empty string.
            - Notice that we created a `newReview` & `setNewReview` state variables. 
            - Now, locate our `textarea` tag in this file. The code should look like this:
                ```
                <textarea className='input_style2' type="text" onChange={(e) => {
                  setNewReview(e.target.value);
                }} />
                ```
                - In this `textarea` tag, we have an `onChange((e))` function that takes in a `e` parameter. Inside of the function we have the line of code like this:
             `<textarea className='input_style2' type="text" onChange={(e) => {
  setNewReview(e.target.value);`
                     - This line basically takes the `e` paramter, that stores the input that the user enters that we will use to update the review of the movie, and updates the state of `setNewReview()`, with the input the user enters.
           - Next, scroll down a bit and locate the **Update** `button` tag. It's code should look like this:
               ```
               <button className="update-button" onClick={() => {
                 updateReview(val.movieName)
               }} >Update</button>
               ```
               - In this `button` tag, we have a `onClick()` function, that gets triggered when the user clicks the button. If the user clicks the button, our `updateReview()` function get's called and gets the `movieName` of the specific movie the user chooses, and passes it as a parameter to the function. This triggers our `updateReview()` function logic to be triggered.
        <details>
            <summary>updateReview() function</summary>
            <img src="https://i.imgur.com/F3QNrp6.png" alt="drawing" width="500" height="300"/>
            </details>



- Backend
    1. Let's head over to our `server` folder and let's select the `index.js` file. The following code will take in the data the frontend is sending us, and will update our MySQL database:
        ```
        // U - Update data in database
        app.put("/api/update", (req,res) => {
            const name = req.body.movieName;
            const review = req.body.movieReview;
            const sqlUpdate = "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?";

            db.query(sqlUpdate, [review, name], (err,result) => {
                console.log(err);
            });
        });
        ```
        - `app.put("/api/update")` -> makes PUT request to our server. Inside of the `put()` function we have the **update** url **endpoint** we get from our **frontend**.
        - ```
          const name = req.body.movieName;
          const review = req.body.movieReview;
          ```
          - variables used to store the `movieName` and `movieReview` we get from our frontend (using our req parameter)
        - `const sqlUpdate = "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?"` -> SQL code that basically translates to, "update our database's `movie_reviews` table, and set (change) the `movieReview` (column) that equals to our `review` parameter, where the `movieName` (colmn) is equal to our `name` parameter we pass into our `db.query()` function".
        - `db.query(sqlUpdate, [review,name])` -> gives a query to our database. The first parameter is the SQL code we want to run. The second parameter has an array, where it's first value `review` is input into the first "?" of the SQL code and the `name` value is input into the second "?" of the SQL code.
        <details>
            <summary>Update Database</summary>
            <img src="https://i.imgur.com/B1POCqD.png" alt="drawing" width="500" height="300"/>
            </details>
    2. Next, let's go back to our webiste tab browser, and let's go to any movie, and let's input a new review for it. After you enter the review, click **update**. Refresh the page. You should now see that the movie's review that you chose is updated. Congrats!
        <details>
            <summary>Website Data Update</summary>
            <img src="https://i.imgur.com/IGQbOg8.gif" alt="drawing" width="500" height="300"/>
            </details>

> Note: To make sure everything is going right, always keep an eye on your **MySQL Workbench** to see that all data is being shown.

## D - Delete Data 
**Description**: Lastly, in this section, we will begin **deleting** the data (movie Review) that we display in our Website UI. This section is split into two sections, **frontend** and **backend**. Notice that for **Updating** data, we will be starting with the **frontend**.

- Frontend
    1. Let's head back to our `client` folder, and let's select the `App.jsx` file. Let's locate our `deleteReview()` function. This function takes in a `movie` parameter. Inside of this function, the following code we enter will send the movieName we want to delete to our backend server:
        ```
        const deleteReview = (movie) => {
            Axios.delete("http://127.0.0.1:3001/api/delete/"+String(movie));
        };
        ```
        - `Axios.delete()` 
            - sends our backend server a **DELETE** request.
            - Inside of the function we insert a URL Link **endpoint** that our backend will use to communicate with our frontend.
            - At the end of the link we have `+String(movie)`, which is how we are able to pass in the `movie` parameter, which will let our backend server know which movie to **DELETE**.
        - Let's now locate the **DELETE** `button` tag in this file. The code should look like this:
            ```
            <button onClick={() => {
                deleteReview(val.movieName)
              }} className="delete-button">Delete</button>
            ```
            - In this `button` tag, we added a `onClick()` function that will run whenever a user clicks on the button. 
            - Inside of the function, we call call our `deleteReview()` function and we pass in the `val.movieName` value as parameter inside of it. `val.movieName` will pass in the name of the movie that you have chosen to delete.
        <details>
            <summary>deleteReview() function</summary>
            <img src="https://i.imgur.com/qQgcnjr.png" alt="drawing" width="500" height="300"/>
            </details>
            
- Backend
    1. Let's head back to our `server` folder and let's select our `index.js` file. The following code will take in the data the frontend is sending us, and will update our MySQL database: 
        ```
        // D - Delete data from database
        app.delete("/api/delete/:movieName", (req,res) => {
            const name = req.params.movieName;
            const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";

            db.query(sqlDelete, name, (err,result) => {
                if (err) console.log(err);
            });
        });
        ```
        - `app.delete()` -> used to make a **DELETE** request
        - "/api/delete/:movieName" -> is our API **endpoint** url that is used when connecting with our frontend. `:movieName`, is how we receive the `movieName` from our frontend that we want to delete in our database.
        - `const name = req.params.movieName;`
            - Notice how we have `req.params` rather than `req.body`. `req.params` is used when passing in (reading) parameters in our **URL**. Thus, with `req.params.movieName` we are getting the parameters `movieName` value.
        - `const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";` -> SQL Code that basicallys says "delete moviewName that equals to the value begin passed in for the (?) in the movieName table".
        - `db.query(sqlDelete, name)`
            - `db.query()` -> used to run our `sqlDelete` SQL code
            - `name` -> here we are passing in the `name` varialbe that stores the `movieName` we want to delete.
        <details>
            <summary>Delete data from database</summary>
            <img src="https://i.imgur.com/ENy3aPa.png" alt="drawing" width="500" height="300"/>
            </details>
    2. Let's head back to our browser and let's check if we are able to delete our Movie data. Select any movie and click on the **DELETE** button. Don't forget to refresh the page afterwards. You shouldn't be able to see the movie you just delete on your website. Congrats on learning how to delete your data!
        <details>
            <summary>Delete data from Website</summary>
            <img src="https://i.imgur.com/qOwdEvS.gif" alt="drawing" width="500" height="300"/>
            </details>
 
 > Note: To make sure everything is going right, always keep an eye on your **MySQL Workbench** to see that all data is being shown.
    
## The End
**Summary**: Congratulations on learning how to connect a **React** project to a backend, and learning how to use the **CRUD** method. We hope you left this meeting with a better understanding of React and how to use **MySQL** as a backend, along with **MySQL Workbench**. Feel free to look at the resources we've compiled below, which includes

---

# Continue Learning About React
- [11-Hour React Free Course](https://scrimba.com/learn/learnreact)
- [React Website: Learn more](https://reactjs.org/community/courses.html)
- [React Youtube Course](https://www.youtube.com/watch?v=bMknfKXIFA8&t=2154s)
- [CRUD Method](https://www.freecodecamp.org/news/crud-operations-explained/)
- [Vite](https://vitejs.dev/guide/)
- [MySQL Workbench Installation](https://dev.mysql.com/downloads/workbench/)



> For visual learners, we'd recommend Youtube videos.
