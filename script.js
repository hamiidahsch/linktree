(function() {
    'use strict';

    // === 1. Efek klik pada link (bounce & prevent default jika href="#") ===
    const links = document.querySelectorAll('.link-item');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
            // Animasi bounce kecil
            this.style.transition = 'transform 0.1s ease';
            this.style.transform = 'scale(0.94)';
            setTimeout(() => {
                this.style.transform = '';
            }, 120);
        });
    });

    // === 2. Footer link: prevent default jika href="#" ===
    document.querySelectorAll('.footer a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });

    // === 3. Efek staggered (muncul bertahap) untuk link-item ===
    const items = document.querySelectorAll('.link-item');
    items.forEach((item, index) => {
        // Set state awal tersembunyi (akan ditimpa oleh CSS jika sudah ada, tapi kita perkuat)
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition =
            `opacity 0.5s ease ${0.07 * (index + 1)}s, transform 0.5s ease ${0.07 * (index + 1)}s`;
        // Trigger muncul setelah render
        requestAnimationFrame(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    });

    console.log('🌈 Linktree ceria siap!');
})();