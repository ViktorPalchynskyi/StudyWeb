const el = document.querySelector('h1');
const btn = document.querySelector('button');

el.addEventListener('mouseover', function(){this.style.color = 'coral'});
el.addEventListener('mouseout', function(){this.style.color = 'black'});

btn.addEventListener('mouseover', function() {
   const x = Math.floor(Math.random() * (window.innerWidth));
   const y = Math.floor(Math.random() * (window.innerHeight));
   this.style.transform = `translate(${x}px, ${y}px)`;
});


btn.addEventListener('click', function() {
   console.log('action');
   document.body.style.backgroundColor = 'green';
});

document.body.addEventListener('keypress', (event) => {
   if (event.key === 'c') return console.log('Ahhhh Shit. Here we go again.') 
});

document.body.addEventListener('keydown', (event) => {
   if (event.key === 'j') return console.log('Ahhhh Shit. Fuck!.') 
});

document.body.addEventListener('keydown', (event) => {
   if (event.key === 'j') return console.log('Ahhhh Shiiiiit') 
});

const form = document.querySelector('#signup-form');
form.addEventListener('submit', function(event) {
   event.preventDefault();
   alert('Rem');
   console.dir(this);
})