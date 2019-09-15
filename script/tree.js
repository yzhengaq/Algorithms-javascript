let tree = [5, 3, 6, 2, 4, null, null, 1]
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1

// in order tree travel
let inOrder = function (root) {
  if (tree.length >= root) {
    let left = root * 2
    let right = root * 2 + 1
    inOrder(left)
    console.log(tree[root - 1])
    inOrder(right)
  }
  return
}
console.log('------ in order ------')
inOrder(1)

// pre order tree travel
let preOrder = function (root) {
  if (tree.length >= root) {
    let left = root * 2
    let right = root * 2 + 1
    console.log(tree[root - 1])
    preOrder(left)
    preOrder(right)
  }
  return
}
console.log('------ pre order ------')
preOrder(1)

// post order tree travel
let postOrder = function (root) {
  if (tree.length >= root) {
    let left = root * 2
    let right = root * 2 + 1
    postOrder(left)
    postOrder(right)
    console.log(tree[root - 1])
  }
  return
}
console.log('------ post order ------')
postOrder(1)