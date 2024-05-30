// Configuración y datos del gráfico
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels: labels,
  datasets: [{
    label: 'Company Grafic',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: data,
};

// Renderizar el gráfico
window.onload = function() {
  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, config);
};
