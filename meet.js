document.getElementById("meetLink").addEventListener("click", function(event) {
    event.preventDefault();

    // Check if the user is an admin (you need to implement this logic)
    var isAdmin = confirm("Do you want to start a meeting?");

    if (isAdmin) {
        // Implement logic to start the meeting
        alert("Meeting started!");
    }
});
