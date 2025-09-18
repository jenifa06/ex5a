function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  let result = "";

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    result = "⚠️ Please enter valid weight and height!";
  } else {
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    if (bmi < 18) {
      result = `Your BMI is ${bmi} → Status: Underweight`;
    } else if (bmi >= 18 && bmi < 25) {
      result = `Your BMI is ${bmi} → Status: Normal`;
    } else if (bmi >= 25 && bmi < 30) {
      result = `Your BMI is ${bmi} → Status: Overweight`;
    } else if (bmi >= 30) {
      result = `Your BMI is ${bmi} → Status: Obese`;
    }
  }
  document.getElementById("result").innerText = result;
}