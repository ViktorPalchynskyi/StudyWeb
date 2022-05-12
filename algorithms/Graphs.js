class Graph {
   constructor () {
      this.adjacencyList = {};
   }
   addVertex(vertex) {
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
   }
   addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
   }
   removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex2 !== vertex);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex1 !== vertex);
   }
   removeVertex(vertex) {
      this.adjacencyList[vertex].forEach(edge => {
         this.removeEdge(edge, vertex);
      });
      delete this.adjacencyList[vertex];
   }
   depthFirstRecursive(start){
      const result = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;

      (function dfs(vertex) {
          if(!vertex) return null;
          visited[vertex] = true;
          result.push(vertex);
          adjacencyList[vertex].forEach(neighbor => {
              if(!visited[neighbor]){
                  return dfs(neighbor);
              }
          });
      })(start);
      return result;
  }
  depthFirstIterative(start) {
     const result = [];
     const stack = [start];
     const visitet = {};
     let vetex;
     visitet[start] = true;
     while(stack.length) {
        vetex = stack.pop();
        result.push(vetex);
        visitet[vetex] = true;
        this.adjacencyList[vetex].forEach(neighbor => {
           if (!visitet[neighbor]) {
              visitet[neighbor] = true;
              stack.push(neighbor);
           }
        }); 
     }
     return result;
  }
  breadFirst(start) {
      const queue = [start];
      const res = [];
      const visited = {};
      let vertex;
      visited[start] = true;
      while(queue.length) {
         vertex = queue.shift();
         res.push(vertex);
         this.adjacencyList[vertex].forEach(neighbor => {
            if (!visited[neighbor]) {
               visited[neighbor] = true;
               queue.push(neighbor);
            }
         });
      }
      return res;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");


g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");
console.log('g.depthFirstRecursive("A")',g.depthFirstIterative("A"));
console.log('g.breadFirst("A")',g.breadFirst("A"));
