function fetchData() {
   
    fetch('YOUR_API')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('streaks', JSON.stringify(data.streaks));
            document.getElementById("streakCount").innerText = 'Current streak: ' + data.currentStreak;
        })
        .catch(error => console.error('Error:', error));
}

function showStreaks() {
    let streaks = JSON.parse(localStorage.getItem('streaks'));
    if (streaks && streaks.length > 0) {
        let totalStreak = streaks.reduce((a, b) => a + b);
        alert('Your total login streaks are: ' + totalStreak);
    } else {
        alert('You have not logged in yet.');
    }
}
