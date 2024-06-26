// function to take back a function
function receivesAFunction(callback) {
    callback();
}
// function to return a named function
function returnsANamedFunction () {
// function named
    function toNamed(){

    }
    return toNamed;
}
// function returning anonymous function
function returnsAnAnonymousFunction () {
// Anonymous function
    return function () {
     
    }
}