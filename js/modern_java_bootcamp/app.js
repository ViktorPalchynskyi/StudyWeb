const btn = document.querySelector('button');

// setTimeout(() => {
//    btn.style.transform = `translateX(100px)`
//    setTimeout(() => {
//       btn.style.transform = `translateX(200px)`
//    }, 1 * 1000);
// }, 1 * 1000);

const moveX = (element, amount, delay) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const bodyBoundary = document.body.clientWidth;
         const currentRight = btn.getBoundingClientRect().right;
         const currentLeft = btn.getBoundingClientRect().left;
         if(currentRight + amount > bodyBoundary) {
            reject('GG WP');
         } else {
            element.style.transform = `translateX(${currentLeft + amount}px)`;
            resolve();
         }
      }, delay);
   });   
};

moveX(btn, 500, 1000)
   .then(() => {
      return moveX(btn, 500, 1000);
   })
   .then(() => console.log('second'))
   .catch(() => alert('GG WP'));