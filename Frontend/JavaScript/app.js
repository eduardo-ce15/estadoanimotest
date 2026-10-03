const welcomeScreen = document.getElementById("welcome-screen");
const questionsScreen = document.getElementById("questions-screen");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionNumber = document.getElementById("question-number");
const questionCategory = document.getElementById("question-category");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const progressFill = document.getElementById("progress-fill");

const resultsScreen = document.getElementById("results-screen");

const resultAnimal = document.getElementById("result-animal");
const resultCharacter = document.getElementById("result-character");
const resultProfile = document.getElementById("result-profile");

const resultPhrase =
    document.getElementById("result-phrase");

const resultVideo = 
    document.getElementById("result-video");

const positivePercentage =
    document.getElementById("positive-percentage");

const calmPercentage =
    document.getElementById("calm-percentage");

const tensionPercentage =
    document.getElementById("tension-percentage");

const lowPercentage =
    document.getElementById("low-percentage");


const positiveBar =
    document.getElementById("positive-bar");

const calmBar =
    document.getElementById("calm-bar");

const tensionBar =
    document.getElementById("tension-bar");

const lowBar =
    document.getElementById("low-bar");

const resultDescription =
    document.getElementById("result-description");

const resultMessage =
    document.getElementById("result-message");

const resultFactor =
    document.getElementById("result-factor");

const resultSelfPerception =
    document.getElementById("result-self-perception");

const restartButton =
    document.getElementById("restart-btn");

let currentQuestion = 0; 
let answers = [];

startButton.addEventListener("click", () => {
    welcomeScreen.classList.remove("active");
    questionsScreen.classList.add("active");

    currentQuestion = 0;

    answers = [];

    showQuestions();

});

function showQuestions() {
    const question = questions[currentQuestion];

    const totalQuestions = questions.length;

    questionNumber.textContent = 
        `Pregunta ${currentQuestion + 1} de ${totalQuestions}`;

    const progress = 
        ((currentQuestion + 1) / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;

    questionText.textContent = question.text;

    questionCategory.textContent = 
        getCategoryname(question);

    answersContainer.innerHTML = "";
    nextButton.disabled = true;

    if (question.type === "scale") {
        createScaleAnswers();
    }

    else if (question.type === "factor"){
        createMultipleChoiceAnswers(question.options);
    }

    else if (question.type === "self-perception"){
        createMultipleChoiceAnswers(question.options);
    }
}

function getCategoryname(question){
    
    if (question.type === "factor"){
        return "Reflexion";
    }

    if (question.type === "self-perception"){
        return "Autopercepcion";
    }

    switch (question.dimension) {
        case "positive":
            return "😊 Ánimo positivo";
        case "calm":
            return "🌿 Calma";
        case "tension":
            return "⚡ Tensión";
        case "low":
            return "🌧️ Ánimo bajo";
        default:
            return "🧠 Estado de ánimo";
    }
}
function createScaleAnswers() {
    scaleOptions.forEach(option => {
        const button = document.createElement("button");

        button.classList.add("answer-option");

        button.textContent = 
            `${option.value} — ${option.label}`;
        
        button.addEventListener("click", () => {
        
            selectAnswer(button, option.value);
        });

        answersContainer.appendChild(button);
    });
}

function createMultipleChoiceAnswers(options) {

    options.forEach((option, index) => {

        const button = document.createElement("button");

        button.classList.add("answer-option");

        button.textContent = option;


        button.addEventListener("click", () => {

            selectAnswer(button, index);

        });


        answersContainer.appendChild(button);

    });

}

function selectAnswer(button, value) { 
    const allButtons = 
        answersContainer.querySelectorAll(".answer-option"); 

    allButtons.forEach(item => { 
        item.classList.remove("selected"); });
    
    button.classList.add("selected"); 
    
    answers[currentQuestion] = value; 
    
    nextButton.disabled = false; 
}

nextButton.addEventListener("click", () => { 
    if (answers[currentQuestion] === undefined) { 
        return; 
    }  
    
    if (currentQuestion < questions.length - 1) { 
        currentQuestion++; 
        showQuestions(); 
    } 
    
    else { 
        finishQuestionnaire(); 
    } 
});

function finishQuestionnaire() {

    console.log("Respuestas:", answers);
    const result = generateResult(answers);

    console.log("Resultado:", result);

    questionsScreen.classList.remove("active");

    resultsScreen.classList.add("active");

    resultsScreen.classList.remove(
    "theme-positive",
    "theme-calm",
    "theme-tension",
    "theme-low"
    );

    resultsScreen.classList.add(
        `theme-${result.mainProfile}`
    );    

    resultAnimal.src =
    result.profile.image;

    resultAnimal.alt =
    result.profile.character;

    resultCharacter.textContent =
        result.profile.character;
    resultProfile.textContent =
        `${result.profile.emoji} ${result.profile.name}`;
    resultDescription.textContent =
        result.profile.description;

    resultPhrase.textContent =
    `"${result.profile.phrase}"`;

    resultVideo.src = 
    result.profile.video;

    const positive =
        result.percentages.positive;

    const calm =
        result.percentages.calm;

    const tension =
        result.percentages.tension;

    const low =
        result.percentages.low;

    positivePercentage.textContent =
        `${positive}%`;

    calmPercentage.textContent =
        `${calm}%`;

    tensionPercentage.textContent =
        `${tension}%`;

    lowPercentage.textContent =
        `${low}%`;

    positiveBar.style.width =
        `${positive}%`;

    calmBar.style.width =
        `${calm}%`;

    tensionBar.style.width =
        `${tension}%`;

    lowBar.style.width =
        `${low}%`;

    if (result.factor !== undefined) {

        const factorQuestion = questions[8];

        resultFactor.textContent =
            factorQuestion.options[result.factor];

    }

    if (result.selfPerception !== undefined) {
        const perceptionQuestion = questions[9];
        resultSelfPerception.textContent =
            perceptionQuestion.options[result.selfPerception];
    }
}

restartButton.addEventListener("click", () => {

    resultsScreen.classList.remove("active");

    welcomeScreen.classList.add("active");

    currentQuestion = 0;

    answers = [];

});
