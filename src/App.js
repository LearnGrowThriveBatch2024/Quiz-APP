import React, { useState } from 'react';
import './App.css';
import Q_1 from './components/Q_1';
import Q_2 from './components/Q_2';
import Q_3 from './components/Q_3';
import Q_4 from './components/Q_4';
import Q_5 from './components/Q_5';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0); // State to track current question
  const [totalPoints, setTotalPoints] = useState(0); 
  const [submit, setSubmit] = useState(true);

  const handleCorrectAnswer = () => {
    setTotalPoints(totalPoints + 1); // Increment points by 1 for each correct answer
  };

  // Function to move to the next question
  const handleNextQuestion = () => {
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1); // Increment question index
      if(currentQuestion === 4){
        setSubmit(false);
      }
    } else {
      alert('Quiz completed!');
    }
  };


  return (
    <div className="App">
      {/* Render question based on currentQuestion state */}
      <h1>Total Points: {totalPoints}</h1>
      {currentQuestion === 0 && (
        <Q_1
          onCorrectAnswer={handleCorrectAnswer}
          option1={"A) Madrid"}
          option2={"B) Rome"}
          option3={"C) Paris"}
          option4={"D) Berlin"}
        />
      )}
      {currentQuestion === 1 && (
        <Q_2
          onCorrectAnswer={handleCorrectAnswer}
          option1={"A) Earth"}
          option2={"B) Jupiter"}
          option3={"C) Mars"}
          option4={"D) Venus"}
        />
      )}
      {currentQuestion === 2 && (
        <Q_3
          onCorrectAnswer={handleCorrectAnswer}
          option1={"A) H2O"}
          option2={"B) CO2"}
          option3={"C) O2"}
          option4={"D) N2"}
        />
      )}
      {currentQuestion === 3 && (
        <Q_4  
          onCorrectAnswer={handleCorrectAnswer}  
          option1={"A) Python"}
          option2={"B) JavaScript"}
          option3={"C) C++"}
          option4={"D) Java"}
        />
      )}
      {currentQuestion === 4 && (
        <Q_5
          onCorrectAnswer={handleCorrectAnswer}
          option1={"A) Charles Dickens"}
          option2={"B) J.K. Rowling"}
          option3={"C) William Shakespeare"}
          option4={"D) Mark Twain"}
        />
      )}
      {currentQuestion === 5 && (
        <h1>Thanks for Playing</h1>
      )}
      

      {/* Button to move to the next question */}
      { submit?     
        <button onClick={handleNextQuestion}>
          {currentQuestion < 4 ? 'Next Question' : 'Finish Quiz'}
        </button>
        :null
      }

    </div>
  );
}

export default App;
