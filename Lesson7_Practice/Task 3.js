function Cat(name) {
    this.name = name;
    var foodAmount = 50;

    function formatFoodAmount(){
        return foodAmount + 'гр.';
    }

    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };

    this.dailyNorm = function(amount, capacity) {

        if (!arguments.length) return formatFoodAmount();

        if (amount < 50) {
            throw new Error('Корма не должно быть меньше 50гр.');
        }
        if (amount > capacity) {
            throw new Error('Кол-во корма не должно превышать ' + capacity + 'гр.');
        }

        foodAmount = amount;
    }
}

var barsik = new Cat('Барсик');

//console.log(barsik.name);

barsik.dailyNorm();
barsik.feed();
barsik.dailyNorm(65,500);
barsik.feed();
barsik.dailyNorm(45,500);
barsik.feed();
barsik.dailyNorm(550,500);
barsik.feed();