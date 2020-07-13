function filterNumbersArr( numbers ) {
    return numbers.filter( function( number ) {
        return number > 0;
    } );
}

var filter = filterNumbersArr( [ -1, 0, 2, 34, -2 ] );
console.log(filter);