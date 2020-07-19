function getWordRepeats(str) {
    var textArr = str.toLowerCase().split(/[\s\n.!()%$+]/).filter(function (item) {
        return !!item
    }).sort();

    var textObj = {};
    textArr.forEach(function (item) {
        if (textObj.hasOwnProperty(item)) {
            textObj[item]++;
        } else {
            textObj[item] = 1;
        }
    })

    var value = 0;
    var str = '';

    for (var key in textObj) {
        if (value < textObj[key]) {
            value = textObj[key];
            str = 'Максимальное число повторений у слова ' + key + ' - ' + value
        }
    }

    return str;
}

var textFirst = 'Я свободен, словно птица в небесах!' +
    'Я свободен, я забыл что значит страх!' +
    'Я свободен, с диким ветром на равне!' +
    'Я свободен, на яву, а не во сне!';
var textSecond = 'Выйду ночью в поле с конем,' +
    'ночкой темной тихо пойдем.' +
    'Мы пойдем с конем, по полю вдвоем,' +
    'мы пойдем с конем по полю вдвоем';
console.log(getWordRepeats(textFirst));
console.log(getWordRepeats(textSecond));

// Самое сложное было придумать примеры, на которых протестировать работу указанной функции, пришлось песни вспоминать