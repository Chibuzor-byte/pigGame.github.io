/* 
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his round score  
-But, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/  
var roundScore, scores, activePlayer, gamePlaying;



init()


// document.querySelector('#current--' + activePlayer).textContent = dice;

document.querySelector('.btn--roll').addEventListener('click', function(){
    if (gamePlaying) {
            var dice = Math.floor(Math.random() * 6 + 1);
            document.querySelector('.dice').src = `dice-${dice}.png`;

        if (dice !== 1) {
            //add score
            roundScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = roundScore;
            document.querySelector('.dice').style.display = 'block';
        } else {
            //Next player
            nextPlayer();
            

            //document.querySelector('.player--0').classList.remove('player--active');
            //document.querySelector('player--1').classList.add('player--active')
        }
    } 
    
    
})

document.querySelector('.btn--hold').addEventListener('click', function(){
if (gamePlaying) {
    // update the score
        scores[activePlayer] += roundScore;
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
//when one wins
        if (scores[activePlayer] >= 20) {
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('active');
        document.querySelector('.dice').style.display = 'none';
        gamePlaying = false;
        } else {
        nextPlayer();
    }
}
    

})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = '0';
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none';
}



function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;


    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner'); 
    document.querySelector('.player--0').classList.add('player--active'); 
    
}

document.querySelector('.btn--new').addEventListener('click', init);






























// var scores, roundScores, activePlayer, dice;
// scores = [0,0];
// roundScores = 0;
// activePlayer = 0;
// document.querySelector('#current--' + activePlayer).textContent = dice;//setter

// document.getElementById('score--0').textContent = '0';
// document.getElementById('score--1').textContent = '0';
// document.getElementById('current--0').textContent = '0';
// document.getElementById('current--1').textContent = '0';


// document.querySelector('.btn--roll').addEventListener('click', function() {
//     // 1. Random number
//     var dice = Math.floor(Math.random() * 6) + 1;

//     //2. Display the result
//     var diceDOM = document.querySelector('.dice');
//     diceDOM.style.display = 'block';
//     diceDOM.src = 'dice-' + dice + '.png';
// //!== doesn't perform type coercion
//     //3. Update the rpund score If the called number was NOT a 1

//     if (dice !== 1) {
//         //Add score
//         roundScores += dice;
//         document.querySelector('#current--' + activePlayer).textContent = roundScores;
//     } else {
//         //Next player
//         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//         roundScores = 0;


//         document.getElementById
//     }
// } )

// document.querySelector('.btn--hold').addEventListener('click', function() {
    
// })//created and anonymous function






// var x = document.querySelector('#score--0').textContent;

