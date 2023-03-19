function loadScript(src, callback) {
   const script = document.createElement('script');
   script.src = src;
   script.onload = () => callback(null,script);
   script.onerror = () => callback(new Error('Ty lox'));
   document.head.append(script);
}



loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (error,  script) => {
   if (error) {
      console.log(error);
   } 
   console.log('script', script.src);
   loadScript('./testScript.js', (error,  script) => {
       if (error) {
      console.log(error);
   } 
      console.log('script', script);
      console.log('a', a);
   });
});