# 🧩 Quiz App – React Project

## 🚀 What I'm Building
Hey there! 👋  
I’m working on a **Quiz Application** using **React**. The idea is to create an interactive app where users can:

- Answer multiple-choice questions  
- Keep track of their score  
- See their results at the end  

I’m approaching this project in **sprints**, so each sprint adds new features and improvements gradually — just like in a real software development process.

---

## 🧭 Development Approach – Sprint-Based Learning
Here’s the thought process behind my approach:

- Each **sprint** has a clear goal or functionality.  
- By completing one sprint at a time, the app gradually becomes fully functional.  
- This method helps me learn **React step by step**, focusing on manageable tasks rather than everything at once.  

Think of it as building the app layer by layer — first the basics, then enhancements, and finally polish.

---

# 🧭 Sprint 1 – “Basic Quiz Player (User Side)”

## 🎯 Goal
For this first sprint, my goal was to make the app **fully functional at a basic level**. That means:

- Showing **one question at a time**  
- Providing **four options** for each question  
- Letting the user move to the **next question**  
- Showing a **final score screen** after all questions are answered  

This sets the foundation for everything else in future sprints.

---

## 🧱 Tasks I Completed

### 1. Setting Up the Project
First things first, I:

- Initialized a **React app** using JavaScript  
- Removed unnecessary boilerplate files to keep it clean  
- Created a `Quiz.js` component and linked it in `App.js`  

This gave me a clean starting point to focus only on the functionality I wanted.

---

### 2. Adding Quiz Data
Next, I created a simple **array of question objects** locally. Each object contains:

- `question`: The text of the question  
- `options`: An array of four possible answers  
- `answer`: The correct answer  

For example:

```js
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
];


This makes it easy to render questions dynamically in React.
```
---

### 3. Rendering the Quiz
Once I had the data, I displayed **one question at a time** on the screen. Each question shows **four clickable option buttons**.

Here’s what happens when a user clicks an option:

- The app checks if the answer is **correct** and **updates the score**.  
- Then it automatically moves to the **next question**.  

This creates a **smooth, interactive experience** without reloading the page.

---

### 4. Keeping Track of Score
To track progress, I:

- Stored the **score** in React **state**  
- Once all questions were answered, the app shows the **final score**  
- Added a **“Restart” button** so users can start over anytime  

This ensures the app is fully functional as a **basic quiz player**.

---

## 💡 End of Sprint 1
By completing this sprint, the app now:

- Shows **one question at a time**  
- Lets users **select answers**  
- Calculates and displays the **final score**  
- Allows users to **restart the quiz**  

