// 1. Setup: Get elements from the HTML
const calculateBtn = document.getElementById('calculate');
const nameInput = document.getElementById('userName');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');

const greetingDisplay = document.getElementById('greeting');
const totalDisplay = document.getElementById('totalAmount');
const feedbackDisplay = document.getElementById('feedback');

// 2. The Process: Function to run when button is clicked
calculateBtn.addEventListener('click', function() {
    // Get values from inputs
    const name = nameInput.value;
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);

    // Perform Calculation
    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;

    // 3. Logic: Categorize the tip (if/else)
    let category = "";
    if (tipPercent < 10) {
        category = "Budget - Every penny counts! 🪙";
    } else if (tipPercent <= 20) {
        category = "Standard - A solid tip. 👍";
    } else {
        category = "Generous - You're making someone's day! 🌟";
    }

    // 4. Output: Display personalized results
    greetingDisplay.innerText = `Hello, ${name}!`;
    totalDisplay.innerText = `Total Bill: $${total.toFixed(2)}`;
    feedbackDisplay.innerText = `Tip Category: ${category}`;
});
