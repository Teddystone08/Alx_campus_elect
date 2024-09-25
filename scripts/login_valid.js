/* // Function to validate Student Login
function validateStudentLogin() {
    // Get input values
    var institutionID = document.getElementById('inst_ID').value;
    var studentID = document.getElementById('std_ID').value;
    var studentPassword = document.getElementById('studentPassword').value;

    // Regular expression for valid email
    /*var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;*/ 


   /* // Validate input fields
    if (institutionID === '') {
        alert('Please enter your Student ID.');
        return false;
    }
    if (studentID === '') {
        alert('Please enter a valid studentID.');
        return false;
    }

    /*if (studentEmail === '' || !emailPattern.test(studentEmail)) {
        alert('Please enter a valid email address.');
        return false;
    }
        */
/*
    if (studentPassword === '') {
        alert('Please enter your password.');
        return false;
    }

    // Simulate successful validation
    alert('Student Login Successful!');
    return true;
}
*/

// Function to validate Candidate Login
function validateCandidateLogin() {
    // Get input values
    var candidateID = document.getElementById('candidateID').value;
    var candidateEmail = document.getElementById('candidateEmail').value;
    var candidatePassword = document.getElementById('candidatePassword').value;

   /* // Regular expression for valid email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    */
/*
    // Validate input fields
    if (candidateID === '') {
        alert('Please enter your Candidate ID.');
        return false;
    }

    if (candidateEmail === '' || !emailPattern.test(candidateEmail)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (candidatePassword === '') {
        alert('Please enter your password.');
        return false;
    }

    // Simulate successful validation
    alert('Candidate Login Successful!');
    return true;
}
*/

document.addEventListener('DOMContentLoaded', function () {
    // Sample user credentials
    const users = [
        { institution: 'institution1', id: '1001', password: 'password1', role: 'student' },
        { institution: 'institution2', id: '1002', password: 'password2', role: 'admin' },
        { institution: 'institution3', id: '1003', password: 'password3', role: 'candidate' }
    ];

    // Form submission event
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const institution = document.getElementById('inst_ID').value;
        const studentID = document.getElementById('std_ID').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        // Check if all fields are filled
        if (!institution || !studentID || !password || !role) {
            alert('Please fill in all fields.');
            return;
        }

        // Check credentials
        const user = users.find(user => user.institution === institution && user.id === studentID && user.password === password && user.role === role);
        if (user) {
            alert(`Login successful! Welcome, ${role}!`);
            // Redirect based on role
            switch (role) {
                case 'student':
                    window.location.href = '/student-dashboard.html';
                    break;
                case 'admin':
                    window.location.href = '/admin_dashboard.html';
                    break;
                case 'candidate':
                    window.location.href = '/can_dashboard.html';
                    break;
            }
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
});


