var a = 'asdf';
var tmp = 'Omae wa mo shindeiru';

(function() {
   var a = 1;
   console.log('a inside', a);
   console.log('a global', window.a);
})(window);

(function(def) {
   def(window);
})(function def(global) {
   var tmp = 'Nani?';
   console.log('str inside', tmp);
   console.log('str global', global.tmp);
});
