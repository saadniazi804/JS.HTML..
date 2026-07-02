("JavaScript Alerts Assignment")

 Q1 ("Write a script to greet your website visitor using JS alert box.")
```javascript
alert("Welcome to our Website!");
```
 Q2 (" Write a script to display the following message on your web page.")

```javascript
alert("Error! Please enter a valid password.");
```
 Q3 ("Write a script to display the following message on your web page (Hint: Use Line Break").



javascript
alert("Welcome to JS Land...\nHappy Coding!");
``
`
 Q4. ("Write a script to display the following message in sequence.")

javascript
alert("Welcome to JS Land...");
alert("Happy Coding!");
```
Q5 ("Generate the following message through browser's developer console.")

```javascript
console.log("Hello... I can run JS through my web browser's console");
```
 Q6("Make use of alert in your new/existing HTML & CSS project.")

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exercise 6</title>
</head>
<body>

<h1>My Website</h1>

<script>
    alert("Welcome to my Website!");
</script>

</body>
</html>
```


Q7 ("Practice placement of `<script></script>` element.")

a ("Head")

```html
<head>
    <script>
        alert("Script in Head");
    </script>
</head>
```
b("Body before your page's HTML")

```html
<body>
    <script>
        alert("Before HTML");
    </script>

    <h1>My Website</h1>
</body>
```
c ("Body inside your page's HTML")

```html
<body>
    <h1>My Website</h1>

    <script>
        alert("Inside HTML");
    </script>

    <p>Welcome</p>
</body>
```
 d ("Body after your page's HTML")

```html
<body>
    <h1>My Website</h1>
    <p>Welcome</p>

    <script>
        alert("After HTML");
    </script>
</body>
// Q1. Declare a variable called userName.
var userName;

// Q2. Declare a variable called myName & assign your full name.
var myName = "Saad Malik";

// Q3.
// a. Declare a JS variable titled message.
// b. Assign "HELLO WORLD" to variable message.
// c. Display the message in alert box.
var message = "HELLO WORLD";
alert(message);

// Q4. Save student's bio data in JS variables and show the data in alert boxes.
var studentName = "Jhone Doe";
var age = "15 years old";
var course = "Certified Mobile Application Development";

alert(studentName);
alert(age);
alert(course);

// Q5. Display the following alert using one JS variable.
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

// Q6. Declare a variable called email and show message in alert box.
var email = "example@example.com";
alert("My email address is " + email);

// Q7. Declare a variable called book and display message.
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// Q8. Display this in browser through JS.
document.write("Yah! I can write HTML content through JavaScript");

// Q9. Store following string in a variable and show in alert and browser through JS.
var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);
document.write("<br>" + design)
// ===============================
// Chapter 3 - Variables for Numbers
// ===============================

// Question 1:
// Declare a variable called age & assign to it your age.
// Show your age in an alert box.

var age = 15;
alert("Q1: I am " + age + " years old");


// ============================================
// Question 2:
// Declare & initialize a variable to keep track
// of how many times a visitor has visited a web page.
// Show his/her number of visits.
// ============================================

var visitCount = 14;
alert("Q2: You have visited this site " + visitCount + " times");


// ============================================
// Question 3:
// Declare a variable called birthYear & assign
// it your birth year. Show the following message
// in your browser.
// ============================================

var birthYear = 2011;

document.write("<h3>Question 3</h3>");
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear);
document.write("<hr>");


// ============================================
// Question 4:
// A visitor visits an online clothing store
// www.xyzClothing.com.
// Store Visitor's name, Product title & Quantity.
// Show the required message.
// ============================================

var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;

document.write("<h3>Question 4</h3>");
document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store");
// ===============================
// Chapter 4 - Variable Names
// ===============================

// Question 1:
// Declare 3 variables in one statement.

var firstName, lastName, age;


// ============================================
// Question 2:
// Declare 5 legal & 5 illegal variable names.
// ============================================

// Legal Variable Names:
// myName
// _user
// $price
// user1
// first_Name

// Illegal Variable Names:
// 1name
// my-name
// var
// user name
// @age


// ============================================
// Question 3:
// Display this in your browser.
// ============================================

document.write("<h1>Rules for naming JS variables</h1>");

document.write("Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>$</b> and <b>_</b>.<br>");
document.write("For example: <b>$my_1stVariable</b><br><br>");

document.write("Variable names must begin with a <b>letter</b>, <b>$</b> or <b>_</b>.<br>");
document.write("For example: <b>$name</b>, <b>_name</b> or <b>name</b><br><br>");

document.write("Variable names are <b>case sensitive</b>.<br><br>");

document.write("Variable names should not be JS <
// ======================
// Chapter 5 - Math Expressions
// ======================

// Q1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write("<h3>Question 1</h3>");
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<hr>");


// Q2
var a = 10;
var b = 5;

document.write("<h3>Question 2</h3>");
document.write("Addition: " + (a + b) + "<br>");
document.write("Subtraction: " + (a - b) + "<br>");
document.write("Multiplication: " + (a * b) + "<br>");
document.write("Division: " + (a / b) + "<br>");
document.write("Modulus: " + (a % b) + "<hr>");


// Q3
var value;

document.write("<h3>Question 3</h3>");
document.write("Value after variable declaration is: " + value + "<br>");

value = 5;
document.write("Initial value: " + value + "<br>");

value++;
document.write("Value after increment is: " + value + "<br>");

value += 7;
document.write("Value after addition is: " + value + "<br>");

value--;
document.write("Value after decrement is: " + value + "<br>");

document.write("The remainder is: " + (value % 3) + "<hr>");


// Q4
var ticketPrice = 600;
var totalCost = ticketPrice * 5;

document.write("<h3>Question 4</h3>");
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR<hr>");


// Q5
var table = 4;

document.write("<h3>Question 5</h3>");

document.write(table + " x 1 = " + (table * 1) + "<br>");
document.write(table + " x 2 = " + (table * 2) + "<br>");
document.write(table + " x 3 = " + (table * 3) + "<br>");
document.write(table + " x 4 = " + (table * 4) + "<br>");
document.write(table + " x 5 = " + (table * 5) + "<br>");
document.write(table + " x 6 = " + (table * 6) + "<br>");
document.write(table + " x 7 = " + (table * 7) + "<br>");
document.write(table + " x 8 = " + (table * 8) + "<br>");
document.write(table + " x 9 = " + (table * 9) + "<br>");
document.write(table + " x 10 = " + (table * 10) + "<hr>");


// Q6
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write("<h3>Question 6</h3>");
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;

document.write(fahrenheit2 + "°F is " + celsius2 + "°C<hr>");


// Q7
var priceItem1 = 650;
var quantityItem1 = 3;
var priceItem2 = 100;
var quantityItem2 = 7;
var shippingCharges = 100;

var totalOrder =
    (priceItem1 * quantityItem1) +
    (priceItem2 * quantityItem2) +
    shippingCharges;

document.write("<h3>Question 7</h3>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("<b>Total Cost of your order is " + totalOrder + "</b>");
// Question 1:
// Write a program that takes a character (number or string)
// and checks whether the given input is a number,
// uppercase letter or lowercase letter.

var input = prompt("Enter a character:");
var ascii = input.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    alert("Number");
} else if (ascii >= 65 && ascii <= 90) {
    alert("Uppercase Letter");
} else if (ascii >= 97 && ascii <= 122) {
    alert("Lowercase Letter");
} else {
    alert("Special Character");
}// Question 2:
// Write a JavaScript program that accepts two integers
// and displays the larger. Also show if the two integers are equal.

var num1 = +prompt("Enter first integer:");
var num2 = +prompt("Enter second integer:");

if (num1 > num2) {
    alert(num1 + " is larger");
} else if (num2 > num1) {
    alert(num2 + " is larger");
} else {
    alert("Both numbers are equal");
}// Question 3:
// Write a program that takes input a number from the user
// and states whether the number is positive, negative or zero.

var number = +prompt("Enter a number:");

if (number > 0) {
    alert("Positive Number");
} else if (number < 0) {
    alert("Negative Number");
} else {
    alert("Zero");
}// Question 4:
// Write a program that takes a character (string of length 1)
// and returns true if it is a vowel, false otherwise.

var ch = prompt("Enter a character:");

if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" ||
    ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
    alert(true);
} else {
    alert(false);
}// Question 5:
// Store the correct password in a variable.
// Ask the user to enter a password.
// If empty, display "Please enter your password".
// If correct, display "Correct!".
// Otherwise, display "Incorrect password".

var correctPassword = "admin123";
var userPassword = prompt("Enter your password:");

if (userPassword === "") {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password");
}// Question 6:
// Fix the following if/else statement.

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
 greeting = "Good evening"
alert"greeting"