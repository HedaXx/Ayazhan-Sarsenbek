# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  
Taxi Fare Calculator

**What does your calculator do?**  
This calculator calculates the approximate cost of a taxi ride in Almaty.The user enters their name, distance in kilometers, and approximate time in minutes. The program calculates the price using a simple formula and tells you whether the trip is cheap, normal, or expensive.  

---

## 2. Inputs

List and explain all inputs you used.

| Input Name     | Unit     | What it Represents                  | Example     |
|----------------|----------|-------------------------------------|-------------|
| Имя            | —        | Имя пользователя                    | Алишер      |
| Расстояние     | км       | Длина поездки                       | 5.5         |
| Время          | минуты   | Примерное время в пути              | 15          |

Explain in words:  
I chose these three inputs because they are the most important for calculating the price of a taxi: name to make the greeting personal, distance and time because the price usually depends on them (as in InDrive or Yandex Go). Without distance and time, it is impossible to calculate the price, and the name makes the conclusion friendly.

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  
price = 500 + (distance × 100) + (time × 20)



**Steps:**
1. Get input values from HTML  
2. I will convert distance and time into numbers using Number(...)
3. I will calculate the price using the formula above
4. Save the result to the let price variable

---

## 4. Conditional Logic (if / else)

The program looks at the price and gives a verdict:

- If the price is < 1500 → "Cheap! 😊" (good class — green)
- If the price is < 3000 → "OK, you can go 🚕" (ok class — yellow)
- Otherwise → "Too expensive... Maybe another option? 🚶" (warning class — orange)

Why these ranges? 
I chose these borders myself because in Almaty a short trip (5 km, 10 minutes) usually costs 1000-1500 tenge, an average trip is up to 2500-3000 tenge, and a long trip or in traffic jams is more expensive. This is approximate, so that it is clear when the price seems favorable.


## 5. Output


The program shows the user:

- Personal greeting: "Hello, [name]!"
- The calculated price: "Approximate price: 1300 tenge" (in bold)
- The verdict with color: for example, "Cheap! ," in the green block

Everything is displayed in a div with id="result" right on the page.
---

## 6. Edge Cases / Unusual Inputs

What happens if:

- If the user has entered 0 or a negative number → alert ("Enter a name and normal numbers > 0") and nothing counts (return).
- If you left the field empty → the same applies to alert.
- If you entered letters instead of numbers → isNaN() catches it and shows alert.
  
The program doesn't crash, it just doesn't count and asks you to enter it correctly.

---

## 7. Optional Features (If You Added Any)

- I added emojis in my messages to make it more fun.
- Made the button orange
---

## 8. How to Run the Project

1. Download the repository as ZIP or clone
2. Open the file index.html in any browser (Chrome, Safari, etc.)
3. Enter the name, distance, and time.
4. Click the "Calculate price" button

--

## 9. AI Usage (If Used)

Did you use AI tools?  
Yes

If yes, explain briefly:
- I asked Grok to help with code examples: how to make a form in HTML, how to enable button processing (submit), how to output the result in div, how to write if/else for categories.
- Grok gave me ready-made pieces of code (sometimes whole blocks), explained each line and helped me fix errors (for example, when I forgot e.preventDefault() and the page was reloaded).
- I came up with the price formula myself (500 + 100 × km + 20 × min), ranges for the verdict (<1500 — cheap, <3000 — normal, otherwise — expensive), text messages and emojis.
- I have tested the code in the browser many times: downloaded ZIP, opened index.html She entered numbers, looked at what wasn't working, and returned to Grok with questions like "why isn't she counting?" or "how to make the button orange."
- I learned how to work on GitHub myself: I forked the repository, created a name-surname branch, edited files directly in the browser, committed changes, downloaded ZIP for the test. That was the hardest and coolest thing — I realized that you can write code on GitHub and immediately see the site.

Now I partly understand every line: addEventListener catches the button click, preventDefault stops the reboot, Number() turns the text into a number, innerHTML inserts HTML into a div, if/else checks the conditions, and CSS makes everything beautiful.

---

## 10. Reflection

This assignment was interesting. I learned how to work with GitHub: fork a repository, create a branch, edit files in the browser, commit, download ZIP and run the site locally, but i did not understand how it all connected before. 
I realized that you can write code directly on the Internet, save it, test it, and you end up with a real working website. 
it was scary and difficult at first ( the code seemed gray, nothing worked), but when i saw how the form calculates the price and shows the result. it was a wow moment. 
