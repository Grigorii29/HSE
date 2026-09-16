let oppChart = null;

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

  let hud = 0, hum = 0, mat = 0, fiz = 0, ym = 0, tech = 0;

  for (let vopr = 1; vopr <= 30; vopr++) {
    const name = "vopr" + vopr;
    const n = form.elements[name].value;

    if (n.includes("A")) hud += n.length;
    else if (n.includes("B")) hum += n.length;
    else if (n.includes("C")) mat += n.length;
    else if (n.includes("D")) fiz += n.length;
    else if (n.includes("E")) ym += n.length;
    else if (n.includes("F")) tech += n.length;
  }

  if (oppChart) oppChart.destroy();

  const ctx = document.getElementById("chart");

  oppChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Сфера искусства",
        "Сфера технических интересов",
        "Сфера работы с людьми",
        "Сфера умственного труда",
        "Сфера физического труда",
        "Сфера материальных интересов"
      ],
      datasets: [{
        label: "Баллов",
        data: [hud, tech, hum, ym, fiz, mat],
        backgroundColor: [
          "rgba(247, 37, 133, 0.65)",
          "rgba(255, 122, 24, 0.65)",
          "rgba(66, 20, 134, 0.65)",
          "rgba(108, 43, 217, 0.65)",
          "rgba(22, 166, 122, 0.65)",
          "rgba(239, 39, 125, 0.5)"
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
          max: 30,
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