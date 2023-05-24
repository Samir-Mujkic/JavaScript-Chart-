const lineChart = document.getElementById('lineChart');

const labels = [
          '22 Maj',
          '23 Maj',
          '24 Maj',
          '25 Maj',
          '26 Maj',
          '27 Maj',
          '28 Maj',
          '29 Maj',
          '30 Maj',
          '31 Maj',
          '01 Jun',
          '02 Jun',
          '03 Jun',
          '04 Jun',
          '05 Jun',
          '06 Jun',
          '07 Jun',
          '08 Jun',
          '09 Jun',
          ];

new Chart(lineChart, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
         {
            label: 'Povratni pregledi',
            data: [1844, 1554, 1273 , 1284 , 1126 , 946  , 964  , 1793 , 1432 , 1130 , 1074 , 954 , 856 , 833 , 1536 , 1416 , 1248 , 1226],
            borderColor: 'rgba(66,138,245,1)',
         },
         {
            label: 'Novi pregledi',
            data: [1199, 1314, 1147, 1403, 1217, 1015, 1138, 1272, 957, 862, 716, 712, 610, 585, 847, 744, 756,  781],
            borderColor: 'rgba(235,134,52,1)',
         }
        ]
    }

});


//pie chart
const pieChart = document.getElementById('pieChart');

new Chart(pieChart, {
    type: 'pie',
    data: {
        labels: ['Srbija', 'BIH', 'Hrvatska', 'makedonina', 'cg', 'ostali'],
        datasets: [
        {
            label: 'Drzava',
            data: [49.6,20.3,9.5,3.6,2.6,14.4],
            
        }
        ]
    }
})

// bar chart =

const barChart = document.getElementById('barChart');

new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['13 - 17', '18 - 24', '25 - 34', '35 - 44',],
        datasets: [
         {
            label: "Publica po gogidnama",
            data: [1.7,43.3,34.4,13.6,5.6,1.2,0.3],
            backgroundColor: [
            ]
         }
        ]
    }
})