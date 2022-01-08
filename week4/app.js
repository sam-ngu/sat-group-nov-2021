const btnStart = document.getElementById("btn-start");
const landingPage = document.getElementById("landing-page");
const questionPage = document.getElementById("question-page");
const endGamePage = document.getElementById("end-game-page");
const highscorePage = document.getElementById("highscore-page");
const spanTimer = document.getElementById("span-timer");
const choicesList = document.getElementById("list-choices");
const questionTitle = document.getElementById("question-title");
const btnSubmitName = document.getElementById("btn-submit-name");
const inputPlayerName = document.getElementById("input-player-name");

let timeRemaining = 60; // 60 sec
spanTimer.textContent = timeRemaining;
let timerId;
let currentQuestion = 0;


function checkAnswer(event){
    event.preventDefault();

    // when the user click on the choice btn

    // check if user picked on the correct ans
    const isCorrect = event.target.getAttribute('data-is-correct') === 'true';


    console.log(isCorrect);


    

    // if correct
    if(isCorrect){
        // do nothing
    }else{
        // if wrong
        // deduct the time by 10 sec
        timeRemaining = timeRemaining - 10;
        // [maybe] show the user feedback

    }

    // move on to next question
    currentQuestion = currentQuestion + 1;
    // if no questions left, we will end the game
    if(currentQuestion >= questions.length){
        // end the game
        return endGame();
    }
    
    renderQuestion(currentQuestion);

}


function renderQuestion(questionIndex){

    // get the question from questions array
    const question = questions[questionIndex];

    // get the title, put in the dom
    const title = question.title;

    const choices = question.choices;


    questionTitle.textContent = title;

    // clear the existing li
    choicesList.textContent = "";

    // get the choices
    // loop thru
    for (let index = 0; index < choices.length; index++) {
        const choice = choices[index];

        // generate btn, put in the dom
        const li = document.createElement('li');
        const button = document.createElement('button')

        button.classList.add('btn-choice')

        // add an attribute to identify if is correct or not
        button.setAttribute('data-is-correct', choice.isAnswer)

        button.textContent = choice.title;
        button.addEventListener('click', checkAnswer);
        li.appendChild(button);

        choicesList.append(li);

    }



}

function endGame() {
    // stop the timer
    clearInterval(timerId);

    // hide the question page
    questionPage.classList.add("hide");
    // show the end game screen
    endGamePage.classList.remove("hide");
}

function startTimer() {
    // timer -- a ticking clock
    // every passing sec, we decrease the clock by one
    timerId = setInterval(function () {
        // timeRemaining--;
        timeRemaining = timeRemaining - 1;

        // when timeleft < 0
        if (timeRemaining < 0) {
            // end the game
            endGame();
        } else {
            spanTimer.textContent = timeRemaining;
        }
    }, 1000);
}

// when click on the start button
btnStart.addEventListener("click", function (eveht) {
    // hide the landing page
    landingPage.classList.add("hide");

    // show the first question
    questionPage.classList.remove("hide");

    // start the timer
    startTimer();

    
    renderQuestion(currentQuestion);
   
});

// end game screen
// when the user clicked on the submit button
btnSubmitName.addEventListener('click', function(event){

    const userInput = inputPlayerName.value;
    console.log(userInput)
    // if user didn't enter anything in the field
    if(userInput === ""){
        // (show them error msg under the input)
        alert('Plz enter something')
        // throw them an error
        throw "empty input";
    }

    
    // we want to save the user name to the highscore -- local storage

    // every hs -- username, score

})


// high score page
// grab the items from localstorage
// render as a list
