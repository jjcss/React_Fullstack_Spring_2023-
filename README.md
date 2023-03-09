
<!-- # Intro to React -->

<img src="https://i.imgur.com/JybZuXd.png" alt="drawing" width="100"/> <img src="https://i.imgur.com/Bzkqs5I.png" alt="drawing" width="100"/>

# Computer Science Society Club

## Table of Contents
- [Introduction](#Introduction)
- [Pre Requisites](#Pre-Requisites)
- [React Demo](#React-Demo)
    - [Pre-Demo](#Pre-Demo)
    - [Review Code Template](#Review-Code-Template)
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
- Connect our React Project to a backend server
- CRUD Method

**Final Product**:
.... gif here....

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
Take a few minutes to review the code in Visual Studio code. What is in the file, is the **front-end** of our website. The main files you should take a look at is the `App.jsx` & `App.css` files. As you can see, we will be building a movie review and movie name list application. Currently, since we have no backend, nothing happens 

## Hello World

**Description**: In this part of the demo we will start off by learning the fundamental react code that allows us to display and render elements.

0) Let's head over to our `index.js` file, located in the **`src`** folder. The **`index.js`** file is important as this is where we are rendering our React code that displays in the **root** class element in the `index.html` file in the **`public`** folder. Once in this file, delete everything on this file and copy & paste the code below.

    ```JSX
    import React from "react";
    import ReactDOM from "react-dom/client";

    const htmlContainer = document.getElementById("root");
    const root = ReactDOM.createRoot(htmlContainer);

    root.render(<h1>Hello World!</h1>)
    ```
    This code will display **`Hello World!`** in your browser.
    <details>
        <summary>Hello World in Browser</summary>
        <img src="https://i.imgur.com/7dO5ZGo.png" alt="drawing" width="500" height="200"/>
    </details>

1) Let's look at the first line of code: **`import React from "react";`**. This Line isn't really necessary, but it's good practice to include it to let your code editor import the React library into this file. 

    
2) In the next line: **`import ReactDOM from "react-dom/client";`**, we are importing the **ReactDOM** library, which will allow us to create a **Root** and allow us to **render** a React element into the **Dom**. In simplified terms, this line allows us to render an **HTML** file.

3) Next up, we have the following line: **`const htmlContainer = document.getElementById("root");`**. 
    
    Going from left ----> right: 
    1) we first have `const htmlContainer`. We are creating a constant variable, meaning we can't update this variable to anything else. 
    2) After that we have `= document.getElementById("root")`. For those familiar with HTML, we are basically saying, select an HTML file (**index.html** in this case) and locate the element that has the **"root"** class name. 
    3) If you go back to your **index.html** file, try to locate the root file. To sum up, this line is creating a variable that is accessing the **index.html** file that has the **root** class name.

4) Next up, we have the following line: **`const root = ReactDOM.createRoot(htmlContainer);`**. 

    Going from left ----> right: 
    1) we first have `const root`. We are creating a constant variable named root, meaning we can't update this variable to anything else. 
    2) After that, we have `= ReactDOM.createRoot(htmlContainer);`. Here we are using the ReactDOM Module we imported in the second line of this file. Then, we access the function **createRoot()**, which takes in **htmlContainer** that we initialized in the previous line. In simple terms, we are using **ReactDOM** to create a root (or connection) to the HTML file (htmlContainer).

5) Finally, we have this line: **`root.render(<h1>Hello World!</h1>)`**.
    
    Using the **root** variable we defined earlier we are using the **render** function to render what is known as **JSX** elements, and what looks basically the same as **HTML** elements.
 
## JSX (similar to HTML elements)

1) JSX means **JavaScript Syntax Extension** or **JavaScript XML** as some like to put it. In other words, JSX is an HTML-like syntax that you can use in React.

    For example, in the **`root.render(<h1>Hello World!</h1>)`**, we are rendering what looks very similar to a **h1** HTML tag. They have the same name but aren't really the same thing. 
    
    Let's try another example of JSX. Copy the code below inside of **root.render()**:
    
    ```
    root.render(
        <div>
          <h1>Hello World!</h1>
          <h1>Hi Again</h1>
        </div>
    )
    ```
    <details>
        <summary>Example in Browser</summary>
        <img src="https://i.imgur.com/NEvEnhq.png" alt="drawing" width="500" height="200"/>
    </details>
    Here we have a **div** JSX element (container),  and a pair of **h1** JSX elements. They have the same functionality as regular HTML elements but are not to be mistaken of being the same.
    
    Let's try another example of JSX code. Enter this line of code:
    
    ```
    root.render(
        <>
          <h3>Hello World!</h3>
          <h3>Hi Again</h3>
        </>

    )
    ```
    <details>
        <summary>Example in Browser</summary>
        <img src="https://i.imgur.com/uFP8m0X.png" alt="drawing" width="500" height="200"/>
    </details>
    
    The only difference here is the **<>** and **</>** tag. This tag is known as a **fragment tag**. When rendering JSX elements, you must always include your code inside a **fragment tag** because without it, you won't be able to render more than one tag in **React**. Try to test this out by removing the fragment tag from your code. Your terminal will give you an error saying *"Adjacent elements must be wrapped...."*. 
    

## The End
**Summary**: Congratulations on .....

---

# Continue Learning About React
- [11-Hour React Free Course](https://scrimba.com/learn/learnreact)
- [React Website: Learn more](https://reactjs.org/community/courses.html)
- [React Youtube Course](https://www.youtube.com/watch?v=bMknfKXIFA8&t=2154s)



> For visual learners, we'd recommend Youtube videos.
