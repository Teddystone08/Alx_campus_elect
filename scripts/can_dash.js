
const votingTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Votes',
        data: [120, 150, 180, 140, 170, 190, 220, 210, 230, 240, 260, 300],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2
    }]
};

const voteDistributionData = {
    labels: ['Candidate A', 'Candidate B', 'Candidate C', 'Candidate D'],
    datasets: [{
        label: 'Votes',
        data: [300, 150, 120, 80],
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

// Create charts
const votingTrendChartCtx = document.getElementById('votingTrendChart').getContext('2d');
const votingTrendChart = new Chart(votingTrendChartCtx, {
    type: 'line',
    data: votingTrendData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const voteDistributionChartCtx = document.getElementById('voteDistributionChart').getContext('2d');
const voteDistributionChart = new Chart(voteDistributionChartCtx, {
    type: 'pie',
    data: voteDistributionData,
    options: {
        responsive: true
    }
});

// Update dummy data for total votes, voters, and leading candidate
document.getElementById('totalVotes').innerText = '850';
document.getElementById('totalVoters').innerText = '1000';
document.getElementById('leadingCandidate').innerText = 'Candidate A';
document.getElementById('leadingVotePercentage').innerText = '35% of Total Votes';

// Populate recent activity (example data)
const recentActivityList = document.getElementById('recentActivity');
const activities = [
    'Candidate A received 50 votes',
    'Candidate B received 20 votes',
    'New voter registered',
    'Candidate C gained 30 votes'
];
activities.forEach(activity => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = activity;
    recentActivityList.appendChild(li);
});
