Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
    color: '#333333',
    anchor: 'end',
    align: 'right'
});

var ctx = document.getElementById('personDistributionDefter1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['ნაჰიეს სახელი', 'ნაჰიეს სახელი', 'ნაჰიეს სახელი', 'ნაჰიეს სახელი', 'ნაჰიეს სახელი', 'ნაჰიეს სახელი', 'ნაჰიეს სახელი'],
        datasets: [{
            label: '',
            data: [1922, 5893, 1246, 8907, 7163, 2223, 3333],
            backgroundColor: [
                'rgba(166, 206, 227, 1)',
                'rgba(166, 206, 227, 1)',
                'rgba(166, 206, 227, 1)',
                'rgba(166, 206, 227, 1)',
                'rgba(166, 206, 227, 1)',
                'rgba(166, 206, 227, 1)',
                'rgba(166, 206, 227, 1)'
            ],
            borderColor: [
                'rgba(166, 206, 227, 1)',
                'rgba(166, 206, 227, 1)',
                'rgba(166, 206, 227, 1)',
                'rgba(166, 206, 227, 1)',
                'rgba(166, 206, 227, 1)',
                'rgba(166, 206, 227, 1)',
                'rgba(166, 206, 227, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
          display: false,
        },
        // Change options for ALL labels of THIS CHART
        datalabels: {
            color: '#333333'
        }
    }
});
