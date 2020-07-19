var arrayNames = ['Vasya', 'Pavel', 'John', 'Peter', 'Steve', 'Donald'];

function arrayNamesToArrayObjectNames( arr ){
    return arr.map(function( name ) {
        return { name : name }
    })
}

console.log(arrayNamesToArrayObjectNames(arrayNames))