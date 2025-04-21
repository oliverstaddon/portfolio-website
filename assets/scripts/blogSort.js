document.addEventListener('DOMContentLoaded', function () {
    const sortButton = document.getElementById('sort');
    const monthSelect = document.getElementById('month');
    
    if (sortButton) {
        sortButton.addEventListener('change', function () {
            this.form.submit(); // submit form when change
        });
    }

    if (monthSelect) {
        monthSelect.addEventListener('change', function () {
            this.form.submit(); // submit form when month changes
        });
    }
});