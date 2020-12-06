const compose = (...fns) =>
   (arg) =>
   fns.reduce(
   (composed, f) => f(composed),
   arg
 );

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

const serializeClickTime = date => (
   {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
   }
);

const civilianHours = clockTime => (
   {
      ...clockTime,
      hours: (clockTime.hours > 12) ? clockTime.hours - 12: clockTime.hours
   }
);

const appendAMPM = clockTime => (
   {
      ...clockTime,
      apmp: (clockTime.hours >= 12) ? 'PM' : 'AM' 
   }
);

const display = target => time => target(time);

const formatClock = format => time => format.replace('hh', time.hours)
                                            .replace('mm',time.minutes)
                                            .replace('ss', time.seconds)
                                            .replace('tt', time.apmp);

const prependZero = key => clockTime => (
   {
      ...clockTime,
      [key]: (clockTime[key] < 10) ? '0' + clockTime[key]: clockTime[key]
   }
);

const converToCivilianTime = clockTime => 
   compose(
      appendAMPM,
      civilianHours
   )(clockTime);

const dounleDigits = civilianTime => 
   compose(
      prependZero('hours'),
      prependZero('minutes'),
      prependZero('seconds'),
   )(civilianTime);

const startTicking = () => 
   setInterval(
      compose(
         clear,
         getCurrentTime, 
         serializeClickTime,
         converToCivilianTime,
         dounleDigits,
         formatClock('hh:mm:ss tt'), 
         display(log)
      ),
      oneSecond()
   );

startTicking();