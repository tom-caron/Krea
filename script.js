document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const requestType = document.getElementById('requestType').value;
    const lastName = document.getElementById('lastName').value;
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    const subject = encodeURIComponent("Contact - " + requestType);
    
    const body = encodeURIComponent(
        "Nom : " + lastName + "\n" +
        "Prénom : " + firstName + "\n" +
        "Email : " + email + "\n\n" +
        "Message :\n" + description
    );

    window.location.href = `mailto:caron.tom1@gmail.com?subject=${subject}&body=${body}`;
});
