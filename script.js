// ==================== HAMBURGER MENU LOGIC ====================
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const menuOverlay = document.getElementById('menuOverlay');
    const navLinkItems = document.querySelectorAll('.nav-links a');
    
    function closeMenu() {
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
        if (menuToggle) {
            menuToggle.innerHTML = '<i class="fa fa-bars" style="font-size:24px"></i>';
        }
    }
    
    function openMenu() {
        navLinks.classList.add('active');
        menuOverlay.classList.add('active');
        if (menuToggle) {
            menuToggle.innerHTML = '<i class="fa fa-bars" style="font-size:24px"></i>';
        }
    }
    
    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }
    
    // Close menu when clicking overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }
    
    // Close menu when clicking a nav link (smooth scroll already handled)
    navLinkItems.forEach(link => {
        link.addEventListener('click', (e) => {
            closeMenu();
            const targetId = link.getAttribute('href');
            if(targetId && targetId !== '#' && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElem = document.querySelector(targetId);
                if(targetElem) {
                    targetElem.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ==================== SMOOTH SCROLLING FOR ALL BUTTONS ====================
    document.querySelectorAll('.btn-primary[href="#projects"], .btn-outline[href="#contact"], .nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if(href && href !== '#' && href.startsWith('#')) {
                // Prevent default only if we handle it (nav links already handled above, but double-safe)
                const targetElem = document.querySelector(href);
                if(targetElem && href !== '#') {
                    e.preventDefault();
                    targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
    
    // Handle View Work & Contact Me buttons specifically
    const viewWorkBtn = document.querySelector('.btn-primary[href="#projects"]');
    if(viewWorkBtn) {
        viewWorkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
        });
    }
    const contactBtn = document.querySelector('.btn-outline[href="#contact"]');
    if(contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // ==================== CONTACT FORM FEEDBACK ====================
    const contactForm = document.getElementById('simpleContactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const feedback = document.getElementById('formFeedback');
            feedback.style.display = 'block';
            feedback.textContent = '✨ Thanks for reaching out! (demo) I’ll connect soon.';
            feedback.style.color = '#2b9348';
            this.reset();
            setTimeout(() => {
                feedback.style.opacity = '0';
                setTimeout(() => {
                    feedback.style.display = 'none';
                    feedback.style.opacity = '1';
                }, 1800);
            }, 2500);
        });
    }
    
    // Close menu on window resize (if screen > 768px and menu is open, auto-close)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
    
    console.log("Portfolio with Awards/Certs & Hamburger Menu — fully responsive");