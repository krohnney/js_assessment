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
      arr = arr.slice(1);
      return arr;
      // console.log(arr);
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      for (var i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
          count +=1;
        }
      }
      return count;
    },

    duplicates : function(arr) {
      dups = [];
      for (var i = 0; i < arr.length; i++) {

      }
    },

    square : function(arr) {
      /*
      var square = [];
      for (var i = 0; i < arr.length; i++) {
        square.push(Math.pow(arr[i], 2));
      }
      return square;
      */
      function square(x) {
        return Math.pow(x, 2);
      }
      return arr.map(square);
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
