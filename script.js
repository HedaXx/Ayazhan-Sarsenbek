document.getElementById("ppiForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  // Get inputs
  let name = document.getElementById("name").value.trim();
  let delayHours = Number(document.getElementById("delayHours").value);
  let totalHours = Number(document.getElementById("totalHours").value);

  // Validation
  if (!name || isNaN(delayHours) || isNaN(totalHours) || delayHours < 0 || totalHours <= 0 || delayHours > totalHours) {
    alert("Please enter valid numbers: Delay hours >= 0, Total hours > 0, and Delay <= Total.");
    return;
  }

  // Calculate PPI
  let ppi = (delayHours / totalHours) * 100;
  ppi = ppi.toFixed(1); // One decimal place

  // Categories with if/else
  let category = "";
  let className = "";
  let message = "";
  if (ppi < 30) {
    category = "Low Delayer";
    className = "low";
    message = "You're a productivity ninja! Keep it up! 🥷";
  } else if (ppi < 70) {
    category = "Moderate Delayer";
    className = "medium";
    message = "A bit of procrastination... but hey, tomorrow is another day! 😏";
  } else {
    category = "High Delayer";
    className = "high";
    message = "Procrastination pro! Time to beat those delays? ⏳";
  }

  // Output result
  document.getElementById("result").innerHTML = `
    <h2>Hey, ${name}!</h2>
    <p>Your PPI is <strong>${ppi}%</strong> — ${category}!</p>
    <p>${message}</p>
    <p>Tip: Try starting tasks 5 mins earlier next time! 📅</p>
  `;
  document.getElementById("result").classList.add(className); // Add color class
});
