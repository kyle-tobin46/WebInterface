document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            console.log(`${this.id} is ${this.checked ? 'enabled' : 'disabled'}`);
        });
    });
});
