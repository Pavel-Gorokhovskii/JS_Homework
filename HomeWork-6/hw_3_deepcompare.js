function deepCompare( obj1, obj2 ) {
    if ( obj1 === null || obj1 === undefined || obj2 === null || obj2 === undefined ) {
        return false;
    }

    for ( var key in obj1 ) {
        if(!obj2.hasOwnProperty(key)){
            return false;
        }

        if(typeof obj1[key] == 'object' && obj1[key] != null){
            return deepCompare( obj1[key], obj2[key] )
        }
    }

    for ( var key in obj2 ) {
        if(!obj1.hasOwnProperty(key)){
            return false;
        }
    }

    return true;
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

console.log( "same: " + deepCompare( initialObj, initialObj ) );

var clonedObj = deepClone( initialObj );
clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push( 2 );
console.log( "cloned: " + deepCompare( initialObj, clonedObj ) );

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
console.log( "other/same: " + deepCompare( initialObj, initialObj2 ) );

