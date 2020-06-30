function Animal(name){
    this.name = name;
    var foodAmount = 50;
    var self = this;

    function formatFoodAmount(){
        return foodAmount + 'гр.';
    }

    this.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };

    this.dailyNorm = function(amount) {

        if (!arguments.length) return formatFoodAmount();

        if (amount < 50) {
            throw new Error('Корма не должно быть меньше 50гр.');
        }
        if (amount > 500) {
            throw new Error('Кол-во корма не должно превышать 500гр.');
        }

        foodAmount = amount;
    }
}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;

    this.feed = function(){
        animalFeed();
        console.log('Кот доволен ^_^');
    }
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

barsik.dailyNorm(60);

barsik.feed();