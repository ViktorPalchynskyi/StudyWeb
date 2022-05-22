const warriorsGames = [{
   awayTeam: {
     team: 'Golden State',
     points: 119,
     isWinner: true
   },
   homeTeam: {
     team: 'Houston',
     points: 106,
     isWinner: false
   }
 },
 {
   awayTeam: {
     team: 'Golden State',
     points: 105,
     isWinner: false
   },
   homeTeam: {
     team: 'Houston',
     points: 127,
     isWinner: true
   }
 },
 {
   homeTeam: {
     team: 'Golden State',
     points: 126,
     isWinner: true
   },
   awayTeam: {
     team: 'Houston',
     points: 85,
     isWinner: false
   }
 },
 {
   homeTeam: {
     team: 'Golden State',
     points: 92,
     isWinner: false
   },
   awayTeam: {
     team: 'Houston',
     points: 95,
     isWinner: true
   }
 },
 {
   awayTeam: {
     team: 'Golden State',
     points: 94,
     isWinner: false
   },
   homeTeam: {
     team: 'Houston',
     points: 98,
     isWinner: true
   }
 },
 {
   homeTeam: {
     team: 'Golden State',
     points: 115,
     isWinner: true
   },
   awayTeam: {
     team: 'Houston',
     points: 86,
     isWinner: false
   }
 },
 {
   awayTeam: {
     team: 'Golden State',
     points: 101,
     isWinner: true
   },
   homeTeam: {
     team: 'Houston',
     points: 92,
     isWinner: false
   }
 }
]

const makeChart = (games, targetTeam) => {
   const ulParent = document.createElement('ul');
   const title = document.createElement('h1');
   title.innerText = targetTeam;
   ulParent.prepend(title);
   for (const game of games) {
      const gameLi = document.createElement('li'); 
      gameLi.innerHTML = getScoreLine(game);
      gameLi.classList.add(checkWinner(game, targetTeam) ? 'win' : 'loss');
      ulParent.appendChild(gameLi);
   }
   return ulParent;
};

const getScoreLine = ({ awayTeam, homeTeam }) => {
   const { team: hTeam , points: hPoints } = homeTeam;
   const { team: aTeam , points: aPoints } = awayTeam;
   const teamNames = `${ aTeam } @ ${ hTeam }`;
   let scoreLine;
   aPoints > hPoints ? 
         scoreLine = `<b>${ aPoints }</b>-${ hPoints }`: 
         scoreLine = `${ aPoints }-<b>${ hPoints }</b>`;
   return `${ teamNames } ${scoreLine }`;
};

const checkWinner = ({ awayTeam, homeTeam }, targetTeam) => {
   const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
   return target.isWinner;
}

document.body.appendChild(makeChart(warriorsGames, 'Houston'));
document.body.appendChild(makeChart(warriorsGames, 'Golden State'));