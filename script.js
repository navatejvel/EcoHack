let score = 0;

function suggestFood() {
let food = document.getElementById("foodInput").value.toLowerCase();

// Handle empty input
if (food.trim() === "") {
document.getElementById("result").innerHTML = "⚠️ Please enter a food item";
document.getElementById("score").innerHTML = "";
return;
}

let result = "";
let impact = "";
let why = "Small food choices can reduce carbon footprint significantly 🌍";
let score = 0;

if (food.includes("burger")) {
result = "🌱 Try a homemade veggie burger";
impact = "You can save ~100L water and reduce carbon footprint 🌍";
score = 10;
}
else if (food.includes("pizza")) {
result = "🍕 Try fresh homemade pizza with vegetables";
impact = "Fresh ingredients reduce packaging waste ♻️";
score = 8;
}
else if (food.includes("chips")) {
result = "🍎 Try fruits or baked snacks";
impact = "Less processed food = healthier + eco-friendly 🌿";
score = 6;
}
else if (food.includes("pasta")) {
result = "🌾 Try whole wheat pasta with veggies";
impact = "Better nutrition + lower environmental impact 🌍";
score = 9;
}
else if (food.includes("rice")) {
result = "🍚 Choose locally sourced or brown rice";
impact = "Supports local farmers 🌾";
score = 8;
}
else {
result = "🌿 Choose fresh, organic food";
impact = "Supports healthy soil and sustainable farming 🌱";
score = 7;
}

// Show result + impact + why
document.getElementById("result").innerHTML =
result + "<br>" + impact + "<br><i>" + why + "</i>";

// Show score
let scoreElement = document.getElementById("score");
scoreElement.innerHTML = "Eco Score: " + score;

// Color logic
if (score >= 8) {
scoreElement.style.color = "green";
} else if (score >= 6) {
scoreElement.style.color = "orange";
} else {
scoreElement.style.color = "red";
}
}
