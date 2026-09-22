const complaintForm = document.getElementById("complaintForm");


// Run this code when the form is submitted
if (complaintForm) {

    complaintForm.addEventListener("submit", function(event) {

        // Stop page from refreshing
        event.preventDefault();


        // Get values from the form
        const category = document.getElementById("category").value;
        const description = document.getElementById("description").value;


        // Get existing complaints
        let complaints =
            JSON.parse(localStorage.getItem("complaints")) || [];


        // Create complaint object
        const complaint = {

            category: category,

            description: description,

            status: "Pending"

        };


        // Add complaint to array
        complaints.push(complaint);

        // Save complaints in localStorage
        localStorage.setItem(
            "complaints",
            JSON.stringify(complaints)
        );


        // Show success message
        alert("Complaint submitted successfully!");


        // Clear form
        complaintForm.reset();

    });

}