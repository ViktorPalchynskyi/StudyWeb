class Node {
   constructor(value, priority) {
      this.value = value;
      this.priority = priority;
   }
}

class PriorityQueus {
   constructor() {
      this.values = [];
   }
   enqueue(value, priority) {
      let newNode = new Node(value, priority);
      this.values.push(newNode);
      this.bubbleUp();
   }
   bubbleUp(){
        let index = this.values.length - 1;
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.values[index].priority >= this.values[parentIndex].priority) break;
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            index = parentIndex;
        }
   }
   dequeue() {
      const min = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
         this.values[0] = end;
         this.sinkDown();
      }
      return min;
   }
   sinkDown() {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[idx];
      while(true) {
         let leftChildIdx = 2 * idx + 1;
         let rigthChildIdx = 2 * idx + 2;
         let leftChild, rightChild;
         let swap = null;
         if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx];
            if (leftChild.priority < element.priority) swap = leftChildIdx;
         }
         if (rigthChildIdx < length) {
            rightChild = this.values[rigthChildIdx];
            if ((!swap && rightChild.priority < element.priority) || (swap && rightChild.priority < leftChild.priority)) swap = rigthChildIdx;
         }
         if (!swap) break;
         this.values[idx] = this.values[swap];
         this.values[swap] = element;
         idx = swap; 
      }
   }
}

let ER = new PriorityQueus();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 2);
console.log('ER', ER);
console.log('dequeue',ER.dequeue());
console.log('dequeue',ER.dequeue());
console.log('ER', ER);