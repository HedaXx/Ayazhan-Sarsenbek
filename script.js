document.getElementById("ppiForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let delayHours = Number(document.getElementById("delayHours").value);
  let totalHours = Number(document.getElementById("totalHours").value);

  if (!name || isNaN(delayHours) || isNaN(totalHours) || delayHours < 0 || totalHours <= 0 || delayHours > totalHours) {
    alert("Please enter valid values:\n• Name not empty\n• Delay ≥ 0\n• Total > 0\n• Delay ≤ Total");
    return;
  }

  let ppi = (delayHours / totalHours) * 100;
  ppi = ppi.toFixed(1);

  let category = "";
  let className = "";
  let message = "";

  if (ppi < 30) {
    category = "Low Delayer";
    className = "low";
    message = "You're basically a time wizard 🧙‍♂️ Keep melting those clocks the good way!";
  } else if (ppi < 70) {
    category = "Moderate Delayer";
    className = "medium";
    message = "Classic student mode: half melt, half panic 😅 You got this... tomorrow?";
  } else {
    category = "High Delayer";
    className = "high";
    message = "Master of melting time! ⏳ The clocks are crying... let's fix that!";
  }

  document.getElementById("result").innerHTML = `
    <h2>Hey ${name.toUpperCase()}!</h2>
    <p>Your PPI is <strong>${ppi}%</strong></p>
    <p class="category-title">${category}</p>
    <p>${message}</p>
    <p class="tip">Tip: Start 5 minutes earlier — watch the clocks stop melting! 🕰️</p>
  `;

  // Remove old classes and add new one
  document.getElementById("result").className = "result " + className;
});
