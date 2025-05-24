// local data
const reviews = [
    {
      id: 1,
      name: 'Serious Vegas',
      job: 'JUDGES YOU',
      img: './photos/1.jpeg',
      text: "Be careful what you do.",
    },
    {
      id: 2,
      name: 'Hungry Vegas',
      job: 'WANTS SNACKS',
      img: './photos/2.jpeg',
      text: 'Your food is now his food. Feed him or face the consequences',
    },
    {
      id: 3,
      name: 'Confused Vegas',
      job: 'IS PROCESSING...',
      img: './photos/3.jpeg',
      text: 'He’s not sure what just happened. Neither are you.',
    },
    {
      id: 4,
      name: 'Sleepy Sheriff Vegas',
      job: 'NEEDS A NAP',
      img: './photos/4.jpeg',
      text: 'Justice can wait. Dreaming of tuna and law enforcement. ',
    },
  ];

  //select items
const img = document.getElementById('cat-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function(){
   showCat();
});

function showCat(){
    const item = reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}
nextBtn.addEventListener('click', function(){
currentItem++;
if(currentItem>reviews.length-1){
    currentItem=0;
}
showCat(currentItem);
});
prevBtn.addEventListener('click', function(){
currentItem--;
if(currentItem<0){
    currentItem=reviews.length-1;
}
showCat(currentItem);
});
randomBtn.addEventListener('click', function(){
currentItem= Math.floor(Math.random() * reviews.length);
showCat(currentItem);
});