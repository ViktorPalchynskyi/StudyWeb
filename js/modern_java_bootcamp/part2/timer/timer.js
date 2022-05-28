class Timer {
   constructor(duraionInput, startButton, stopButton, callbacks) {
      this.duraionInput = duraionInput;
      this.startButton = startButton;
      this.stopButton = stopButton;
      if (callbacks) {
         this.onStart = callbacks.onStart;
         this.onTick = callbacks.onTick;
         this.onComplete = callbacks.onComplete;
      }

      this.startButton.addEventListener('click', () => this.start())
      this.stopButton.addEventListener('click', () => this.stop())
   }  

   start() {
      if (this.onStart) this.onStart(this.timeRemaining);
      this.tick();
      this.intervalId = setInterval(() => this.tick(), 20);
   };

   tick() {
      if (this.timeRemaining <= 0) {
         this.stop();
         if (this.onComplete) this.onComplete();
      } else {
         this.timeRemaining = this.timeRemaining - .02;
         if (this.onTick) this.onTick(this.timeRemaining);
      };
   };

   stop() {
      clearInterval(this.intervalId);
   };

   get timeRemaining() {
      return parseFloat(this.duraionInput.value);
   }

   set timeRemaining(time) {
      this.duraionInput.value = time.toFixed(2);
   }
}
