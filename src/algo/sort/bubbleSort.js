"use strict";

// Average performace: O(n)²

exports.bubbleSort = function(array, timed){
  var timed = false;
  if(timed === true){
    timed = true;
  }

  if(timed === true){
    var start = new Date().getTime();
  }
  // take list of sortable items
  // get length of swappable items
  // while item is swapped == true
  // set swapped to false
  // for i in the length of the project
    // if i < i-1
    // temporarily assign the lower
    // assign the higher number to i
    // assign temp to i-1
    // swapped equals true
    

  if(timed === true){
    var end == new Date().getTime();
    var time = end - start;
    console.log(time);
  }

}
