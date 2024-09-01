const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let index=0
let right=0,
    wrong=0;
let total=quizData.length
const queBox = document.getElementById("queBox")
const options = document.querySelectorAll(".options")
 
const loadQuestions = () =>{
    if (index == total){
        return endQuiz()
    }
    reset()
    const data = quizData[index] 
    queBox.innerText = `${index+1}) ${data.question}`
    options[0].nextElementSibling.innerText = `${data.a}`
    options[1].nextElementSibling.innerText = `${data.b}`
    options[2].nextElementSibling.innerText = `${data.c}`
    options[3].nextElementSibling.innerText = `${data.d}`
}

const submitQuiz = () =>{
    const data = quizData[index]
    let ans = getAnswer()
    
    if (ans == data.correct){
        right+=1
    }else{
        wrong+=1
    }
    index++
    loadQuestions()
}

const getAnswer = () =>{
    let answer="";
    options.forEach((input) =>{
        if(input.checked){
            answer = input.value
            // return input.value; foreach loop will always return undefined
        }
    })
    return answer
}

const reset = () =>{
    options.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz = () =>{
    const box = document.getElementById("box").innerHTML=`<h3>Thank you for playing the quiz</h3>
                                                         <h2> ${right}/${total} are correct`
}

loadQuestions()