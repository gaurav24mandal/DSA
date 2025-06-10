//2667. Create Hello World Function

var createHelloWorld = function() {
    
    return function(...args) {
        return  "Hello World"
    }
};

// 2620. Counter

let createCounters = function(n) {
      
    return function() {
        return  n++;   
    };
};

// 2704. To Be Or Not To Be
var expect = function(val) {
    return {
          toBe : (a)=>{
            if(a === val ){
                return true
            } else {
                throw new Error("Not Equal")
            }
        },
         notToBe : (a)=>{
              if(a !== val){
                return true
              }
              else{
                 throw new Error("Equal")
              }
        }
     }
    
};

// 2665. Counter II
var createCounter = function(init) {
    let count = init

    return {
     increment : ()=>{
         return ++count
     } ,
    decrement : ()=>{
     return --count
    },
     reset : ()=>{
         count = init;
         return count
     }
    }
};