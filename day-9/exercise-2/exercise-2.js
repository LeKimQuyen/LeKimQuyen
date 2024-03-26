// Activity 1: Tick Tock 🕘
let input = Number.parseInt(prompt('Enter the seconds:'));
let h = input / 3600;
let m = input - (h * 3600) / 60;
let s = input - (h * 3600 + m * 60);

console.log(`${h}:${m}:${s}`);

// Activity 2: BMI Calculator ⚖️
let weight = Number.parseFloat(prompt('What is your weight in kilograms?'));
let height = Number.parseFloat(prompt('What is your height in meters?'));
let bmi = weight / Math.pow(height, 2);

if (bmi < 18.5) {
    console.log(`Your BMI is ${Math.round(bmi, 1)}, so you are underweight.`);
} else if (bmi <= 24.9) {
    console.log(`Your BMI is ${Math.round(bmi, 1)}, so you have a normal weight.`);
} else {
    console.log(`Your BMI is ${Math.round(bmi, 1)}, so you are overweight.`);
}

// Activity 3: The Fibonacci Sequence 0️⃣1️⃣1️⃣2️⃣3️⃣5️⃣8️⃣
function fibonacci(num) {
    let arr = [0, 1];
    while (arr.length < num) {
        let length = arr.length;
        let newNum = arr[length - 2] + arr[length - 1];
        arr.push(newNum);
    };
    console.log(arr.join(', '));
};

// Activity 4: Rabbit Family 🐰 
function numberOfRabbit(months) {
    let numAdult = 0;
    let numChildren = 1;
    let numMonths = 1;

    if (months >= 2) {
        while (numMonths < months) {
            numMonths++;
            
            let numBirth = numAdult;
            numAdult += numChildren;
            numChildren = numBirth;
        };
    };
    console.log(`“The total number of pairs of rabbits at the month ${months} is ${numAdult + numChildren}.”`)
};