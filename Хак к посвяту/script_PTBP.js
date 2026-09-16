let ptbpChart = null;

function check() {
  const form = document.opros;

  const answered = document.querySelectorAll('input[type="radio"]:checked').length;

  if (answered !== 30) {
    alert("Пожалуйста, ответьте на все 30 вопросов. Отвечено: " + answered + " из 30.");
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

  const hud =
    parseInt(form.elements["hud9"].value) +
    parseInt(form.elements["hud10"].value) +
    parseInt(form.elements["hud12"].value) +
    parseInt(form.elements["hud17"].value) +
    parseInt(form.elements["hud24"].value) +
    parseInt(form.elements["hud30"].value);

  const hum =
    parseInt(form.elements["hum1"].value) +
    parseInt(form.elements["hum6"].value) +
    parseInt(form.elements["hum15"].value) +
    parseInt(form.elements["hum20"].value) +
    parseInt(form.elements["hum23"].value) +
    parseInt(form.elements["hum27"].value);

  const prir =
    parseInt(form.elements["prir3"].value) +
    parseInt(form.elements["prir4"].value) +
    parseInt(form.elements["prir7"].value) +
    parseInt(form.elements["prir18"].value) +
    parseInt(form.elements["prir25"].value) +
    parseInt(form.elements["prir28"].value);

  const tech =
    parseInt(form.elements["tech2"].value) +
    parseInt(form.elements["tech5"].value) +
    parseInt(form.elements["tech13"].value) +
    parseInt(form.elements["tech16"].value) +
    parseInt(form.elements["tech21"].value) +
    parseInt(form.elements["tech26"].value);

  const znak =
    parseInt(form.elements["znak8"].value) +
    parseInt(form.elements["znak11"].value) +
    parseInt(form.elements["znak14"].value) +
    parseInt(form.elements["znak19"].value) +
    parseInt(form.elements["znak22"].value) +
    parseInt(form.elements["znak29"].value);

  if (ptbpChart) ptbpChart.destroy();

  const ctx = document.getElementById("chart");

  ptbpChart = new Chart(ctx, {
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
          beginAtZero: false,
          min: -8,
          max: 8,
          ticks: { stepSize: 2, precision: 0, color: "#7d758c" },
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