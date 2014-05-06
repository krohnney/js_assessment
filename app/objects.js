if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      args = [];
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          args.push(obj[i]);
        }
      }
      console.log(args);
      return fn.apply(obj, args);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var props = [];
      for(i in obj) {
        if (obj.hasOwnProperty(i)) {
          props.push(i + ': ' + obj[i]);
        }
      }
      return props;
    }
  };
});
