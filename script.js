const salesByRegionData = {
    labels: ['North', 'South', 'East', 'West'],
    datasets: [{
      label: 'Sales by Region',
      data: [25000, 30000, 20000, 25000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  };
  
  const salesByRegionChart = new Chart(document.getElementById('sales-by-region'), {
    type: 'bar',
    data: salesByRegionData,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  