# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  
Tip Calculator

**What does your calculator do?**  

This calculator helps you figure out tips at restaurants or cafes and see the total bill fast. Just enter your name, the bill amount, and the tip percentage you want to give. It figures out the tip and total, and then it tells you if your tip is Budget, Standard, or Generous with some fun comments. It solves that everyday problem of not having to think, What's 15% of 5000? and being able to pick the right tip amount.

---

## 2. Inputs

List and explain all inputs you used.

| Input Name          | Unit   | What it Represents                          | Example     |
|---------------------|--------|---------------------------------------------|-------------|
| Your Name           | —      | User's name for personalized greeting       | Amina       |
| Hours Spent Delaying| $      | The original amount of the bill (before tip)| 45.50       |
| Total Time Allocated| %      | The percentage of the bill the user wants to tip | 15 or 20      |

Explain in words:  
I picked these three inputs because they're the most useful and typical things you need to figure out a tip, particularly in places like the United States or tourist areas where tipping is the norm. The name lets you personalize the greeting, which is why I included a Hello, [Name] message. The bill amount is the starting point for figuring out any tip. The tip percentage is what people usually change based on how good the service was (like 10%, 15%, or 20%). If the calculator didn't use these exact inputs, it wouldn’t be very helpful or complete.

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  
Tip amount = bill × (tip percentage / 100)
Total bill = bill + tip amount



**Steps:**
1. Get the values from the HTML input fields using document.getElementById(...).value
2. Convert the bill and tip percentage from strings to numbers using parseFloat(...) (because .value always returns a string)
3. Calculate the tip: tipAmount = bill * (tipPercent / 100)
4. Calculate the final total: total = bill + tipAmount
5. Round the total to two decimal places using .toFixed(2) so it looks like real money ($45.67 instead of $45.666666)
6. Store the results in variables (tipAmount, total, category)
---

## 4. Conditional Logic (if / else)

How the program interprets the result:

- If tip percentage < 10%   → "Budget - Every penny counts! 🪙"
- If 10% ≤ tip percentage ≤ 20% → "Standard - A solid tip. 👍"
- If tip percentage > 20%   → "Generous - You're making someone's day! 🌟"

Why these ranges? 
These ranges reflect real-world tipping norms (especially in Western countries):

Below 10% is considered low or stingy (sometimes even rude).
10–20% is the normal/expected range (15–20% is very common in restaurants).
Above 20% shows extra generosity (great service, special occasion, etc.).
I chose simple, clear boundaries so the if/else logic is easy to read and explain. They are just practical social guidelines.
## 5. Output

The program displays the following to the user (all inside the #result div):

Personalized greeting: Hello, [name]! (in bold dark text)
Calculated total: Total Bill: $[total] (large, green text)
Tip category and message: Tip Category: [category] (italic gray text with emoji)

Everything appeares neatly formatted below the button right after clicking "Calculate Total". No console output is used, all results are visible directly on the page. 

---

## 6. Edge Cases / Unusual Inputs

What happens if:

- Name is empty → Greeting becomes "Hello, !" (works, but looks incomplete)
- Bill = 0 or empty → parseFloat("") or 0 → tip = 0 → total = 0 → shows "$0.00" (no crash, but not very useful)
- Negative bill or tip percentage → Calculation runs → can produce negative tip or total → shows strange result (e.g. "Total Bill: $-10.00") → looks wrong
- Tip percentage = 0 → Tip = 0 → category = "Budget" → correct and logical
- Very high tip (e.g. 100%) → Tip = full bill amount → total = 2× bill → category = "Generous" → works correctly
- Non-number input (somehow bypassed) → parseFloat("abc") → NaN → total = NaN → displays "Total Bill: $NaN" (bug)
  
Current handling: No strong validation yet — if inputs are invalid, the page shows NaN or weird numbers.

---

## 7. Optional Features (If You Added Any)

- Personalized greeting using the user’s name
- Tip category classification with funny messages and emojis
- Clean, modern card-style design (white container, shadow, hover effect on button)
- Green highlighted total amount for visual emphasis
- Smooth color transition on button hover
---

## 8. How to Run the Project

1. Download or clone the repository
2. Open index.html in any browser (Chrome, Firefox, etc.)
3. Enter your name, the bill amount, and tip percentage
4. Click the "Calculate Total" button
5. View the greeting, total bill, and tip category below the button
--

## 9. AI Usage (If Used)

Did you use AI tools?  
Yes (Grok by xAI, Gemini )

If yes, explain briefly:
- firstly, i watched this video in youtube, to understand the concept of calculator(https://youtu.be/0pLyiQdIsw4?si=AMO1V819Qdh1Oz3B);
- after watching, I asked Gemini for explanations of certain concepts, code structure suggestions, and help fixing small syntax errors while building the calculator.
- at the very end, after I had the basic working version, I asked Grok to review the code, suggest improvements (especially better explanations for edge cases and report structure), and help write/correct parts of this report so it would be clear and complete.

What i did myselF:
Decided on the tip calculator theme
Wrote most of the HTML structure
Created the calculation logic and if/else categories
Chose colors, layout, and messages
Tested the calculator many times

I now fully understand lines of the code and almost can explain how it all connects (HTML → CSS → JS).

---

## 10. Reflection

This assignment was interesting. I learned how to work with GitHub: fork a repository, create a branch, edit files in the browser, commit, download ZIP and run the site locally, but i did not understand how it all connected before. And especially I learned how to combine HTML (page structure), CSS (styling), and JavaScript (logic) into one functional mini-website. I now clearly understand why we need parseFloat, how event listeners work, why <script> goes at the end, and why thinking about bad inputs (edge cases) is important — otherwise the program can show "NaN" and break.
I realized that you can write code directly on the Internet, save it, test it, and you end up with a real working website. 
it was scary and difficult at first ( the code seemed gray, nothing worked), but when i saw how the form calculates the procrastination and shows the result, it was a wow moment. 
