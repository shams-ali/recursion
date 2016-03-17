var _ = require("./underscore.js");
var jsdom = require("jsdom");
var window = jsdom.jsdom().defaultView;
var $ = require("jquery")(window);
var document = window.document;
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var nodeList = [];
  for(var i = 0; i < array.length; i++){
    //
  }
  return nodeList;
};
