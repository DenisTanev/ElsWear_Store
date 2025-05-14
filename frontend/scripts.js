window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const header = document.getElementById("header");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Get all search toggles (both in main navbar and scrolled navbar)
    const toggles = document.querySelectorAll('.search-icon');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            // Find the closest parent search-wrapper
            const wrapper = toggle.closest('.search-wrapper');
            // Find the dropdown within this specific wrapper
            const dropdown = wrapper.querySelector('#search-dropdown');
            
            // Toggle this specific dropdown
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Hide dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) {
            // Hide all dropdowns
            document.querySelectorAll('#search-dropdown').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
});