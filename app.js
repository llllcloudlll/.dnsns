document.addEventListener("DOMContentLoaded", function() {
    
    // YENİ: Hamburger Menü Mantığı
    const menuBtn = document.getElementById('menuBtn');
    const navOverlay = document.getElementById('navOverlay');
    const overlayLinks = document.querySelectorAll('.overlay-link');
    let menuOpen = false;

    // Menüye tıklandığında aç/kapat
    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            navOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Arka planın kaymasını engelle
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            navOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Arka plan kaymasını geri aç
            menuOpen = false;
        }
    });

    // Linklere tıklandığında menüyü otomatik kapat
    overlayLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            navOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            menuOpen = false;
        });
    });

    // Kaydırma (Scroll) Animasyon Motoru
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.15 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-scroll");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll(".hidden-scroll");
    hiddenElements.forEach(el => observer.observe(el));
});
