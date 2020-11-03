new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["ოლთის ლივა", "დიდი არტაანის ლივა", "არტანუჯის ლივა", "თორთუმის ლივა"],
      datasets: [
        {
          label: "ქრისტიანი",
          backgroundColor: "#3e95cd",
          data: [133,221,783,2478]
        }, {
          label: "მუსლიმი",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734]
        }, {
            label: "იუდეველი",
            backgroundColor: "#E58F61",
            data: [40,54,67,73]
          }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'კონფესიები ლივების დონეზე'
      }
    }
});