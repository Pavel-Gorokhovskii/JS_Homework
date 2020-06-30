function Animal(name){
    this.name = name;
    var foodAmount = 50;

    function formatFoodAmount(){
        return foodAmount + 'гр.';
    }

    this.animalFeed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
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

    var parentFeed = this.animalFeed;

       this.stroke = function(){
        console.log('Гладим кота.');
        return this;
    }

    this.feed = function(){
        parentFeed.call(this);
        console.log('Кот доволен ^_^');
        return this;
    }
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

barsik.dailyNorm(250);

barsik.feed().stroke().feed().feed().stroke().stroke();