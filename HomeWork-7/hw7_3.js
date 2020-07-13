function isPalindrome( str ) {
    return str.trim().toLowerCase() === str.trim().toLowerCase().split( '' ).reverse().join( '' );
}

console.log(isPalindrome( 'шалаШ' ));
console.log(isPalindrome( 'прИвет' ));