// "use strict";

// const Weight = document.getElementById("input-weight");
// const Height = document.getElementById("height");
// const submitButton = document.querySelector(".btn");
// const result = document.querySelector(".result");

// submitButton.addEventListener("click", function (e) {
//   e.preventDefault();
//   const weightValue = parseFloat(Weight.value);
//   const heightValue = parseFloat(Height.value);

//   //   console.log(weightValue);

//   const bmi = weightValue / (heightValue * heightValue);
//   result.innerHTML = bmi;
//   console.log(bmi);
// });

// "use strict";

// const weightInput = document.getElementById("input-weight");
// const heightInput = document.getElementById("height");
// const submitButton = document.querySelector(".btn");
// const result = document.querySelector(".result");

// submitButton.addEventListener("click", function (e) {
//   e.preventDefault();

//   // Get the values and convert them to numbers
//   const weightValue = parseFloat(weightInput.value); // Weight in kg
//   const heightValue = parseFloat(heightInput.value); // Height in meters

//   // Check if inputs are valid numbers
//   if (isNaN(weightValue) || isNaN(heightValue) || heightValue <= 0) {
//     result.textContent = "Please enter valid weight and height.";
//     return;
//   }

//   // Calculate BMI
//   const bmi = weightValue / (heightValue * heightValue); // BMI = weight (kg) / (height (m) ^ 2)

//   // Display the result
//   result.textContent = `Your BMI is ${bmi.toFixed(2)}`; // Format to 2 decimal places
//   console.log(bmi);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   "use strict";

//   const weightInput = document.getElementById("input-weight");
//   const heightInput = document.getElementById("height");
//   const submitButton = document.querySelector(".btn");
//   const result = document.getElementById("result");

//   submitButton.addEventListener("click", function (e) {
//     e.preventDefault();

//     const weightValue = parseFloat(weightInput.value);
//     const heightValue = parseFloat(heightInput.value);

//     if (isNaN(weightValue) || isNaN(heightValue) || heightValue <= 0) {
//       result.textContent = "Please enter valid weight and height.";
//       return;
//     }



//     const bmi = weightValue / (heightValue * heightValue);
//     result.textContent = `Your BMI is ${bmi.toFixed(2)}`;
//     console.log(bmi);
//   });
// });


"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const weightInput = document.getElementById("input-weight");
    const heightInput = document.getElementById("height");
    const submitButton = document.querySelector(".btn");
    const result = document.getElementById("result");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();

        // Get the values and convert them to numbers
        const weightValue = parseFloat(weightInput.value); // Weight in kg
        const heightValue = parseFloat(heightInput.value); // Height in meters

        // Check if inputs are valid numbers
        if (isNaN(weightValue) || isNaN(heightValue) || heightValue <= 0) {
            result.textContent = "გთხოვთ, შეიყვანოთ სწორი წონა და სიმაღლე.";
            return;
        }

        // Calculate BMI
        const massIndex = weightValue / (heightValue ** 2); // BMI = weight / height^2
        let message = `თქვენი მასის ინდექსია ${massIndex.toFixed(2)}. `;

        // Determine BMI category
        if (massIndex < 18.5) {
            message += "თქვენ გაქვთ წონის დეფიციტი.";
        } else if (massIndex >= 18.5 && massIndex <= 24.9) {
            message += "თქვენი წონა ნორმალურია.";
        } else if (massIndex >= 25 && massIndex <= 29.9) {
            message += "თქვენ გაქვთ ჭარბი წონა.";
        } else if (massIndex >= 30 && massIndex <= 34.9) {
            message += "თქვენ გაქვთ პირველი ხარისხის სიმსუქნე.";
        } else if (massIndex >= 35 && massIndex <= 39.9) {
            message += "თქვენ გაქვთ მეორე ხარისხის სიმსუქნე.";
        } else if (massIndex >= 40) {
            message += "თქვენ გაქვთ მესამე ხარისხის სიმსუქნე.";
        } else {
            message = "გთხოვთ, შეიყვანოთ სწორი მონაცემები.";
        }

        // Display the result
        result.textContent = message;
    });
});

