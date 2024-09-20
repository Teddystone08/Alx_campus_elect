// Dummy data for charts
const departmentVoterData = {
    labels: ['Dept A', 'Dept B', 'Dept C', 'Dept D', 'Dept E'],
    datasets: [{
        label: 'Voters',
        data: [120, 150, 180, 100, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2
    }]
};

const genderVotingData = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [{
        label: 'Votes',
        data: [300, 250, 50],
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    }]
};

const votingTrendData = {
    labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM'],
    datasets: [{
        label: 'Votes Cast',
        data: [50, 75, 120, 90, 140, 110, 160],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2
    }]
};

const deviceUsageData = {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [{
        label: 'Devices',
        data: [400, 300, 100],
        backgroundColor: [
            'rgba(255, 206, 86, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

const candidateVotesData = {
    labels: ['Candidate A', 'Candidate B', 'Candidate C', 'Candidate D'],
    datasets: [{
        label: 'Votes',
        data: [300, 250, 200, 100],
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
const departmentVoterChartCtx = document.getElementById('departmentVoterChart').getContext('2d');
const departmentVoterChart =
