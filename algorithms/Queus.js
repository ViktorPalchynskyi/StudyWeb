class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class Queus {
   constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
   }
   enqueue(value) {
      const newNode = new Node(value);
      if (!this.size) {
         this.first = newNode;
         this.last = newNode;
      } else {
         this.last.next = newNode;
         this.last = newNode;         
      }
      return ++this.size;
   }
   dequeue() {
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

const queus = new Queus();
queus.enqueue('Viktor');
console.log('Misha',queus.enqueue('Misha'));
queus.enqueue('Tanya');
console.log('pop', queus.dequeue());
console.log('pop', queus.dequeue());
console.log('pop', queus.dequeue());
console.log(queus);