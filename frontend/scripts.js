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
    const toggles = document.querySelectorAll('.search-icon');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const wrapper = toggle.closest('.search-wrapper');
            const dropdown = wrapper.querySelector('#search-dropdown');
            
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) {
            document.querySelectorAll('#search-dropdown').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.style.opacity = '0');
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].style.opacity = '1';
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 6000);
});