if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item) >= 0 ? arr.indexOf(item) : -1;
    },

    sum : function(arr) {
      var sum = 0;
      for (var i = 0, max = arr.length; i < max; i++) {
        sum += arr[i];
      }
      return sum;
    },

    remove : function(arr, item) {
      var new_arr = [];

      arr.filter(function(i) {
        if (i !== item) {
          new_arr.push(i);
        }
      });
      return new_arr;
    },

    removeWithoutCopy : function(arr, item) {
      var new_arr = [];

      arr.filter(function(i) {
        if (i !== item) {
          new_arr.push(i);
        }
      });
      return new_arr;
      
      /*
      var indx = arr.indexOf(item) >= 0 ? arr.indexOf(item) : false;

      if (indx) {
        console.log(arr.splice(indx, 1));
        return arr.splice(indx, 1);
      } else {
        return false;
      }
      */
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {
      var count = 0;
      arr.filter(function(i) {
        if (i === target) {
          console.log(arr.indexOf(i));
        }
      });
      return count;
    }
  };
});
