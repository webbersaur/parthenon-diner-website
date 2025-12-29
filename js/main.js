/**
 * Parthenon Diner - Main JavaScript
 * Handles navigation, animations, and interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const overlay = document.getElementById('overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  // ============================================
  // Mobile Navigation
  // ============================================
  function toggleMobileMenu() {
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  }

  function closeMobileMenu() {
    menuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', toggleMobileMenu);
  overlay.addEventListener('click', closeMobileMenu);

  // Close mobile menu when clicking a link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // ============================================
  // Smooth Scroll Navigation
  // ============================================
  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');

    if (targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }

  // Apply smooth scroll to all internal links
  [...navLinks, ...mobileNavLinks].forEach(link => {
    if (link.getAttribute('href').startsWith('#')) {
      link.addEventListener('click', smoothScroll);
    }
  });

  // ============================================
  // Header Scroll Effect
  // ============================================
  let lastScroll = 0;
  const scrollThreshold = 50;

  function handleHeaderScroll() {
    const currentScroll = window.pageYOffset;

    // Add/remove scrolled class
    if (currentScroll > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });

  // ============================================
  // Scroll-triggered Animations
  // ============================================
  function handleScrollAnimations() {
    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        element.classList.add('visible');
      }
    });
  }

  // Initial check for elements in view
  handleScrollAnimations();

  // Listen for scroll
  window.addEventListener('scroll', handleScrollAnimations, { passive: true });

  // ============================================
  // Intersection Observer for Animations (Alternative)
  // ============================================
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  // ============================================
  // Active Navigation Highlighting
  // ============================================
  function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightActiveNav, { passive: true });

  // ============================================
  // Order Dropdown Click-to-Toggle
  // ============================================
  const orderDropdowns = document.querySelectorAll('.order-dropdown');

  orderDropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('button');
    const menu = dropdown.querySelector('.order-dropdown-menu');

    // Toggle dropdown on button click
    button.addEventListener('click', (e) => {
      e.stopPropagation();

      // Close other dropdowns first
      orderDropdowns.forEach(other => {
        if (other !== dropdown) {
          other.classList.remove('active');
        }
      });

      dropdown.classList.toggle('active');
    });

    // Close when clicking a menu link
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        dropdown.classList.remove('active');
      });
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    orderDropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  });

  // ============================================
  // Keyboard Navigation
  // ============================================
  document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      closeMobileMenu();
    }

    // Close dropdowns on Escape
    if (e.key === 'Escape') {
      orderDropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });

  // ============================================
  // Button Ripple Effect (Optional Enhancement)
  // ============================================
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        left: ${x}px;
        top: ${y}px;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-top: -50px;
        pointer-events: none;
      `;

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // ============================================
  // Lazy Load Images (Performance Enhancement)
  // ============================================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ============================================
  // Rate Us Modal
  // ============================================
  const rateUsModal = document.getElementById('rateUsModal');
  const openRateUsBtn = document.getElementById('openRateUsModal');
  const closeRateUsBtn = document.getElementById('closeRateUsModal');

  function openRateUsModal() {
    if (rateUsModal) {
      rateUsModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeRateUsModal() {
    if (rateUsModal) {
      rateUsModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Open modal on button click
  if (openRateUsBtn) {
    openRateUsBtn.addEventListener('click', openRateUsModal);
  }

  // Also open modal from footer button
  const footerRateUsBtn = document.getElementById('footerRateUsBtn');
  if (footerRateUsBtn) {
    footerRateUsBtn.addEventListener('click', openRateUsModal);
  }

  // Close modal on X button click
  if (closeRateUsBtn) {
    closeRateUsBtn.addEventListener('click', closeRateUsModal);
  }

  // Close modal when clicking overlay background
  if (rateUsModal) {
    rateUsModal.addEventListener('click', (e) => {
      if (e.target === rateUsModal) {
        closeRateUsModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && rateUsModal && rateUsModal.classList.contains('active')) {
      closeRateUsModal();
    }
  });

  // ============================================
  // Console Greeting
  // ============================================
  console.log(
    '%c Parthenon Diner ',
    'background: #8B1538; color: white; padding: 10px 20px; font-size: 16px; font-family: Georgia, serif;'
  );
  console.log('Website redesign by Claude. Welcome!');
});
