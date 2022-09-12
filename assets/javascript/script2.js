var hiScoresList = JSON.parse(localStorage.getItem('hiScores')) || []
var score = localStorage.getItem('score')
var hiScore = document.querySelector('.highscore')
var userInitials = prompt('Enter your initials')
var userScore = userInitials + ' : ' + score
hiScoresList.push(userScore)
localStorage.setItem ('hiScores', JSON.stringify(hiScoresList)) 
localStorage.setItem('userInitials', userInitials)

for (let i = 0; i < hiScoresList.length; i++) {
  var li = document.createElement('li')
  li.textContent = hiScoresList[i]
  hiScore.appendChild(li)
  
}