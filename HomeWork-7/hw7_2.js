function getFirstPositiveNumber( arr ) {
    return arr.find( function( number ) {
        return number > 0;
    } );
}

var positive = getFirstPositiveNumber( [ -1, 0, 1, 2, 34, -2 ] );
console.log(positive);