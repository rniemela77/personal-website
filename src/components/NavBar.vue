<template>
    <nav class="navbar">
        <!-- Desktop Navigation -->
        <ul class="nav-desktop">
            <li v-for="item in navItems" :key="item.name">
                <button @click="scrollToSection(item.href)">{{ item.name }}</button>
            </li>
        </ul>

        <!-- Mobile Hamburger Button -->
        <button 
            class="hamburger-btn" 
            @click="toggleMobileMenu"
            :class="{ 'active': isMobileMenuOpen }"
            aria-label="Toggle mobile menu"
        >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </button>

        <!-- Mobile Dropdown Menu -->
        <div 
            class="mobile-menu" 
            :class="{ 'open': isMobileMenuOpen }"
            @click="closeMobileMenu"
        >
            <div class="mobile-menu-content" @click.stop>
                <ul class="nav-mobile">
                    <li v-for="item in navItems" :key="item.name">
                        <button @click="handleMobileNavClick(item.href)">{{ item.name }}</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollToSection } from '../useScrollToSection'

const isMobileMenuOpen = ref(false)

const navItems = [
    {
        name: 'Projects',
        href: '#projects'
    },
    {
        name: 'Blog',
        href: '#blog'
    },
    {
        name: 'Skills',
        href: '#skills'
    },
    {
        name: 'Contact',
        href: '#contact'
    },
    {
        name: 'Resume',
        href: '#resume'
    }
]

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    document.body.style.overflow = ''
}

const { scrollToSection } = useScrollToSection()

const handleMobileNavClick = async (sectionId) => {
    await scrollToSection(sectionId)
    closeMobileMenu()
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px calc(5% - 20px) 20px calc(5% - 20px);
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(26, 26, 26, 0.9);
    backdrop-filter: blur(30px);
}

/* Desktop Navigation */
.nav-desktop {
    display: flex;
    gap: 40px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.nav-desktop button {
    text-decoration: none;
    color: #fff;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 20px;
    margin: 0;
}

.nav-desktop button:hover {
    text-decoration: underline;
    color: var(--accent-color);
}

/* Mobile Hamburger Button */
.hamburger-btn {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 101;
}

.hamburger-line {
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 2px;
    transition: all 0.3s ease;
}

.hamburger-btn.active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
}

.hamburger-btn.active .hamburger-line:nth-child(2) {
    opacity: 0;
    transform: translateX(-20px);
}

.hamburger-btn.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
}

/* Mobile Menu */
.mobile-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    overflow: hidden;
}

.mobile-menu.open {
    opacity: 1;
    visibility: visible;
}

.mobile-menu-content {
    position: absolute;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(20px);
    padding: 80px 40px 40px 40px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
}

.mobile-menu.open .mobile-menu-content {
    transform: translateX(0);
}

.nav-mobile {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.nav-mobile button {
    text-decoration: none;
    color: #fff;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    padding: 15px 0;
    margin: 0;
    text-align: right;
    width: 100%;
    transition: color 0.2s ease;
}

.nav-mobile button:hover {
    color: var(--accent-color);
}

/* Responsive Design */
@media (max-width: 768px) {
    .navbar {
        justify-content: flex-end;
    }
    
    .nav-desktop {
        display: none;
    }
    
    .hamburger-btn {
        display: flex;
    }
    
    .mobile-menu {
        display: block;
    }
}

@media (min-width: 769px) {
    .hamburger-btn {
        display: none;
    }
    
    .mobile-menu {
        display: none;
    }
}
</style>