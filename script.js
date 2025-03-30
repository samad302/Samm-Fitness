// Mobile menu toggle with smooth transitions
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const menu = document.querySelector('.menu');
    
    // Function to handle responsive behavior
    function handleResponsive() {
        if (window.innerWidth <= 768) {
            // Mobile behavior
            menuToggle.style.display = 'block';
            closeBtn.style.display = 'none';
            menu.style.display = 'none';
        } else {
            // Desktop behavior
            menuToggle.style.display = 'none';
            closeBtn.style.display = 'none';
            menu.style.display = 'flex';
        }
    }
    
    // Toggle menu with smooth transitions
    function toggleMenu() {
        if (window.innerWidth <= 768) {
            // Add transition class before toggling
            menu.style.transition = 'right 0.4s ease-in-out';
            
            if (menu.classList.contains('active')) {
                // Closing menu
                menu.classList.remove('active');
                setTimeout(() => {
                    menuToggle.style.display = 'block';
                    closeBtn.style.display = 'none';
                    menu.style.display = 'none';
                }, 400); // Match this with CSS transition duration
            } else {
                // Opening menu
                menu.style.display = 'flex';
                // Small timeout to allow display change before animation
                setTimeout(() => {
                    menu.classList.add('active');
                    menuToggle.style.display = 'none';
                    closeBtn.style.display = 'block';
                }, 10);
            }
        }
    }
    
    // Add click animation to icons
    function addClickAnimation(icon) {
        icon.style.transform = 'scale(0.9)';
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Initialize
    handleResponsive();
    
    // Event listeners with animations
    menuToggle.addEventListener('click', function() {
        addClickAnimation(menuToggle);
        toggleMenu();
    });
    
    closeBtn.addEventListener('click', function() {
        addClickAnimation(closeBtn);
        toggleMenu();
    });
    
    // Close menu when clicking on a link (mobile only)
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menu.style.transition = 'right 0.4s ease-in-out';
                menu.classList.remove('active');
                setTimeout(() => {
                    menuToggle.style.display = 'block';
                    closeBtn.style.display = 'none';
                    menu.style.display = 'none';
                }, 400);
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        handleResponsive();
        // Close menu if resizing to desktop
        if (window.innerWidth > 768) {
            menu.classList.remove('active');
        }
    });
    
    // Rest of your existing code...
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    // Initialize Owl Carousel
    $('#slider-area').owlCarousel({
        loop: true,
        autoplay: true,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });
    
    // Adjust slider height on mobile
    function adjustSliderHeight() {
        const slider = document.querySelector('#slider-area .owl-item div');
        slider.style.height = window.innerWidth <= 768 ? '70vh' : '100vh';
    }
    
    window.addEventListener('resize', adjustSliderHeight);
    window.addEventListener('load', adjustSliderHeight);
    
    // BMI Calculator Functionality
    const calculateBtn = document.getElementById('calculate');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value) / 100;
            
            if (weight && height) {
                const bmi = (weight / (height * height)).toFixed(1);
                document.getElementById('yourBMI').querySelector('span').textContent = bmi;
            } else {
                alert('Please enter both weight and height');
            }
        });
    }
    
    // Initialize Fancybox
    $('[data-fancybox]').fancybox({
        buttons: [
            "zoom", "share", "slideShow", 
            "fullScreen", "download", 
            "thumbs", "close"
        ]
    });
});