function areAnagrams( str1, str2 ) {
    var anagram = true;

    if ( str1.length != str2.length ) {
        anagram = false;
    }

    str1 = str1.trim().toLowerCase();
    str2 = str2.trim().toLowerCase();

    var sorted = str2.split( '' ).sort().join( '' );

    anagram = str1 === sorted;
}

console.log(areAnagrams( 'кот', 'отк' ));
console.log(areAnagrams( 'кот', 'атк' ));
console.log(areAnagrams( 'кот', 'отко' ));