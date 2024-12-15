document.addEventListener('DOMContentLoaded', function() {
    // Search filter functionality
    const searchInput = document.querySelector('#car-search');
    const carItems = document.querySelectorAll('.car-item');

    searchInput.addEventListener('input', function() {
        const filterValue = searchInput.value.toLowerCase();

        carItems.forEach(carItem => {
            const carName = carItem.querySelector('h3').textContent.toLowerCase();

            if (carName.includes(filterValue)) {
                carItem.style.display = 'block';
            } else {
                carItem.style.display = 'none';
            }
        });
    });

    // Form submission handler for Sell Your Car section
    const sellCarForm = document.querySelector('#sell-car form');
    sellCarForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Car details submitted successfully!');
        // Implement form submission logic here (e.g., API call to save data)
    });
});
