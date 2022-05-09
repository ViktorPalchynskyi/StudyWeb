class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
   }
}

class DoublyLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   push(val) {
      const newNode = new Node(val);
      if (!this.head) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         newNode.prev = this.tail;
         this.tail.next = newNode;
         this.tail = newNode;
      }
      this.length++;
      return this;
   }
   pop() {
      if(!this.head) return;
      const currentTail = this.tail;
      if (this.length === 1) {
         this.head = null;
         this.tail = null;
      } else {
         this.tail = currentTail.prev;
         this.tail.next = null;
         currentTail.prev = null;
      }
      this.length--;
      return currentTail;
   }
   shift() {
      if (!this.length) return;
      const oldHead = this.head;
      if (this.length === 1) {
         this.head = null;
         this.tail = null;
      } else {
         this.head = oldHead.next;
         this.head.prev = null;
         oldHead.next = null;
      }
      this.length--;
      return oldHead;
   }
   unshift(val) {
      const newNode = new Node(val);
      if (!this.length) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         this.head.prev = newNode;
         newNode.next = this.head;
         this.head = newNode;
      }
      this.length++;
      return newNode;
   }  
   get(index) {
      if (index < 0 || index >= this.length) return;
      let count, current;
      if (index <= Math.floor(this.length / 2)) {
         count = 0;
         current = this.head;
         while(count !== index) {
            current = current.next;
            count++;
         }
      } else {
         count = this.length - 1;
         current = this.tail;
         while(count !== index) {
            current = current.prev;
            count--;
         }
      }
      return current;
   }
   set(index, val) {
      const node = this.get(index);
      if (!node) return false;
      node.val = val;
      return true;
   }
   insert(index, val) {
      if(index < 0 || index > this.length) return false;
      if(index === this.length) return !!this.push(val);
      if(index === 0) return !!this.unshift(val);

      const newNode = new Node(val);
      const prevNode = this.get(index - 1);
      const nextNode = prevNode.next; 

      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = newNode;
      nextNode.prev = newNode;
      this.length++;
      return true;
   }
   remove(index) {
      if(index < 0 || index >= this.length) return false;
      if(index === this.length) return this.pop();
      if(index === 0) return this.shift();

      const removeNode = this.get(index);
      const prevNode = removeNode.prev;
      const nextNode = removeNode.next;

      removeNode.next = null;
      removeNode.prev = null;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      this.length--;
      return removeNode;
   }
}

const loveList = new DoublyLinkedList();
loveList.push('Viktor').push('Tanya').push('Lena');
// console.log('shift', loveList.unshift('Misha'));
console.log('get', loveList.remove(0));
console.log('loveList', loveList);
