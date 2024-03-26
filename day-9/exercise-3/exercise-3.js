// Activity 1: Practise with Array
let fruit = ["Banana", "Apples", "Oranges", "Blueberries"];
fruit.shift();
fruit.sort();
fruit.push('Kiwi');
let index = fruit.indexOf('Apples');
fruit.splice(index, 1);

for (let i = 0, j = fruit.length - 1; i < j; i++, j--) {
    let temp = fruit[i];
    fruit[i] = fruit[j];
    fruit[j] = temp;
}

let fruit2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
fruit2[1][1];

// Activity 2: Practise with JS Objects
let items = [
    { type: 'hat', points: 10 },
    { type: 'shoes', points: 20 },
    { type: 'hat', points: 5 },
    { type: 'scarf', points: 15 },
    { type: 'shoes', points: 10 }
];

function pointOfItems(arr) {
    let output = {};
    for (let item of arr) {
        if (output[item.type]) {
            output[item.type] = Number.parseInt(output[item.type]) + Number.parseInt(item.points);
        } else {
            output[item.type] = item.points;
        }
    }
    return output;
};

console.log(pointOfItems(items));

// Activity 3: Practise with JS Objects and Array
let myTeam = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
];

let output = [];
myTeam.forEach(person => {
    output.push(`${person.username}!`);
    return output;
})

myTeam.map(person => `${person.username}?`);

myTeam.filter(person => person.team === 'red');

myTeam.reduce(function(total, person) {
    return total + person.score;
}, 0);