var MODULE = (function ($){ //$ here is a import mixin (dependency injection)
    // All my private variables
    var name = "bru";

    // All my private methods
    var getPersonality = function () {
        console.log("funny");
    };

    return {
        //public methods which have access to private variable through?
        getPersonName : function() {
            console.log(name);
        },
        //public method having a reference of private methods
        getPersonality: getPersonality
    }
})(jQuery);

//usage 

console.log(MODULE.getPersonName());

console.log(MODULE.getPersonality())

// Advanced

//Augmentation

/*
    One limitation of the module pattern is that it should be in a single file. To overcome this we use augmentation.
    Import module add methods which you want and export module again.
*/
// This requires the file to be loaded before this file.
var MODULE = (function(obj) {
    //Can again have it's own private state and imports
    
    //add methods to an existing module
    obj.greet = function () {
        console.log("Wassup!");
    }

    return obj;
}(MODULE))

// Loose Augmentation

//Here, If the module is not there. We go ahead and create one. 
//NOTE: The below structure should be followed for every MODULE implementation

var MODULE = (function (my) {
	// add capabilities...

	return my;
}(MODULE || {}));

//Disadvantage:
/*
    * We wont no the order in which the files load therefore we wont be able to override the existing methods during initialization.
        It can be done at run-time after initialization.
*/

// Tight Augmentation

// Depends on order of files being loaded

var MODULE = (function(obj) {
    //Can again have it's own private state and imports

    //maintain reference to the old method
    var old_greet = obj.greet;
    
    //add methods to an existing module
    obj.greet = function () {
        console.log("Hello peps!");
    }

    return obj;
}(MODULE))


//advantages
/*
    Gives us ability to have private data and methods.
*/

//disadvantages
/*
    * Whenever we want to change the visibilty, We'll have to make changes to each place where the member was used.
    * We cannot access private members in methods which are added later on.
*/

