// Procrastination Index Calculator
// Get user inputs, calculate procrastination percentage, classify results

document.getElementById('calculatorForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // 1. Get user inputs
  const timeAvailable = parseFloat(document.getElementById('timeAvailable').value);
  const timeProcrastinated = parseFloat(document.getElementById('timeProcrastinated').value);
  
  // Validation
  if (timeAvailable <= 0 || timeProcrastinated < 0) {
    alert('Please enter valid time values');
    return;
  }
  
  if (timeProcrastinated > timeAvailable) {
    alert('Procrastination time cannot exceed available time');
    return;
  }
  
  // 2. Perform calculations
  const timeToWork = timeAvailable - timeProcrastinated;
  const procrastinationPercentage = (timeProcrastinated / timeAvailable) * 100;
  
  // 3. Use if/else to classify results
  let classification = '';
  if (procrastinationPercentage <= 20) {
    classification = 'low';
    classificationText = '✅ EXCELLENT - Minimal Procrastination';
  } else if (procrastinationPercentage <= 50) {
    classification = 'medium';
    classificationText = '⚠️ MODERATE - Some Procrastination';
  } else {
    classification = 'high';
    classificationText = '❌ SEVERE - Heavy Procrastination';
  }
  
  // 4. Display results in #output
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `
    <div class="result ${classification}">
      <h2>${classificationText}</h2>
      <p><strong>Procrastination Index: ${procrastinationPercentage.toFixed(1)}%</strong></p>
      <hr style="opacity: 0.5;">
      <p>⏱️ Time Available: <strong>${timeAvailable}</strong> hours</p>
      <p>😴 Time Procrastinated: <strong>${timeProcrastinated}</strong> hours</p>
      <p>⚡ Time Actually Worked: <strong>${timeToWork.toFixed(1)}</strong> hours</p>
    </div>
  `;
});