let balance = 100000;
let history = [];

// UI yangilash
function updateUI() {
  document.getElementById("balance").textContent = balance.toLocaleString() + " UZS";
  let historyBox = document.getElementById("history");
  historyBox.innerHTML = "<h3>📜 Tarix</h3>";
  history.forEach(item => {
    historyBox.innerHTML += `<p>${item.time} — ${item.text}</p>`;
  });
}

// To‘lov qilish
function makePayment() {
  if (balance < 1700) {
    alert("Balans yetarli emas!");
    return;
  }

  balance -= 1700;
  let time = new Date().toLocaleString();
  history.unshift({ time, text: "-1,700 UZS (QR To‘lov)" });
  updateUI();

  // Chek oynasini ko‘rsatish
  document.getElementById("receipt-amount").textContent = "-1,700 UZS";
  document.getElementById("receipt-time").textContent = time;
  document.getElementById("receipt").classList.add("show");
}

// Pul qo‘shish
function addFunds() {
  balance += 50000;
  let time = new Date().toLocaleString();
  history.unshift({ time, text: "+50,000 UZS (To‘ldirish)" });
  updateUI();
}

// Tarixni ko‘rsatish
function showHistory() {
  document.getElementById("history").classList.toggle("hidden");
}

// Chekni yopish
document.getElementById("close-receipt").addEventListener("click", () => {
  document.getElementById("receipt").classList.remove("show");
});

// Dastlabki holat
updateUI();
