let ddoChart = null;

function check() {
  const form = document.opros;

  const answered = document.querySelectorAll('input[type="radio"]:checked').length;

  if (answered !== 30) {
    alert("Пожалуйста, ответьте на все 30 вопросов. Отвечено: " + answered + " из 30.");
    // подсветим первый неотвеченный блок
    const allQuestions = document.querySelectorAll('.question');
    for (const q of allQuestions) {
      if (!q.querySelector('input[type="radio"]:checked')) {
        q.scrollIntoView({ behavior: 'smooth', block: 'center' });
        q.style.borderColor = 'var(--pink)';
        setTimeout(() => { q.style.borderColor = ''; }, 2000);
        break;
      }
    }
    return;
  }

  let hum = 0, prir = 0, tech = 0, znak = 0, hud = 0;

  for (let vopr = 1; vopr <= 30; vopr++) {
    const name = "vopr" + vopr;
    const n = form.elements[name].value;

    if (n === "A") prir++;
    else if (n === "B") tech++;
    else if (n === "C") znak++;
    else if (n === "D") hud++;
    else if (n === "E") hum++;
  }

  if (ddoChart) ddoChart.destroy();

  const ctx = document.getElementById("chart");

  ddoChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Природа (П)",
        "Техника (Т)",
        "Знаковая система (З)",
        "Художественный образ (Х)",
        "Человек (Ч)"
      ],
      datasets: [{
        label: "Баллов",
        data: [prir, tech, znak, hud, hum],
        backgroundColor: [
          "rgba(22, 166, 122, 0.65)",
          "rgba(255, 122, 24, 0.65)",
          "rgba(108, 43, 217, 0.65)",
          "rgba(247, 37, 133, 0.65)",
          "rgba(66, 20, 134, 0.65)"
        ],
        borderRadius: 10,
        borderWidth: 0
      }]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          beginAtZero: true,
          min: 0,
          max: 12,
          ticks: { stepSize: 1, precision: 0, color: "#7d758c" },
          grid: { color: "#ebe6f3" }
        },
        y: {
          grid: { display: false },
          ticks: { color: "#241b35", font: { weight: 700 } }
        }
      }
    }
  });

  const result = document.getElementById("result");
  result.style.display = "block";
  setTimeout(() => {
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}