// bhai yaha hua function ne function ko return kiya hai bhai.
function multiplyBy(factor){
    return function(number){
        return number*factor;
    }
}
//operation executor;
function applyOperation(a,b,operation){
    return operation(a,b);
}
/*Create a function withLogging(fn) that:

Takes one function as an argument

Returns a new function

When the returned function is called:

The original function should execute

The result of the original function should be returned
 Do not use console.log inside the original function*/
function withLogging(fn){//we are maiking a function
    return function(...args){// here we are doing return function with how much arguments we pass accept all the arguments

        const result = fn(...args);//here we are call the orginal function thats means we call the orginal function

        return result; // here we are call return the function result
    }

}
//Array and higher order function questions ;
function myMap(arr,callback){
    const result = [];
    

}
    
}
