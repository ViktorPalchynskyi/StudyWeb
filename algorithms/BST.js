class Node {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {
   constructor() {
      this.root = null;
   }
   insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
         this.root = newNode;
      } else {
         let current = this.root;
         let left = current.left;
         let right = current.right;
         while(true) {
            if (newNode.value === current.value) return false;
            if (!left && current.value > newNode.value) {
               current.left = newNode;
               break;
            }
            if (!right && current.value < newNode.value) {
               current.right = newNode;
               break;
            } 
            if (current.value > newNode.value) {
               current = left;
               left = current.left;
               right = current.right;
               continue;
            }
            if (current.value < newNode.value) {
               current = right;
               left = current.left;
               right = current.right;
               continue;
            }
         }
      }
      return this;
   }
   find(value){
      if(this.root === null) return false;
      let current = this.root;
      let found = false;
      while(current && !found){
          if(value < current.value){
              current = current.left;
          } else if(value > current.value){
              current = current.right;
          } else {
              found = true;
          }
      }
      if(!found) return undefined;
      return current;
  }
  bfs() {
     let currentNode = this.root;
     const queue = [currentNode];
     const visitet = [];
     while(queue.length) {
       currentNode = queue.shift();
       visitet.push(currentNode.value);
       if (currentNode.left) queue.push(currentNode.left);
       if (currentNode.right) queue.push(currentNode.right); 
     }
     return visitet;
  }
  dfsPreOrder() {
     const visitet = [];
     function traverse(node) {
      visitet.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
     }
     traverse(this.root);
     return visitet;
  }
  dfsPostOrder() {
      const visitet = [];
      function traverse(node) {
         if (node.left) traverse(node.left);
         if (node.right) traverse(node.right);
         visitet.push(node.value);
      }
      traverse(this.root);
      return visitet;
   }
   dfsInOrder() {
      const visitet = [];
      function traverse(node) {
         if (node.left) traverse(node.left);
         visitet.push(node.value);
         if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return visitet;
   }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10).insert(8).insert(12).insert(15).insert(5).insert(11).insert(9);
console.log('breadth first search', binarySearchTree.bfs());
console.log('depth first preOrder', binarySearchTree.dfsPreOrder());
console.log('depth first preOrder', binarySearchTree.dfsPostOrder());
console.log('depth first InOrder', binarySearchTree.dfsInOrder());