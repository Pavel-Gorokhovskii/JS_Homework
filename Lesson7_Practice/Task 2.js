function Cat(name) {
    this.name = name;
    var foodAmount = 50;

    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
    };

    function formatFoodAmount(){
        return foodAmount + 'гр.';
    }
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

barsik.feed();

barsik = null;