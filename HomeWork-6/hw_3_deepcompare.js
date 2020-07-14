function deepCompare( object1, object2 ) {
    var same = true;

    if ( object1 === null || object1 === undefined || object2 === null || object2 === undefined ) {
        same = false;
    }

    if ( Object.keys( object1 ).length !== Object.keys( object2 ).length ) {
        same = false;
    }

    for (key in object1){
        if ( !object2.hasOwnProperty( key ) ) {
            same = false;
        }

        if(typeof object1[key] === 'string' || typeof object1[key] === 'number' || typeof object1[key] === 'boolean' ||
            object1[key] === null || object1[key] === undefined){

            if ( object1[key] !== object2[key]) {
                same = false;
            }
        }else {
            if(object1[key] instanceof Function){
                if(Object(object1[key]).toString() !== Object(object2[key]).toString()){
                    same = false;
                }
            }else if(object1[key] instanceof Array){
                if(object1[key].length !== object2[key].length){
                    same = false;
                }else{
                    if(!deepCompare(object1[key], object2[key])){
                        same = false;
                    }
                }
            }else{
                if(!deepCompare(object1[key], object2[key])){
                    same = false;
                }
            }
        }
    }

    for (key in object1){
        if ( !object1.hasOwnProperty( key ) ) {
            same = false;
        }
    }

    return same;
}

function deepClone( obj ) {
    if ( !obj ) return obj;

    var newObj, item;

    if ( typeof obj === 'object' ) {
        newObj = !obj.length ? {} : [];
    }

    for ( var key in obj ) {
        item = obj[key];
        if ( typeof item !== 'object' ) {
            newObj[key] = item;
        } else {
            newObj[key] = deepClone( item );
        }
    }

    return newObj;
}

var initialObj = {
    string : 'Vasya',
    number : 30,
    boolean : true,
    undefined : undefined,
    null : null,
    array : [ 1, 2, 3 ],
    object : {
        string2 : 'Petrov',
        object2 : {
            array2 : [ {}, {} ]
        },
        object3 : {}
    },
    method : function() {
        alert( 'Hello' );
    }
};

console.log( "same: " + deepCompare( initialObj, initialObj ) )

var clonedObj = deepClone( initialObj );
clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push( 2 );
console.log( "cloned: " + deepCompare( initialObj, clonedObj ) )

var initialObj2 = {
    string : 'Vasya',
    number : 30,
    boolean : true,
    undefined : undefined,
    null : null,
    array : [ 1, 2, 3 ],
    object : {
        string2 : 'Petrov',
        object2 : {
            array2 : [ {}, {} ]
        },
        object3 : {}
    },
    method : function() {
        alert( 'Hello' );
    }
};
console.log( "other/same: " + deepCompare( initialObj, initialObj2 ) )
var initialObj3 = {
    string : 'Vasya',
    number : 30,
    boolean : true,
    undefined : undefined,
    null : null,
    array : [ 1, 2, 3 ],
    object : {
        string2 : 'Petrov',
        object2 : {
            array2 : [ {}, { name : '123' } ]
        },
        object3 : {}
    },
    method : function() {
        alert( 'Hello' );
    }
};
console.log( "other/not same: " + deepCompare( initialObj, initialObj3 ) )
