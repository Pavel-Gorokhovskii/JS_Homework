function divideArr( array, number ) {
    var temp = [];

    for ( var i = 0; i < array.length; i += number ) {
        temp.push( array.slice( i, i + number ) );
    }

    return temp;
}

console.log(divideArr( [ 1, 2, 3, 4 ], 2 ));
console.log(divideArr( [ 1, 2, 3, 4, 5, 6, 7, 8 ], 3 ));