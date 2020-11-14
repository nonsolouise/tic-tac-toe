const player1 = 'player 2';
const player2 = 'player 1';

let activePlayer = player1;


const next = (target) => {

   if(activePlayer === player1) {
      cells[target].textContent = 'x';
      activePlayer = player2;
      return;

   } else {
      cells[target].textContent = 'o';
      activePlayer = player1;
      return;
   }
};

const checkWinner = () => {
   if( cells.cell1.textContent === cells.cell2.textContent && cells.cell1.textContent === cells.cell3.textContent && cells.cell2.textContent === cells.cell3.textContent && cells.cell1.textContent !== '' && cells.cell2.textContent !=='' & cells.cell3.textContent !== '') {
      console.log('we have a winner');
      return true;
   }else if( cells.cell4.textContent === cells.cell5.textContent && cells.cell4.textContent === cells.cell6.textContent && cells.cell5.textContent === cells.cell6.textContent && cells.cell4.textContent !== '' && cells.cell5.textContent !=='' & cells.cell6.textContent !== '') {
      console.log('another winnnnerrr!!!!!');
      return true;
   }else if(cells.cell7.textContent === cells.cell8.textContent && cells.cell7.textContent === cells.cell9.textContent && cells.cell8.textContent === cells.cell9.textContent && cells.cell7.textContent !== '' && cells.cell8.textContent !=='' & cells.cell9.textContent !== '') {
      console.log('more wininiggggsssssss');
      return true;
   }else if(cells.cell1.textContent === cells.cell4.textContent && cells.cell1.textContent === cells.cell7.textContent && cells.cell4.textContent === cells.cell7.textContent && cells.cell1.textContent !== '' && cells.cell4.textContent !== '' && cells.cell7.textContent !== '') {
      console.log('testing out my code');
      return true;
   }else if(cells.cell2.textContent === cells.cell5.textContent && cells.cell2.textContent === cells.cell8.textContent && cells.cell5.textContent === cells.cell8.textContent && cells.cell2.textContent !=='' & cells.cell5.textContent !=='' && cells.cell8.textContent !=='') {
      console.log('more wins to my elbow');
      return true;
   }else if(cells.cell3.textContent === cells.cell6.textContent && cells.cell3.textContent === cells.cell9.textContent && cells.cell6.textContent === cells.cell9.textContent & cells.cell3.textContent !== '' & cells.cell6.textContent !== '' & cells.cell9.textContent !== '') {
      console.log('i can not just help all these wins');
      return true;
   }else if(cells.cell1.textContent === cells.cell5.textContent && cells.cell1.textContent === cells.cell9.textContent && cells.cell5.textContent === cells.cell9.textContent & cells.cell1.textContent !== '' & cells.cell5.textContent !== '' & cells.cell9.textContent !== '') {
      console.log('omo nonso you sabi play ohh, well done!')
      return true;
   }else if(cells.cell3.textContent === cells.cell5.textContent && cells.cell3.textContent === cells.cell7.textContent && cells.cell5.textContent === cells.cell7.textContent & cells.cell3.textContent !== '' & cells.cell5.textContent !== '' & cells.cell7.textContent !== '') {
      console.log('phewwwww, i am a good developer sha');
      return true;
   }
   // else {
   //    console.log('it was a damn draw! sad face. nobody won!');
   // }
} 

const cells = {
   cell1: document.getElementById('cell1'),
   cell2: document.getElementById('cell2'),
   cell3: document.getElementById('cell3'),
   cell4: document.getElementById('cell4'),
   cell5: document.getElementById('cell5'),
   cell6: document.getElementById('cell6'),
   cell7: document.getElementById('cell7'),
   cell8: document.getElementById('cell8'),
   cell9: document.getElementById('cell9'),
}

cells.cell1.addEventListener('click', (e) => {
   console.log('i was clicked once');
   console.log(e.target);
   const target = e.target.id;
   console.log(target);
   next(target);
   const winner = checkWinner();

   if(winner) {
      console.log(winner);
   }else {
      console.log('ooops no winner');
   }   
},{once: true});


cells.cell2.addEventListener('click', (e) => {
   console.log('i was clicked once');
   console.log(e.target);
   const target = e.target.id;
   console.log(target);
   next(target);
   const winner = checkWinner();

   if(winner) {
      console.log(winner);
   }else {
      console.log('ooops no winner');
   }   
},{once: true});


cells.cell3.addEventListener('click', (e) => {
   console.log('i was clicked once');
   console.log(e.target);
   const target = e.target.id;
   console.log(target);
   next(target);
   const winner = checkWinner();

   if(winner) {
      console.log(winner);
   }else {
      console.log('ooops no winner');
   }   
},{once: true});


cells.cell4.addEventListener('click', (e) => {
   console.log('i was clicked once');
   console.log(e.target);
   const target = e.target.id;
   console.log(target);
   next(target);
   const winner = checkWinner();

   if(winner) {
      console.log(winner);
   }else {
      console.log('ooops no winner');
   }   
},{once: true});


cells.cell5.addEventListener('click', (e) => {
   console.log('i was clicked once');
   console.log(e.target);
   const target = e.target.id;
   console.log(target);
   next(target);
   const winner = checkWinner();

   if(winner) {
      console.log(winner);
   }else {
      console.log('ooops no winner');
   }   
},{once: true});


cells.cell6.addEventListener('click', (e) => {
   console.log('i was clicked once');
   console.log(e.target);
   const target = e.target.id;
   console.log(target);
   next(target);
   const winner = checkWinner();

   if(winner) {
      console.log(winner);
   }else {
      console.log('ooops no winner');
   }   
},{once: true});


cells.cell7.addEventListener('click', (e) => {
   console.log('i was clicked once');
   console.log(e.target);
   const target = e.target.id;
   console.log(target);
   next(target);
   const winner = checkWinner();

   if(winner) {
      console.log(winner);
   }else {
      console.log('ooops no winner');
   }   
},{once: true});


cells.cell8.addEventListener('click', (e) => {
   console.log('i was clicked once');
   console.log(e.target);
   const target = e.target.id;
   console.log(target);
   next(target);
   const winner = checkWinner();

   if(winner) {
      console.log(winner);
   }else {
      console.log('ooops no winner');
   }   
},{once: true});


cells.cell9.addEventListener('click', (e) => {
   console.log('i was clicked once');
   console.log(e.target);
   const target = e.target.id;
   console.log(target);
   next(target);
   const winner = checkWinner();

   if(winner) {
      console.log('we have a winner yo!');
   }else {
      console.log('ooops no winner');
   }   
},{once: true});

// const player1 = 'x';
// const player2 = 'y';

// let activePlayer = player1;

// console.log(activePlayer === player1)
// activePlayer = player2;
// console.log(activePlayer === player1)