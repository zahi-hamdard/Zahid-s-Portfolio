// Show a message for unavailable social media links
function showMessage() {
    alert("Social media link is not available for now. Please check back later!");
}

// Show or hide the section navigation bar based on scroll position
document.addEventListener('scroll', () => {
    const sectionNav = document.getElementById('section-nav');
    const homeSection = document.getElementById('home');
    if (!sectionNav || !homeSection) return; // Added null check for sectionNav

    const homeBottom = homeSection.getBoundingClientRect().bottom;

    if (homeBottom <= 0) {
        sectionNav.classList.remove('hidden');
    } else {
        sectionNav.classList.add('hidden');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('#section-nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll to the next or previous section based on wheel event
document.addEventListener('wheel', (event) => {
    const sections = document.querySelectorAll('section');
    let currentSection = null;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
        }
    });

    if (currentSection) {
        if (event.deltaY > 0) {
            const nextSection = currentSection.nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            const prevSection = currentSection.previousElementSibling;
            if (prevSection) {
                prevSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});