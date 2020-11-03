new Chart(document.getElementById("pie-chart-4"), {
    type: 'pie',
    data: {
      labels: ["ქალი", "კაცი"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#8e5ea2", "#3e95cd"],
        data: [526, 2478]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'ახალციხის ლივა'
      },
      legend: {
          display: false
      }
    }
});