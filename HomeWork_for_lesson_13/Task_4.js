function countSentencesLetters( text ) {
    var text = text;
    text = text.split( /[.!?]/ );
    text = text.map (function( item ) {
            return item.trim()
        });
    text = text.filter(function ( item ) {
            return item.length > 0
        });
    text = text.map(function ( item ) {
            return item + ': Letters quantity is: ' + getLength( item ) });
    text = text.forEach(function ( item ) {
            return console.log( item ) });
    return text;
}

function getLength( text ) {
    var str = text.split( /[\s,]/g ).join( '' ).split( '' ).length;
    return str;
}

var txt = 'Привет, студент! Студент... Как дела, студент?'

console.log(countSentencesLetters( txt ));