/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "A differential pressure transmitter is calibrated 0 to 80 inches of water and transmits a 4 to 20 mA dc signal. This transmitter is placed across an orifice plate which is sized to create 80 inches of water differential 6 gallons per minute. What is the flow rate when the signal is 13 mA dc?",  ///// Write the question inside double quotes
      answers: {
        a: "4.5 gpm",                  ///// Write the option 1 inside double quotes
        b: "3.9 gpm",                  ///// Write the option 2 inside double quotes
        c: "3.4 gpm",                  ///// Write the option 3 inside double quotes
        d: "4.9 gpm"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
      question: "For the equipment described in the preceding question, what will the signal be if the flow rate is 4 gpm?",  ///// Write the question inside double quotes
      answers: {
        a: "13.3 mA dc",                  ///// Write the option 1 inside double quotes
        b: "8.9 mA dc",                  ///// Write the option 2 inside double quotes
        c: "11.2mAdc",                  ///// Write the option 3 inside double quotes
        d: "6.7mA dc"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

	{
      question: "Assume the line used in Questions 1 and 2, is a 1/2-inch schedule 40 pipe (IV = 0.622 inches). find the orifice bore used to satisfy the conditions given if the measured fluid is water at 60 Deg F",
      answers: {
        a: "0.352 inches",
        b: "0.190 inches",
        c: "0.556 inches",
        d: "0.414 inches"
      },
      correctAnswer: "a"
    },
	
	{
      question: "The best choice of orifice taps in the preceding problem would be:",
      answers: {
        a: "flange taps",
        b: "corner taps",
        c: "vena-contracta taps",
        d: "pipe taps"
      },
      correctAnswer: "b"
    },
	
	{
      question: "The output signal or reading of a magnetic flowmeter is:",
      answers: {
        a: "Proportional to volumetric flow rate",
        b: "Proportional to the square root of volumetric flow rate",
        c: "Inversely proportional to volumetric flow rate",
        d: "Proportional to the square of volumetric flow rate"
      },
      correctAnswer: "d"
    },
	///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////