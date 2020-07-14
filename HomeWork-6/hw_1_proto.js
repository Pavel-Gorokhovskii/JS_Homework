function Animal(name) {
    this.name = name;
    this._foodAmount = 50;
}

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + 'гр.';
}

Animal.prototype.feed = function() {
    console.log( 'Насыпаем в миску ' + this.dailyNorm() + ' корма.' );
};

Animal.prototype.dailyNorm = function( amount ) {

    if ( !arguments.length ) return this._formatFoodAmount();

    if ( amount < 50 || amount > 500 ) {
        throw new Error( 'Корма не должно быть меньше 50гр. или больше 500гр.' );
    }

    this._foodAmount = amount;

}

function Cat( name ) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create( Animal.prototype );
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function(){
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
    return this;
};
Cat.prototype.stroke = function(){
    console.log('Гладим кота.');
    return this;
}

var barsik = new Cat('Барсик');
console.log(barsik.name);
barsik.dailyNorm(100);
barsik.feed().stroke();