// Activity 1: Swap Two Variables 🔄
let x = 10; 
let y = 20; 

if (true) {
    let temp = y;
    y = x;
    x = temp;
} else {
    x = x + y; 
    y = x - y; 
    x = x - y;
}

// Activity 2: String Interpolation 🧵
let myName = "Jerry"
let myAnimals = "Koala 🐨, Snail 🐌, Penguin 🐧"
let animalCount = 3

console.log(`${myName} loves all ${animalCount} of animals like ${myAnimals}`)

// Activity 3: Virtual Robot Dog - Karel 🐕
// https://codehs.com/editor/2684007

// Activity 4: Big and small Dice Game 🎲 (tai sai/dai siu/sic bo/high low)
let next = true;
let house = 1000;
let user = 100;
let turn = 0;
while(next) {
    turn++;
    console.log(`The house has ${house}`);
    console.log(`The you has ${user}`);
    console.log(`Round ${turn}:`);
    let bet = Number.parseInt(prompt('How mach do you want to bet?'));
    console.log(`You have bet ${bet}`);
    let  picked = prompt('Do you want to bet big or small? (big/small)');
    let a = Math.floor(Math.random() * 7);
    let b = Math.floor(Math.random() * 7);
    let c = Math.floor(Math.random() * 7);
    let sum = a + b + c;
    console.log(`The dices are: ${a} ${b} ${c}`);
    console.log(`The sum of 3 dices is ${sum}!`);

    let result;
    if (sum >= 4 && sum <= 10) {
        result = 'small';
    } else if (sum >= 11 && sum <= 17) {
        result = 'big';
    }

    if (result === picked) {
        console.log(`You Won ${bet}`);
        user += bet;
        house -= bet;
    } else {
        console.log(`You Lost ${bet}`);
        user -= bet;
        house += bet;
    }
    console.log(`The house has ${house}`);
    console.log(`The you has ${user}`);

    next = confirm('Do you still want to continue to play?');
}
