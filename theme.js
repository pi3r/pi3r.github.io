(function() {
  const STORAGE_KEY = 'theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? LIGHT : DARK;
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateToggleButton(theme);
  }

  function updateToggleButton(theme) {
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.textContent = theme === DARK ? 'light' : 'dark';
      button.setAttribute('aria-label', `Switch to ${theme === DARK ? 'light' : 'dark'} mode`);
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === DARK ? LIGHT : DARK);
  }

  // Set initial theme immediately to prevent flash
  setTheme(getPreferredTheme());

  // Set up toggle button when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.theme-toggle');
    if (button) {
      updateToggleButton(document.documentElement.getAttribute('data-theme'));
      button.addEventListener('click', toggleTheme);
    }
  });

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function(e) {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? LIGHT : DARK);
    }
  });
})();
