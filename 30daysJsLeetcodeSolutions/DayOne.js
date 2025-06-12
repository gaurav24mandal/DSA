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

//Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0 ;
     for(let j = 1 ; j< nums.length ; j++){
        if(nums[i] !==nums[j] ){
            i++;
            nums[i] = nums[j];
        }
    
     }
     return i+1;
};

//121. Best Time to Buy and Sell Stock
var maxProfit = function(prices) {
    let max = 0;
    let minPrice = Infinity;
      for(let i = 0; i< prices.length; i++){
            if(prices[i]< minPrice){
              minPrice = prices[i];
            }
        max = Math.max(max, prices[i] - minPrice);
      }
      return max
};
