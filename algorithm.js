/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
 class Node {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
  isEmpty() { // This is done!
    // determine if the BST is empty and return a boolean
    if (this.root == null){
      console.log("This binary tree is empty");
      return true;
    }
      console.log("This binary tree is NOT empty");
    return false;
  }
  
  min(current = this.root) { // This is done!
    if (current == null) {
      return false;
    }
    while(current.left){
      current = current.left;
      
    }
   return current.data;
    //return the smallest integer data
  }
  
  minRecursive(current = this.root) { // Need to test!
    //using recursive, finding the minumum
    //a method that called itself
    if(current.left === null) {
      return current.data;
    }
    // return minRecursive(current);
    return this.minRecursive(current.left); // wanna show to ask for help?
  }           //  :D                             
  
  max(current = this.root) { // This is done!
    //return the largest integer data
    if (current == null) {
      return false;
    }
    while (current.right != null) {
      current = current.right;
    }
    return current.data;
  }
  
  maxRecursive(current = this.root) { // Need to test!
      //using recursive, finding the maximum
      if (current.right === null) {
        return current.data;
      }
      return this.maxRecursive(current.right);
  }
  
    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
      if (!node) {
        return;
      }
  
      spaceCnt += spaceIncr;
      this.print(node.right, spaceCnt);
  
      console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
          `${node.data}`
      );
  
      this.print(node.left, spaceCnt);
    }
  }
  
  const emptyTree = new BinarySearchTree();
  const oneNodeTree = new BinarySearchTree();
  oneNodeTree.root = new Node(10);
  
  
  
  
  /* twoLevelTree
          root
          10
        /   \
      5     15
  */
  const twoLevelTree = new BinarySearchTree();
  twoLevelTree.root = new Node(10);
  twoLevelTree.root.left = new Node(5);
  twoLevelTree.root.right = new Node(15);
  twoLevelTree.root.left.left = new Node(2);
  twoLevelTree.root.right.right = new Node(20);
  twoLevelTree.print();
  
  
  /* threeLevelTree
                      root
                  <-- 10 -->
                /            \
              5             15
            /    \         /    \
          2       8      12     20
  */
  
  console.log("**********************************");
  console.log("Make a Binary Tree:");
  const threeLevelTree = new BinarySearchTree();
  threeLevelTree.root = new Node(10);
  threeLevelTree.root.left = new Node(5);
  threeLevelTree.root.right = new Node(15);
  threeLevelTree.root.left.left = new Node(2);
  threeLevelTree.root.left.right = new Node(8);
  threeLevelTree.root.right.left = new Node(12);
  threeLevelTree.root.right.right = new Node(20);
  threeLevelTree.print();
  
  
  // no mas!
  console.log("**********************************");
  console.log("test is empty:");
  console.log(emptyTree.isEmpty());
  console.log(threeLevelTree.isEmpty());
  
  console.log("**********************************");
  console.log("test min:");
  console.log(threeLevelTree.min());
  
  console.log("**********************************");
  console.log("test max:");
  console.log(threeLevelTree.max());
  
  console.log("**********************************");
  console.log("test min recursive:");
  console.log(threeLevelTree.minRecursive(threeLevelTree));
  
  console.log("**********************************");
  console.log("test max recursive:");
  console.log(threeLevelTree.maxRecursive(threeLevelTree));