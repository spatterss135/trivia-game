let userName = window.prompt('What is your name?')
let cont = document.querySelector('.container')
let questionBox = document.querySelector('.question')
let buttonA = document.querySelector('.btn-1')
let buttonB = document.querySelector('.btn-2')
let buttonC = document.querySelector('.btn-3')
let buttonD = document.querySelector('.btn-4')
const allButtons = document.querySelectorAll('.btn')
let scoreBox = document.querySelector('#score')
let nameBox = document.querySelector('#name')
i= 0
score = 0
questionBox.append(questions[i].text)
scoreBox.append(score)
nameBox.append(userName)


buttonA.addEventListener("click", e => {
    let userAnswer = 'A'
    if (userAnswer === questions[i].correctAnswer){
        score++
        scoreBox.innerHTML = score
        cont.classList.add('glowBoy')
        // cont.classList.remove('glowBoy')
    }
})
buttonB.addEventListener("click", e => {
    let userAnswer = 'B'
    if (userAnswer === questions[i].correctAnswer){
        score++
        scoreBox.innerHTML = score
        cont.classList.add('glowBoy')
        // cont.classList.remove('glowBoy')
    }
})
buttonC.addEventListener("click", e => {
    let userAnswer = 'C'
    if (userAnswer === questions[i].correctAnswer){
        score++
        scoreBox.innerHTML = score
        cont.classList.add('glowBoy')
        // cont.classList.remove('glowBoy')
        
    }
    
})
buttonD.addEventListener("click", e => {
    let userAnswer = 'D'
    if (userAnswer === questions[i].correctAnswer){
        score++
        scoreBox.innerHTML = score
        cont.classList.add('glowBoy')
    //     cont.classList.remove('glowBoy')
 }
})

for (let j=0; j<4; j++){
    allButtons[j].addEventListener('click', e => {
        i++
        if (i < questions.length) {
        questionBox.innerHTML = questions[i].text
        }
        else {
            window.alert('DONE!')
            addScore(userName, score)
        }
    })
}

const addScore = (userName, score) => {
let serializedGames = localStorage.getItem('games')
let games;
if(serializedGames === null){
    games = []
}
else {
    games = JSON.parse(serializedGames)
}
let game = {
    user: userName,
    userScore: score
}
games.push(game)
serializedGames = JSON.stringify(games)
localStorage.setItem('games', serializedGames)

}