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

var clonedObj = deepClone( initialObj );

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push( 2 );

console.log( initialObj );
console.log( clonedObj );