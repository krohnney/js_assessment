if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    // you should be able to use an array as arguments when calling a function
    argsAsArray : function(fn, arr) {
      // console.log(Array.isArray(arr));
      return fn.apply(null, arr);
    },
    
    // you should be able to change the context in which a function is called
    speak : function(fn, obj) {
      return fn.call(obj, obj.name, obj.greeting);
    },
  
    // you should be able to return a function from a function
    // expect(answers.functionFunction('Hello')('world')).to.eql('Hello, world');
    functionFunction : function(str) {
      return function(x) {
        return str + ', ' + x;
      }
    },

    makeClosures : function(arr, fn) {
      var funcs = [];
      for (var i = 0, max = arr.length; i < max; i++) {
        funcs.push(fn.bind(null, arr[i]));
      }
      return funcs;

    },

    partial : function(fn, str1, str2) {
      
    },

    useArguments : function() {
      var sum = 0;
      for ( var i = 0, max = arguments.length; i < max; i++) {
        sum += arguments[i];
      }
      return sum;
    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {
      
    },

    curryIt : function(fn) {
      return function(a) {
        return function(b) {
          return function(c) {
            return a / b * c;
          }
        }
      }
    }
  };
});
