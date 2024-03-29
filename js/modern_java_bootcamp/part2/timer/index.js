const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = 2 * Math.PI * circle.getAttribute('r');
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, stopButton, {
   onStart(totalDuration) {
      duration = totalDuration;
   },
   onTick(timeRemaining) {

      circle.setAttribute('stroke-dashoffset', 
         perimeter * timeRemaining / duration - perimeter
      );
   },
   onComplete() {
      console.log('Completed');
   }
});