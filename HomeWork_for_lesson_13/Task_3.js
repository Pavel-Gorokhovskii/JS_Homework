var textLoremRus = 'Не следует, однако, забывать о том, что постоянное информационно-техническое обеспечение нашей ' +
    'деятельности создаёт предпосылки качественно новых шагов для модели развития? Задача организации, в особенности же ' +
    'повышение уровня гражданского сознания обеспечивает актуальность направлений прогрессивного развития. Дорогие ' +
    'друзья, рамки и место обучения кадров способствует повышению актуальности позиций, занимаемых участниками в ' +
    'отношении поставленных задач?'

var textLoremLatin = 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, nam ' +
    'libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, quae ' +
    'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo?'

var vowels = ['e', 'y', 'u', 'i', 'o', 'a', 'у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю', 'ё']

function getVowels( str ) {
    return arr = str.split('')
        .filter(function( item ) {
            return isVowel( item ).length > 0;
        }).length;
}

function isVowel( letter ) {
    return vowels.filter(function( item) {
        return letter.toLowerCase() === item.toLowerCase();
    })
}

console.log( getVowels( textLoremRus ) );
console.log( getVowels( textLoremLatin ) );