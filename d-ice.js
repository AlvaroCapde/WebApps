function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }


const randomNumber1 = getRandomIntInclusive(1,6);
const randomNumber2 = getRandomIntInclusive(1,6);
let diceImg1,diceImg2;
console.log(randomNumber1)
console.log(randomNumber2)
switch(randomNumber1){
    case 1: diceImg1 = '/images/dice1.png'; break;
    case 2: diceImg1 = '/images/dice2.png'; break;
    case 3: diceImg1 = '/images/dice3.png'; break;
    case 4: diceImg1 = '/images/dice4.png'; break;
    case 5: diceImg1 = '/images/dice5.png'; break;
    case 6: diceImg1 = '/images/dice6.png'; break;
}
switch(randomNumber2){
    case 1: diceImg2 = '/images/dice1.png'; break;
    case 2: diceImg2 = '/images/dice2.png'; break;
    case 3: diceImg2 = '/images/dice3.png'; break;
    case 4: diceImg2 = '/images/dice4.png'; break;
    case 5: diceImg2 = '/images/dice5.png'; break;
    case 6: diceImg2 = '/images/dice6.png'; break;
}
$(".img1").attr("src",diceImg1);
$(".img2").attr("src",diceImg2);

const winnerText = randomNumber1 != randomNumber2 ? (randomNumber1 > randomNumber2 ? 'Player 1 Wins!' : 'Player 2 Wins!') : 'Its a tie!'
$("h1").text(winnerText)



