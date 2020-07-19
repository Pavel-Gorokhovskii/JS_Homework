var Array = ['00', '13', '24'];

function getString( arr ){
    return 'Текущее время : ' + arr.reduce(function(item, current) {
        return item + ' : ' + current;
    })
}

console.log(getString(Array))