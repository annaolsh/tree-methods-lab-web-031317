function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode) {
  if(rootNode.data > newNode.data){
    if(rootNode.left !== null){
      if(rootNode.left.data !== newNode.data){
        return findOrAdd(rootNode.left, newNode)
      } else {
        return true
      }
    } else {
      rootNode.left = newNode
    }
  } else {
    if(rootNode.right !== null){
      if(rootNode.right.data !== newNode.data){
        return findOrAdd(rootNode.right, newNode)
      } else {
        return true
      }
    } else {
      rootNode.right = newNode
    }
  }
}

function max(node) {
  if(node.right){
    return max(node.right)
  } else {
    return node
  }
}

function min(node) {
  if(node.left){
    return min(node.left)
  } else {
    return node
  }
}
