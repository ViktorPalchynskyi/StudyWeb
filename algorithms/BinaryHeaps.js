class MaxBinaryHeaps {
   constructor() {
      this.values = [];
   }
   insert(value) {
      this.values.push(value);
      this.bubbleUp();
   }
   bubbleUp(){
        let index = this.values.length - 1;
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.values[index] <= this.values[parentIndex]) break;
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            index = parentIndex;
        }
   }
   extractMax() {
      [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
      const max = this.values.pop();
      let index = 0;
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let parentValue = this.values[index];
      let leftChildValue = this.values[leftChildIndex];
      let rightChildValue = this.values[rightChildIndex];
      while(leftChildValue > parentValue || rightChildValue > parentValue) {
         leftChildIndex = 2 * index + 1; 
         rightChildIndex = 2 * index + 2; 
         parentValue = this.values[index];
         leftChildValue = this.values[leftChildIndex];
         rightChildValue = this.values[rightChildIndex];
         if (leftChildValue > parentValue && rightChildValue > parentValue) {
               if (leftChildValue > rightChildValue) {
                  [this.values[index], this.values[leftChildIndex]] = [this.values[leftChildIndex], this.values[index]];
                  index = leftChildIndex;
               } else {
                  [this.values[index], this.values[rightChildIndex]] = [this.values[rightChildIndex], this.values[index]];
                  index = rightChildIndex;
               }  
               continue;
         }
         if (leftChildValue > parentValue) {
            [this.values[index], this.values[leftChildIndex]] = [this.values[leftChildIndex], this.values[index]];
            index = leftChildIndex;
         }
         if (rightChildValue > parentValue) {
            [this.values[index], this.values[rightChildIndex]] = [this.values[rightChildIndex], this.values[index]];  
            index = rightChildIndex;
         } 
      }
      return max;
   }
}

const maxBinaryHeaps = new MaxBinaryHeaps();
maxBinaryHeaps.insert(19)
maxBinaryHeaps.insert(23)
maxBinaryHeaps.insert(3)
maxBinaryHeaps.insert(6)
maxBinaryHeaps.insert(26)
maxBinaryHeaps.insert(61)
maxBinaryHeaps.insert(16)
console.log('before maxBinaryHeaps',maxBinaryHeaps);
console.log('extractMax', maxBinaryHeaps.extractMax());
console.log('after maxBinaryHeaps',maxBinaryHeaps);
