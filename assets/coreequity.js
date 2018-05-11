$('.table-row').on('hover', function() {
    $('.is-selected').addClass('.table-row');
})


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["CASH", "CONSUMER DISCRETIONARY", "CONSUMER STAPLES", "ENERGY", "FINANCIALS", "FUNDS", "HEALTH CARE", "INDUSTRIALS", "INFORMATION TECHNOLOGY", "MATERIALS", "REAL ESTATE", "TELECOMMUNICATIONS", "UTILITIES"],
        datasets: [{
            backgroundColor: ['#FF2121', '#2B303A', '#92DCE5', '#EEE5E9', '#7C7C7C', '#FF2121', '#2B303A', '#92DCE5', '#EEE5E9', '#7C7C7C', '#FF2121', '#2B303A', '#92DCE5',],
            borderColor: 'transparent',
            data: [2.11, 10.98, 8.67, 5.37, 13.44, 10.35, 10.93, 9.37, 23.68, 1.90, 0, 1.36, 1.87]
        }]

    },

    // Configuration options go here
    options: {
        legend: {
            display: false,
        },
        tooltips: {
            titleFontSize: 30,
            bodyFontSize: 30
        }
    }
});