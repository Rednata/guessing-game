class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        let arr = [];
        this.arr= arr;
        arr[0] = min;
        arr[1] = max;
    }

    guess() {        
        let newNumber;
        newNumber = Math.round((this.arr[0] + this.arr[1])/2);
        this.newNumber=newNumber;
        console.log(newNumber);
        return newNumber;
    }

    lower() {
        this.arr[1] = this.newNumber;
    }

    greater() {
        this.arr[0] = this.newNumber;
    }
}

module.exports = GuessingGame;
