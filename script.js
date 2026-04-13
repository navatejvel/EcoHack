et score = 0;

function suggestFood() {
let food = document.getElementById("foodInput").value.toLowerCase();
let result = "";
let impact = "";

if (food.includes("burger")) {
result = "Try a homemade veggie burger 🌱";
impact = "You can save ~100L water and reduce carbon footprint 🌍";
score += 10;
}
else if (food.includes("pizza")) {
result = "Try fresh homemade pizza with vegetables 🍕";
impact = "Fresh ingredients reduce packaging waste ♻️";
score += 8;
}
else if (food.includes("chips")) {
result = "Try fruits or baked snacks 🍎";
impact = "Less processed food = healthier + eco-friendly 🌿";
score += 7;
}
else {
result = "Choose fresh, organic food 🌿";
impact = "Supports healthy soil and sustainable farming 🌱";
score += 5;
}

document.getElementById("result").innerHTML = result + "<br>" + impact;

// Show score
document.getElementById("score").innerHTML = "Eco Score: " + score;
}
