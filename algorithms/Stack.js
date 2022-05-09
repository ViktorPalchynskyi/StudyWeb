class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Stack {
   constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
   }
   push(value) {
      const newNode = new Node(value);
      if (!this.size) {
         this.first = newNode;
         this.last = newNode;
      } else {
         newNode.next = this.first;
         this.first = newNode;         
      }
      return ++this.size;
   }
   pop() {
      if(!this.first) return null;
      const prevFirst = this.first;
      if (this.first === this.last) {
         this.last = null;
      }
      this.first = this.first.next;
      prevFirst.next = null;
      this.size--;
      return prevFirst.value;
   }
}

const stack = new Stack();
stack.push('Viktor');
console.log('Misha',stack.push('Misha'));
stack.push('Tanya');
console.log('pop', stack.pop());
console.log('pop', stack.pop());
console.log('pop', stack.pop());
console.log(stack);