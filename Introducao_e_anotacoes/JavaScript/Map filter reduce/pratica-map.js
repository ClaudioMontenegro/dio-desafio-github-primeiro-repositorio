// com this

const raiden = {
    value: 5,
};

const yae = {
    value: 5,
};

const unknowGod = {
    value: 100,
};

function myNumbers(arr, numbers) {
    return arr.map(function(item) {
        return item * this.value;
    }, numbers);
}

const rarity = [2, 5, 20];

console.log(myNumbers(rarity, raiden))
    

console.log(myNumbers(rarity, yae))

console.log(myNumbers(rarity, unknowGod))

// sem this

function myArray (arr2) {
   return arr2.map(function(item) {
       return item * 2
    })
}

const myList = [10, 20, 30, 40, 50];

console.log(myArray(myList))

// teste

const char = {
    name: 'Su',
    id: 100,
    elemental: 'Dendro',
    multiplier: 'EM x 1500',
    elementalStatus: function() {
        return `${this.name} is a ${this.elemental} chracter, with ${this.id} years old. Its power is based on ${this.multiplier}` 
    }
}

console.log(char.elementalStatus())

