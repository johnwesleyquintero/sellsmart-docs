// Sidebar Navigation Manager
class SidebarManager {
  constructor() {
    this.sidebar = document.querySelector('.sidebar');
    this.menuToggle = document.createElement('button');
    this.setupMobileMenu();
    this.setupTableLinks();
    this.setupConnectionStatus();
  }

  setupMobileMenu() {
    this.menuToggle.className = 'menu-toggle';
    this.menuToggle.innerHTML = `
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
    `;
    document.body.appendChild(this.menuToggle);

    this.menuToggle.addEventListener('click', () => {
      this.sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.sidebar.contains(e.target) && !this.menuToggle.contains(e.target)) {
        this.sidebar.classList.remove('active');
      }
    });
  }

  setupTableLinks() {
    const tableLinks = document.querySelectorAll('.table-link');
    tableLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.table-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        // Handle table selection logic here
      });
    });
  }

  setupConnectionStatus() {
    // Existing connection status logic
  }

  toggleSqlConsole() {
    const consolePanel = document.querySelector('.sql-console-panel');
    consolePanel.classList.toggle('collapsed');
    this.sidebar.querySelector('.sql-toggle-btn').classList.toggle('active');
  }
}

// Initialize sidebar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.sidebarManager = new SidebarManager();
});