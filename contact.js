// JavaScript DOM Feature: Form Submission & Success Feedback
function handleFormSubmit(event) {
    // Prevent default form page reload
    event.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;

    if (name.trim() !== "") {
        // Show success message box dynamically
        const successBox = document.getElementById('successMessage');
        successBox.style.display = 'block';

        // Reset the form fields
        document.getElementById('contactForm').reset();

        // Automatically hide message after 5 seconds
        setTimeout(() => {
            successBox.style.display = 'none';
        }, 5000);
    }
}