new Chart(document.getElementById("pie-chart-3"), {
    type: 'pie',
    data: {
      labels: ["ქალი", "კაცი"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#8e5ea2", "#3e95cd"],
        data: [5267, 2478]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'არტანუჯის ლივა'
      },
      legend: {
          display: false
      }
    }
});