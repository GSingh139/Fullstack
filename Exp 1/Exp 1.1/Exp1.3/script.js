// Theme Management with localStorage
class ThemeManager {
    constructor() {
        this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
        this.init();
    }

    // Get theme from localStorage
    getStoredTheme() {
        return localStorage.getItem('theme');
    }

    // Get system preference
    getSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    // Set theme
    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateThemeIcon();
    }

    // Toggle between light and dark
    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    // Update theme icon
    updateThemeIcon() {
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = this.currentTheme === 'dark' ? '☀️' : '🌙';
        }
    }

    // Initialize theme on load
    init() {
        this.setTheme(this.currentTheme);
        
        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                // Only auto-switch if user hasn't set a preference
                if (!localStorage.getItem('theme')) {
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }
}

// Initialize theme manager
const themeManager = new ThemeManager();

// Theme toggle button event listener
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            themeManager.toggleTheme();
        });
    }

    // Sidebar navigation active state
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Mobile menu toggle (if needed)
    const mobileMenuToggle = () => {
        const sidebar = document.querySelector('.sidebar');
        if (window.innerWidth <= 768) {
            // Mobile menu logic can be added here
        }
    };

    window.addEventListener('resize', mobileMenuToggle);

    // Simulate data loading
    console.log('Admin Dashboard loaded successfully');
    console.log('Current theme:', themeManager.currentTheme);
    console.log('Theme stored in localStorage:', localStorage.getItem('theme'));
});

// API interaction example
class DashboardAPI {
    constructor() {
        this.baseURL = 'http://localhost:3000/api';
    }

    async fetchStats() {
        try {
            const response = await fetch(`${this.baseURL}/stats`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching stats:', error);
            return null;
        }
    }

    async fetchTransactions() {
        try {
            const response = await fetch(`${this.baseURL}/transactions`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching transactions:', error);
            return null;
        }
    }
}

// Initialize API client (optional - for future backend integration)
const dashboardAPI = new DashboardAPI();
