

// Implementing a priority queue to get min distance each time 



class PQ{


    constructor(){
        this.items = [];
    
    }

    // 2 major operations on PQ - enqueue(add item from back) and dequeue(removing item from front)

    enqueue(node, priority){

        this.items.push({node, priority});

        this.sort();


    }

    sort(){
        this.items.sort((a, b)=>{   // sorting objects on basis of their priority
            return a.priority - b.priority;

        })
    }


    dequeue(){

        return this.items.shift();

    }


    

}


// // for debugging

// let pq = new PQ();

// pq.enqueue('A', 50);

// pq.enqueue('B', 10);


// pq.enqueue('C', 70);


// pq.enqueue('D', 100);



// console.log(pq);






function dijkstra(graph, start) {
    const distances = {}; // Har node ka distance store karte hain
    const pq = new PQ(); // Priority queue banate hain
    const previous = {}; // Shortest path track karne ke liye
    
    // Step 1: Initialize distances and queue

    for (let v in graph) {
      if (v === start) {
        distances[v] = 0; // Source node ka distance 0
        pq.enqueue(v, 0);
      } else {
        distances[v] = Infinity; // Baaki sab ka distance Infinity
      }
      previous[v] = null; // Pehle kisi ka koi previous node nahi
    }



    
    // Step 2: Process the queue
    while (pq.items.length) {
      let smallest = pq.dequeue().node; // Minimum distance node
      
      // Agar smallest node tak pohcha nahi ja sakta, continue
      if (distances[smallest] === Infinity) break;
      
      // Explore all neighbors
      for (let neighbor in graph[smallest]) {
        let distance = distances[smallest] + graph[smallest][neighbor]; // Calculate new distance
        
        if (distance < distances[neighbor]) { // Relaxation step
          distances[neighbor] = distance; // Update distance
          previous[neighbor] = smallest; // Update previous node
          pq.enqueue(neighbor, distance); // Add to queue
        }
      }
    }
    
    return { distances, previous }; // Final distances and paths
  }
  
  
  const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 3, D: 2 },
    C: { A: 4, B: 3, D: 5 },
    D: { B: 2, C: 5 }
  };
  

  
  const result = dijkstra(graph, 'A');
  console.log("Shortest distances: ", result.distances);
  console.log("Previous nodes: ", result.previous);























