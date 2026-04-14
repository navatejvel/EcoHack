const foodData = {
  fried: ["fries", "fried chicken"],
  fast: ["burger", "pizza"],
  processed: ["chips", "instant noodles"],
  meat: ["beef", "bacon"],
  dairy: ["cheese", "ice cream"],
  snacks: ["cookies", "candy"],
  drinks: ["cola", "energy drink"],
  healthy: ["salad", "fruits"]
};

function updateFoods() {
  let category = document.getElementById("category").value;
  let foodSelect = document.getElementById("foodOptions");

  foodSelect.innerHTML = "<option>Select Food</option>";

  if (!category) return;

  foodData[category].forEach(food => {
    let option = document.createElement("option");
    option.value = food;
    option.textContent = food;
    foodSelect.appendChild(option);
  });
}

function analyzeFood() {
  let food = document.getElementById("foodOptions").value;

  if (food === "Select Food") {
    document.getElementById("resultBox").innerHTML = "⚠️ Please select a food.";
    return;
  }

  let score = 0;
  let impact = "";
  let suggestions = "";

  if (food === "burger" || food === "beef" || food === "bacon") {
    score = 3;
    impact = "High carbon footprint due to meat production.";
    suggestions = "Veggie burger 🌱, Mushroom sandwich 🍄, Lentil wrap 🫘";
  }
  else if (food === "pizza" || food === "cheese") {
    score = 5;
    impact = "Dairy increases emissions.";
    suggestions = "Veggie pizza 🍕, Vegan cheese 🧀, Flatbread 🌾";
  }
  else if (food === "chips" || food === "cookies" || food === "candy") {
    score = 6;
    impact = "Processed food + packaging waste.";
    suggestions = "Fruits 🍎, Nuts 🥜, Homemade snacks 🍪";
  }
  else if (food === "fries" || food === "fried chicken") {
    score = 4;
    impact = "Uses excess oil and energy.";
    suggestions = "Baked fries 🔥, Air-fried 🌬️, Grilled 🍗";
  }
  else if (food === "cola" || food === "energy drink") {
    score = 5;
    impact = "Sugary + plastic waste.";
    suggestions = "Juice 🧃, Lemon water 🍋, Herbal drinks 🌿";
  }
  else if (food === "salad" || food === "fruits") {
    score = 9;
    impact = "Very eco-friendly and healthy.";
    suggestions = "Keep it up ✅, Local produce 🧺, Variety 🌈";
  }
  else {
    score = 7;
    impact = "Moderate environmental impact.";
    suggestions = "Fresh food 🌿, Less packaging ♻️, Home cooking 🍳";
  }

  let color = score >= 8 ? "green" : score >= 5 ? "orange" : "red";

  document.getElementById("resultBox").innerHTML = `
    <h3>🌱 Food Analysis</h3>

    <p><strong>Eco Score: ${score}/10</strong></p>
    <div class="score-bar">
      <div class="fill" id="fillBar" style="background:${color};"></div>
    </div>

    <p><strong>Impact:</strong> ${impact}</p>
    <p><strong>Better Options:</strong> ${suggestions}</p>
  `;

  setTimeout(() => {
    document.getElementById("fillBar").style.width = (score * 10) + "%";
  }, 100);
}
