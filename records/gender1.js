new Chart(document.getElementById("pie-chart-1"), {
    type: 'pie',
    data: {
      labels: ["ქალი", "კაცი"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#8e5ea2", "#3e95cd"],
        data: [2478,5267]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'ოლთის ლივა'
      },
      legend: {
          display: false
      }
    }
});