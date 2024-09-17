// Sample data for candidates
const candidates = [
    {
        name: 'Kodo Patience',
        position: 'President',
        img: 'images/Rectangle 44.png',
        manifesto: 'I will work towards better campus facilities, greater student representation, and ensure every voice is heard. Together, we can build a brighter future for our university.'
    },
    {
        name: 'Wunkie Ivy',
        position: 'President',
        img: 'images/Rectangle 48.png',
        manifesto: 'I will work towards better campus facilities, greater student representation, and ensure every voice is heard. Together, we can build a brighter future for our university.'
    },
    {
        name: 'Amartey Emmanuel',
        position: 'President',
        img: 'images/Rectangle 51.png',
        manifesto: 'I will work towards better campus facilities, greater student representation, and ensure every voice is heard. Together, we can build a brighter future for our university.'
    },


    {
        name: 'Adonko Dominic',
        position: 'Vice President',
        img: 'images/Rectangle 53.png',
        manifesto: 'My goal is to bring innovative solutions to the student council. From increasing participation in campus activities to improving academic resources, I promise to serve every student.'
    },
    {
        name: 'Jane Smith',
        position: 'Vice President',
        img: 'images/Rectangle 50.png',
        manifesto: 'My goal is to bring innovative solutions to the student council. From increasing participation in campus activities to improving academic resources, I promise to serve every student.'
    },
    {
        name: 'Govenor Christ',
        position: 'Vice President',
        img: 'images/Rectangle 43.png',
        manifesto: 'My goal is to bring innovative solutions to the student council. From increasing participation in campus activities to improving academic resources, I promise to serve every student.'
    },


    {
        name: 'Duah Dorothy',
        position: 'Secretary',
        img: 'images/Rectangle 49.png',
        manifesto: 'With a commitment to transparency and efficiency, I will ensure that all council proceedings are well-documented and communicated to the student body. Let\'s make every vote count!'
    },
    {
        name: 'Botchwey Stephen',
        position: 'Secretary',
        img: 'images/Rectangle 52.png',
        manifesto: 'With a commitment to transparency and efficiency, I will ensure that all council proceedings are well-documented and communicated to the student body. Let\'s make every vote count!'
    },
    {
        name: 'Alice Johnson',
        position: 'Secretary',
        img: 'images/Rectangle 54.png',
        manifesto: 'With a commitment to transparency and efficiency, I will ensure that all council proceedings are well-documented and communicated to the student body. Let\'s make every vote count!'
    },


    {
        name: 'Annan Paul',
        position: 'Treasurer',
        img: 'images/Rectangle 45.png',
        manifesto: 'As Treasurer, I will responsibly manage student funds and ensure financial transparency. My goal is to allocate resources towards the most beneficial projects for all students.'
    },
    {
        name: 'Akoto Regina',
        position: 'Treasurer',
        img: 'images/Rectangle 47.png',
        manifesto: 'As Treasurer, I will responsibly manage student funds and ensure financial transparency. My goal is to allocate resources towards the most beneficial projects for all students.'
    },
    {
        name: 'Edu Enos',
        position: 'Treasurer',
        img: 'images/Rectangle 46.png',
        manifesto: 'As Treasurer, I will responsibly manage student funds and ensure financial transparency. My goal is to allocate resources towards the most beneficial projects for all students.'
    }
];

// Function to inject candidate profiles into the grid
function displayCandidates(filteredCandidates) {
    const candidateGrid = document.getElementById('candidateGrid');
    candidateGrid.innerHTML = ''; 
    
    // Clear previous candidates
    filteredCandidates.forEach((candidate, index) => {
        const cardHTML = `
            <div class="col-md-4 mb-4">
                <div class="card candidate-card shadow-sm">
                    <img src="${candidate.img}" alt="${candidate.name}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${candidate.name}</h5>
                        <p class="card-text">Position: ${candidate.position}</p>
                        <button class="btn btn-primary" onclick="showManifesto(${index})">View Manifesto</button>
                        <button class="btn btn-success" onclick="vote(${index})">Vote</button>
                    </div>
                </div>
            </div>
        `;
        candidateGrid.innerHTML += cardHTML;
    });
}

// Function to show manifesto in modal
function showManifesto(index) {
    const candidate = candidates[index];
    document.getElementById('modalCandidateImg').src = candidate.img;
    document.getElementById('modalCandidateName').innerText = candidate.name;
    document.getElementById('modalCandidatePosition').innerText = candidate.position;
    document.getElementById('modalManifestoText').innerText = candidate.manifesto;

    // Open the modal
    const manifestoModal = new bootstrap.Modal(document.getElementById('manifestoModal'));
    manifestoModal.show();
}

// Filter candidates based on search query
document.getElementById('searchInput').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();

    const filteredCandidates = candidates.filter(candidate => 
        candidate.name.toLowerCase().includes(query) ||
        candidate.position.toLowerCase().includes(query)
    );

    displayCandidates(filteredCandidates); // Update displayed candidates based on search
});

// Initial display of all candidates
displayCandidates(candidates);
