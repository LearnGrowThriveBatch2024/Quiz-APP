
# React Quiz App Assignment

## Objective:
Create an interactive quiz application using React that allows users to answer multiple-choice questions and view their score at the end.

---

## Requirements:
### 1. Question Display:
- The app should display one question at a time.
- Each question should have multiple-choice answers presented as radio buttons.
- Only one answer can be selected per question.

### 2. Navigation Between Questions:
- Include a "Submit" button that allows the user to submit their answer for the current question.
- Upon submission:
  - If the current question is not the last one, navigate to the next question.
  - If it is the last question, display the final score.

### 3. Scoring System:
- Keep track of the number of correct answers.
- Display the final score as "You scored X out of Y!" where `X` is the number of correct answers and `Y` is the total number of questions.

### 4. State Management:
Use React `useState` to manage the following:
- **Current Question Index:** Keeps track of which question is being displayed.
- **Selected Answer:** Temporarily stores the user's selected answer before submission.
- **Score:** Tracks the number of correct answers.
- **Quiz Completion:** Determines if the quiz is completed and the score should be displayed.

---

## App Structure:
1. **Main Component (App):**
   - Manages the quiz state.
   - Handles transitions between questions and tracks the score.
   - Displays the final score at the end of the quiz.

2. **Question Component:**
   - Receives the current question data (text and options) as props.
   - Displays the question and its options as radio buttons.
   - Sends the selected answer back to the parent component through an event handler.

---

## Functionalities to Implement:
### Basic Features:
1. Dynamically load questions from an array of question objects.
   - Each question object should include:
     - `question` (string): The question text.
     - `options` (array of strings): The possible answers.
     - `answer` (string): The correct answer.

   Example Question Object:
   ```javascript
   const questions = [
     {
       question: "What is the capital of India?",
       options: ["Maharashtra", "Gujarat", "Karnataka", "Delhi"],
       answer: "Delhi"
     }
   ];
