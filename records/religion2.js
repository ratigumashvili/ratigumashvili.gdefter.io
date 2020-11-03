new Chart(document.getElementById("bar-chart-grouped-2"), {
    type: 'bar',
    data: {
      labels: ["ახალციხის ლივა", "ხერთვისის ლივა", "ახალქალაქის ლივა", "ჩალდირის ლივა", "ფოცხოვის ლივა", "პეტრეს ლივა", "ფანაკის ლივა", "დიდი არტაანის ლივა"],
      datasets: [
        {
          label: "ქრისტიანი",
          backgroundColor: "#3e95cd",
          data: [133,221,783,2478,1234,234,345,456]
        }, {
          label: "მუსლიმი",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734,675,432,675,789]
        }, {
            label: "იუდეველი",
            backgroundColor: "#E58F61",
            data: [40,54,67,73,21,34,56,78]
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