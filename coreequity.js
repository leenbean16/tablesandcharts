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
            backgroundColor: ['#75B2BA', '#689EAD', '#528196', '#346379', '#08415C', '#75B2BA', '#689EAD', '#528196', '#346379', '#08415C', '#75B2BA', '#689EAD', '#528196', '#346379', '#08415C', ],
            borderColor: 'transparent',
            data: [1.97, 8.07, 18.92, 7.59, 5.54, 5.49, 13, 61, 12.08, 12.08, 1.81, 31.96, 3.62, 7.26]
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
