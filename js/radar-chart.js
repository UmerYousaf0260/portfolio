const ctx = document.getElementById("radarChart").getContext("2d");

const skillsData = {
  labels: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React JS",
    "Next Js",
    "Tailwind CSS",
    "SASS",
    "Material UI",
    "Redux",
    "Git & Github",
  ],
  datasets: [
    {
      backgroundColor: "rgba(199, 0, 57, 0.2)",
      data: [90, 85, 80, 75, 75, 85, 80, 85, 75, 70],
      borderColor: "rgba(199, 0, 57, 1)",
      pointBackgroundColor: "rgba(199, 0, 57, 1)",
      pointRadius: 5,
      pointHoverRadius: 8,
    },
  ],
};

const radarChart = new Chart(ctx, {
  type: "radar",
  data: skillsData,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
      },
      r: {
        min: 0,
        max: 100,
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        pointLabels: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        ticks: {
          display: false,
        },
      },
    },
  },
});
