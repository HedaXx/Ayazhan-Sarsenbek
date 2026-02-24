# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  
Procrastination Percentage Index (PPI) Calculator

**What does your calculator do?**  
This calculator measures how much someone procrastinates by calculating the percentage of time spent delaying a task compared to the total time they had for it. It takes the hours spent procrastinating and divides them by the total allocated time, then shows the result as a percentage with a fun category (Low Delayer, Moderate Delayer, or High Delayer).  
The goal is to make people aware of their procrastination habits in a light-hearted, motivating way.

---

## 2. Inputs

List and explain all inputs you used.

| Input Name          | Unit   | What it Represents                          | Example     |
|---------------------|--------|---------------------------------------------|-------------|
| Your Name           | —      | User's name for personalized greeting       | Alex        |
| Hours Spent Delaying| hours  | Time wasted before starting the task        | 2.5         |
| Total Time Allocated| hours  | Total time planned for the task             | 5           |

Explain in words:  
I chose these three inputs because name makes the result feel personal and friendly (like "Hey Alex!"), while the two time values are the core of the formula, they are measurable, realistic, and directly show procrastination (delay vs. available time). Without both time numbers, the percentage doesn't make sense.

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  
PPI = (Hours Spent Delaying / Total Time Allocated) × 100



**Steps:**
1. Get input values from HTML form using document.getElementById(...).value
2. Convert delay and total hours from text to numbers using Number(...)
3. Perform calculation: ppi = (delayHours / totalHours) * 100
4. Round to 1 decimal place with ppi.toFixed(1)
5. Store result in variable let ppi

---

## 4. Conditional Logic (if / else)

The program interprets the PPI percentage like this:

- If PPI < 30% → "Low Delayer" (green style)  
- If PPI < 70% → "Moderate Delayer" (yellow style)  
- Otherwise → "High Delayer" (red style)

Why these ranges? 
I chose them myself based on intuition: under 30% means you mostly start on time (productive), 30–70% is typical student-level delay (moderate), over 70% means you spend most of your time procrastinating (high). No real scientific model — just fun categories to motivate people.

## 5. Output


The program shows the user:

- Personalized greeting: "Hey, [Name]!"
- Calculated value: "Your PPI is 40.0% — Moderate Delayer!"
- Category + interpretation with emoji: e.g., "A bit of procrastination... but hey, tomorrow is another day! 😏"
- Extra tip: "Try starting tasks 5 mins earlier next time! 📅"
- The result block changes color (green/yellow/red) depending on category

Everything appears inside the #result div right after clicking the button.
---

## 6. Edge Cases / Unusual Inputs

What happens if:

- User enters zero for delay hours → PPI = 0% → shows "Low Delayer" (correct behavior)
- User enters zero or negative for total hours → alert message and stops calculation
- Delay hours > total hours → alert message ("Delay <= Total")
- User leaves name or any field empty → alert message
- User enters text instead of numbers → isNaN() catches it → alert

The program never crashes — it always shows a friendly alert and stops.

---

## 7. Optional Features (If You Added Any)

- Super fun and creative design: gradient background, pulsing button animation, fade-in & pop-in effects, Google Fonts ('Fredoka One'), emoji everywhere
- Validation messages (alerts) for bad inputs
- Dynamic color change of result box (green/yellow/red)
- Motivational tip at the end
---

## 8. How to Run the Project

1. Download or clone the repository
2. Open index.html in any browser (Chrome, Firefox, etc.)
3. Enter your name, hours delaying, and total hours allocated
4. Click "Calculate My PPI!" button
--

## 9. AI Usage (If Used)

Did you use AI tools?  
Yes (Grok by xAI)

If yes, explain briefly:
- I asked Grok to help create the calculator step-by-step: first ideas for PPI formula, then HTML form, CSS design (fun & creative), JavaScript logic (formula, if/else, output), splitting into 3 files, and explanations.
- Grok gave me full code blocks and explained every line, I copied, tested in browser (downloaded ZIP each time), and asked follow-up questions like "why doesn't it work?", "how to add animation?", "make it more fun".
- I chose the formula (delay / total × 100), ranges (<30%, <70%), messages, emojis, and category names myself.
- I learned how to work on GitHub myself: I forked the repository, created a name-surname branch, edited files directly in the browser, committed changes, downloaded ZIP for the test. That was the hardest and coolest thing — I realized that you can write code on GitHub and immediately see the site.

Now I partly understand every line: addEventListener catches the button click, preventDefault stops the reboot, Number() turns the text into a number, innerHTML inserts HTML into a div, if/else checks the conditions, and CSS makes everything beautiful.

---

## 10. Reflection

This assignment was interesting. I learned how to work with GitHub: fork a repository, create a branch, edit files in the browser, commit, download ZIP and run the site locally, but i did not understand how it all connected before. 
I realized that you can write code directly on the Internet, save it, test it, and you end up with a real working website. 
it was scary and difficult at first ( the code seemed gray, nothing worked), but when i saw how the form calculates the procrastination and shows the result, it was a wow moment. 
