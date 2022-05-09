class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

class SinglyLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   push(val) {
      const newNode = new Node(val);
      if (!this.head) {
         this.head = newNode;
         this.tail = this.head;
      } else {
         this.tail.next = newNode;
         this.tail = newNode;
      }
      this.length++;
      return this;
   }

   pop() {
      if (!this.head) return;
      let current = this.head;
      let newTail = current;
      while(current.next) {
         newTail = current; 
         current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (!this.length) {
         this.head = null;
         this.tail = null;
      }
      return current;
   }

   shift() {
      if (!this.head) return;
      const oldHead = this.head;
      this.head = this.head.next;
      this.length--;
      if (!this.length) {
         this.tail = null;
      }
      return oldHead;
   }

   unshift(value) {
      const newNode = new Node(value);
      if (!this.head) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         newNode.next = this.head;
         this.head = newNode;
      }
      this.length++;
      return this;
   }

   get(index = 0) {
      if (index >= this.length || index < 0) return null;
      let searchNode = this.head;
      for (let counter = 0; counter < this.length; counter++) {
         if (counter === index) return searchNode;
         searchNode = searchNode.next;
      }
   }

   set(val ,index = 0) {
      let foundNode = this.get(index);
      if (!foundNode) return false;
      foundNode.val = val;
      return true;
   }

   insert(val, index = 0) {
      if (index < 0 || index > this.length) return false;
      if (index === this.length) return !!this.push(val);
      if (index === 0) return !!this.unshift(val);
      const newNode = new Node(val);
      const pre = this.get(index - 1);
      newNode.next = pre.next;
      pre.next = newNode;
      return true;
   }

   remove(index = 0) {
      if (index < 0 || index >= this.length) return;
      if (index === this.length - 1) return this.pop();
      if (index === 0) return this.shift();
      const pre = this.get(index - 1);
      const removedNode = pre.next; 
      pre.next = removedNode.next;
      this.length--;
      return removedNode;
   }

   reverse() {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let next = null;
      let prev = null;
      for (let i = 0; i < this.length; i++) {
         next = node.next;
         node.next = prev;
         prev = node;
         node = next;
      }
      return this;
   }

   rotate(index) {
   if (index < 0 || index >= this.length) return;
   let node = this.head;
   this.head = this.tail;
   this.tail = node;
   let next = null;
   let prev = null;
   let count = 1;
   while(index !== count) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      count++;
   }
   console.log('next', node);
   return this;
  }
}

const first = new SinglyLinkedList();
first.push('Viktor');
// first.push('Misha');
first.push('Tanya');


// console.log('shiftItem', first.shift());
// console.log('popItem', first.pop());
// console.log('popItem', first.pop());
first.push('Lena');
// console.log('set', first.set('Lilya', 1));
// console.log('list', first);
// console.log('insert', first.insert('Sasha', 4));
// console.log('remove', first.remove(1));
// console.log('list', first);
console.log('rotate', first.rotate(1));
// console.log('Lena', first);
// console.log('Tanya', first.next);
// console.log('Viktor', first.next.next);


// console.log('get', first.get(1));
