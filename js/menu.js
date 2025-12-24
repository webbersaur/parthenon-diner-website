/**
 * Parthenon Diner - Menu Page JavaScript
 * Handles tab switching and menu interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Tab Elements
  const tabs = document.querySelectorAll('.menu-tab');
  const tabContents = document.querySelectorAll('.menu-tab-content');

  // ============================================
  // Tab Switching
  // ============================================
  function switchTab(tabId) {
    // Remove active class from all tabs and contents
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to selected tab and content
    const selectedTab = document.querySelector(`[data-tab="${tabId}"]`);
    const selectedContent = document.getElementById(tabId);

    if (selectedTab && selectedContent) {
      selectedTab.classList.add('active');
      selectedContent.classList.add('active');

      // Scroll to top of menu section smoothly
      const menuSection = document.querySelector('.menu-section');
      if (menuSection) {
        const headerOffset = 100;
        const elementPosition = menuSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }

      // Update URL hash without scrolling
      history.replaceState(null, null, `#${tabId}`);
    }
  }

  // Add click listeners to tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // ============================================
  // Handle URL Hash on Load
  // ============================================
  function handleInitialHash() {
    const hash = window.location.hash.replace('#', '');
    const validTabs = ['breakfast', 'lunch', 'dinner', 'greek', 'drinks'];

    if (hash && validTabs.includes(hash)) {
      switchTab(hash);
    }
  }

  // Check hash on page load
  handleInitialHash();

  // Listen for hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    const validTabs = ['breakfast', 'lunch', 'dinner', 'greek', 'drinks'];

    if (hash && validTabs.includes(hash)) {
      switchTab(hash);
    }
  });

  // ============================================
  // Keyboard Navigation for Tabs
  // ============================================
  tabs.forEach((tab, index) => {
    tab.addEventListener('keydown', (e) => {
      let newIndex;

      switch (e.key) {
        case 'ArrowRight':
          newIndex = (index + 1) % tabs.length;
          break;
        case 'ArrowLeft':
          newIndex = (index - 1 + tabs.length) % tabs.length;
          break;
        case 'Home':
          newIndex = 0;
          break;
        case 'End':
          newIndex = tabs.length - 1;
          break;
        default:
          return;
      }

      e.preventDefault();
      tabs[newIndex].focus();
      tabs[newIndex].click();
    });
  });

  // ============================================
  // Animate Menu Items on Tab Switch
  // ============================================
  const menuItems = document.querySelectorAll('.menu-item');

  // Add staggered animation delay
  function animateMenuItems() {
    const activeContent = document.querySelector('.menu-tab-content.active');
    if (!activeContent) return;

    const items = activeContent.querySelectorAll('.menu-item');
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.03}s`;
    });
  }

  // Run on initial load
  animateMenuItems();

  // Run when tabs are switched
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setTimeout(animateMenuItems, 50);
    });
  });

  // ============================================
  // Search/Filter (Future Enhancement)
  // ============================================
  // This could be added later for menu item search functionality

  console.log('Menu page loaded successfully');
});
