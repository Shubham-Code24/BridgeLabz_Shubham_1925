

// Node designing 


class Node {
    constructor(value) {
      this.value = value; // Node's value
      this.left = null;   // Left child
      this.right = null;  // Right child
    }
  }
  



  // Function to find the Lowest Common Ancestor (LCA)



  function findLCA(root, p, q) {
    if (!root) return null; // Base case: if root is null
    if (root.value === p || root.value === q) return root; // Base case: if root matches p or q
  
    // Recursively find LCA in left and right subtrees
    const leftLCA = findLCA(root.left, p, q);
    const rightLCA = findLCA(root.right, p, q);
  
    if (leftLCA && rightLCA) return root; // If p and q found in different subtrees, root is LCA
    return leftLCA ? leftLCA : rightLCA;  // Otherwise, propagate non-null result
  }
  
  // Create a Static Binary Tree
  function buildTree() {


    const root = new Node(8);
    root.left = new Node(5);
    root.right = new Node(1);
    root.left.left = new Node(6);
    root.left.right = new Node(2);
    root.right.left = new Node(0);
    root.right.right = new Node(8);
    root.left.right.left = new Node(7);
    root.left.right.right = new Node(4);
  
    return root;
  }
  
  // Main Code Execution
  const root = buildTree();
  const p = 0; // First node value
  const q = 7; // Second node value
  
  console.log("Tree created:");
  printTree(root);
  
  const lca = findLCA(root, p, q);
  if (lca) {
    console.log(`The Lowest Common Ancestor of ${p} and ${q} is: ${lca.value}`);
  } else {
    console.log(`No common ancestor found for ${p} and ${q}`);
  }
  
  // Helper Function to Print Tree (Level Order Traversal)
  function printTree(root) {
    if (!root) {
      console.log("Tree is empty.");
      return;
    }
  
    const queue = [root];
    const result = [];
    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  
    console.log("Tree (Level Order):", result.join(" -> "));
  }
  


