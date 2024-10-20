document.addEventListener('DOMContentLoaded', function() {
    // Select all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Add an event listener to each checkbox
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            console.log(`${this.id} is ${this.checked ? 'enabled' : 'disabled'}`);
        });
    });
});
