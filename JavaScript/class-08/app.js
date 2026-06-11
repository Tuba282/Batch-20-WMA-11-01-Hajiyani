var Fruits = [
  "Apple",
  "Banana",
  "Mongo",
  ["Strawberry", "BlueBerry", "BlackBerry"],
  "Kiwi",
  "Peach",
  "Orange",
];

// console.log(Fruits.length);
// console.log(Fruits[3]);

// console.log(Fruits[Fruits.length-1]);

// Modify

// Fruits[3] = "WaterMelon";
// console.log(Fruits);

// Fruits[3][1] = "RaspBerry";
// console.log(Fruits);

// ------- Template Literals ------------------

var myName = "Ramsha";
var year = 10;
var garde = "A Grade";

console.log(
  `My Name is ${myName} , I am ${year} and got ${garde} in class 10.`,
);

console.log(
  "My Name is " +
    myName +
    " , I am " +
    year +
    " and got " +
    garde +
    " in class 10.",
);

// ---------------------
var name = (name = prompt("Enter Your Name : "));
var firstSubject = prompt("Enter First Subject : ");
var secondSubject = prompt("Enter Second Subject : ");
var thirdSubject = prompt("Enter Third Subject : ");

var total = 100;

var firstObt = +prompt("Enter First Subject Marks : ");
var secondObt = +prompt("Enter Second Subject Marks : ");
var thirdObt = +prompt("Enter Third Subject Marks : ");

var totalObt = firstObt + secondObt + thirdObt;

var percent = (totalObt / 300) * 100;

var grade = "";
var isPass = false; // flag concept

if (percent > 0 && percent < 100) {
  if (percent >= 80 && percent <= 90) {
    grade = "A+";
    isPass = true;
  } else if (percent >= 70 && percent <= 80) {
    grade = "A";
    isPass = true;
  } else if (percent >= 60 && percent <= 70) {
    grade = "B";
    isPass = true;
  } else if (percent >= 50 && percent <= 60) {
    grade = "C";
    isPass = true;
  } else if (percent >= 45) {
    grade = "D";
    isPass = true;
  } else {
    grade = "F";
  }
} else {
  alert("Invalid Input.....");
}

var check = ""; // flag concept

if (isPass){
    check = "Pass"
}else{
    
    check = "Fail"
}

document.write(`
    <div class="marksheet-container">
    <h2>Academic Statement of Marks</h2>

    <!-- Student Information Block -->
    <div class="student-info">
        <div class="info-item"><strong>Student Name:</strong> ${name}</div>
        <div class="info-item"><strong>Roll Number:</strong> 1024589</div>
        <div class="info-item"><strong>Class / Grade:</strong> Grade 10</div>
        <div class="info-item"><strong>Academic Year:</strong> 2035-2026</div>
    </div>

    <!-- Marksheet Table -->
    <table>
        <thead>
            <tr>
                <th>Subject Name</th>
                <th>Maximum Marks</th>
                <th>Passing Marks</th>
                <th>Marks Obtained</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${firstSubject}</td>
                <td>${total}</td>
                <td>35</td>
                <td>${firstObt}</td>
            </tr>
            <tr>
                <td>${secondSubject}</td>
                <td>${total}</td>
                <td>35</td>
                <td>${secondObt}</td>
            </tr>
            <tr>
                <td>${thirdSubject}</td>
                <td>${total}</td>
                <td>35</td>
                <td>${thirdObt}</td>
            </tr>
            <!-- Total Row -->
            <tr class="total-row">
                <td>Total</td>
                <td>${total * 3}</td>
                <td>${35 * 3}</td>
                <td>${totalObt}</td>
            </tr>
        </tbody>
    </table>

    <!-- Final Analytics Summary -->
    <div class="summary-box">
        <div>
            <strong>Percentage:</strong> ${percent}%
        </div>
        <div>
            <strong>Grade:</strong> ${grade}
        </div>
        <div class="result-status">
            Final Status: <span class="pass-text">${check}</span>
        </div>
    </div>
</div>
    
    
    `);
