function node (data){
   this.data = data;
   this.null = null;
   this.right = null;
}

function BinarySearchTree(){
   this.root = null;
}

BinarySearchTree.prototype.add = function(data){
   var node = new Node(data);
   if(this.root) {
      this.root = node;
   } else {
      var current = this.root;

      while (current) {
         if (node.data < current.data){
            if (!current.left){
               current.left = node;
               break;
            }
            current = current.left;
      } else if (node.data > current.data) {
            if (!current.right){
               current.right = node;
               break;
            }
            current = current.right;
      } else {
         break;
      }
   }
}
return this;
}

BinarySearchTree.prototype.search = function (data) {
var current = this.root;
   while(current) {
      if(data === current.data){
         return true;
      }
      if(data < current.data){
         current = current.left;
      } else if (data > current.data){
         current = current.right;
      }
   }
   return false;
}
function getMin(node) {
   while(node.left){
      node = node.left;
   }
   return node.data;
}

function removeNode (node, data){
   if(!node){
      return null;
   }
   if(data === node.data){
      if(!node.left && !node.right){
         return null;
      }
      if (!node.left){
         return node.right;
      }
      if (!node.right){
         return node.left;
      }
      var temp = getMin(node.right);
      node.data = temp;
      node.right = removeNode(node.right, temp);
      return node;

   } else if(data < node.data){
      node.left = removeNode(node.left, data);
      return node;
   } else {
      node.right = removeNode(node.right, data);
   }
}




BinarySearchTree.prototype.remove = function(data) {
   removeNode(this.root, data)

}
var bst = new BinarySearchTree();
bst.add(5).add(2).add(18).add(-4).add(3).add(18).add(21).add(25).add(19).add(16).add(20);
bst.search(18);
bst.remove(18);
 console.log(bst);
