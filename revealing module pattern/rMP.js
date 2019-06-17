var MODULE = (function () {
    // ALL the private variables and private methods

    var name = "bru";

    function privateFunction() {
        console.log("Hello: ", name);
    }

    function changeName(updatedName) {
        name = updatedName;

        console.log("Name Updated to: ", name);
    } 

    function publicFunction() {
        privateFunction();
    }

    //revealing public pointers to private function and properties

    return {
        setName: changeName,
        greet: publicFunction
    }
}());


//usage 
MODULE.setName("TeeD");
MODULE.greet();


//Adavantage

/*
    Makes it easier to tell at the end of the module which of our function and varibales make be accessed publicly.
*/

//Disadvantage

/*

*/