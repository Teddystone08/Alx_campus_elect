// Function to validate Student Login
function validateStudentLogin() {
    // Get input values
    var institutionID = document.getElementById('inst_ID').value;
    var studentID = document.getElementById('std_ID').value;
    var studentPassword = document.getElementById('studentPassword').value;

    // Regular expression for valid email
    /*var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;*/

    // Validate input fields
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

    if (studentPassword === '') {
        alert('Please enter your password.');
        return false;
    }

    // Simulate successful validation
    alert('Student Login Successful!');
    return true;
}

// Function to validate Candidate Login
function validateCandidateLogin() {
    // Get input values
    var candidateID = document.getElementById('candidateID').value;
    var candidateEmail = document.getElementById('candidateEmail').value;
    var candidatePassword = document.getElementById('candidatePassword').value;

    // Regular expression for valid email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
