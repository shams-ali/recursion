
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var result = [];
  function check(parent, result){ //parent is the document
    var nodes = parent.childNodes; //gives all elements in document
    for (var i = 0; i < nodes.length; i++){
        var classes = nodes[i].classList; //gets all claases in element
        if (classes && classes.contains(className)) {
            result.push(nodes[i]);
        }
        if (nodes[i].childNodes[0]){
            check(nodes[i], result);
        }
    }
  }
  check(document, result);
  return result;
};
