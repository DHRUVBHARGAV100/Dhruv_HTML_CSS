// Simulated API Response
const apiData = {
  total: 6,
  male: 4,
  female: 2,
  students: [
    { id: 1, name: 'John', progress: 80 },
    { id: 2, name: 'Alice', progress: 95 },
    { id: 3, name: 'Bob', progress: 60 },
    { id: 4, name: 'Sophia', progress: 85 },
    { id: 5, name: 'Jake', progress: 45 },
    { id: 6, name: 'Emma', progress: 78 }
  ]
};

function renderData() {
  // Update summary cards
  document.getElementById('total').textContent = `Total Students: ${apiData.total}`;
  document.getElementById('male').textContent = `Male: ${apiData.male}`;
  document.getElementById('female').textContent = `Female: ${apiData.female}`;

  // Populate table
  const tableBody = document.getElementById('student-table');
  apiData.students.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${student.id}</td><td>${student.name}</td><td>${student.progress}%</td>`;
    tableBody.appendChild(row);
  });

  // Generate chart
  const ctx = document.getElementById('progressChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: apiData.students.map(s => s.name),
      datasets: [{
        label: 'Progress %',
        data: apiData.students.map(s => s.progress),
        backgroundColor: '#3b82f6'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', renderData);
