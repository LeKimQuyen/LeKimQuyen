function measureBMI () {
  // true = metric, false = imperial
  let unit = document.getElementById("bmi-metric").checked,
      weight = document.getElementById("bmi-weight"),
      weightu = document.getElementById("bmi-weight-unit"),
      height = document.getElementById("bmi-height"),
      heightu = document.getElementById("bmi-height-unit");
  
  if (unit) {
    weightu.innerHTML = "KG";
    weight.min = 1;
    weight.max = 635;
    heightu.innerHTML = "CM";
    height.min = 54;
    height.max = 272;
  } else {
    weightu.innerHTML = "LBS";
    weight.min = 2;
    weight.max = 1400;
    heightu.innerHTML = "IN";
    height.min = 21;
    height.max = 107;
  }
}

function calcBMI () {
  // (A) Get elements
  let bmi = null,
      unit = document.getElementById("bmi-metric").checked, // true = metric, false = imperial
      weight = parseInt(document.getElementById("bmi-weight").value),
      height = parseInt(document.getElementById("bmi-height").value),
      results = document.getElementById("bmi-results");

  // (B) Calculate BMI
  // Metric BMI = Mass (kg) / Height (m) square 
  // Enter your code here!
  height = Number.parseFloat(height / 100);
  if (unit) 
    bmi = weight / (height * height);
  else
    bmi = 703 * (weight / (height * height));



  // (C) Show Results
  // Enter your code here!
  if (bmi < 18.5)
    results.innerHTML = `${bmi.toFixed(2)} - Underweight range`;
  else if (bmi <= 24.9)
    results.innerHTML = `${bmi.toFixed(2)} - Normal weight range`;
  else
    results.innerHTML = `${bmi.toFixed(2)} - Obese range`;

}