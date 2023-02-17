const quizData = [
    {
        question: "which language runs in a web browser?",
        a:"java",
        b:"c",
        c:"python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "what does css stand for?",
        a:"central Style Sheets",
        b:"cascading style sheets",
        c:"cascading simple sheets",
        d:"Cars Suvs sailboats",
        correct: "b",
    },
    {
        question: "What does html stand for?",
        a:"hypertext markup language",
        b:"hypertext markdown language",
        c:"hyperloop machine language",
        d:"helicopters terminals motorboats lambos",
        correct: "a",
    },
    {
        question: "what year was javascript launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEL = document.querySelectorAll('.answer')
const questionEL = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document. getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    console.log(currentQuizData.question)
    questionEL.innertext = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers(){
    answerEL.forEach(answerEL => answerEL.checked = false)
}

function getselected() {
    let answer
    answerEL.forEach(answerEL => {
        if(answerEL.checked){
            answer= answerEL.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getselected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
            
        }
    }
})