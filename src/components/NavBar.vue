<template>
    <nav class="navbar">
        <div class="navbar-content">
        <h1 class="navbar-title" :class="{ visible: showTitle }">
            <div class="navbar-title-name">
            Robert Niemela
            </div>
            <div class="navbar-title-subtitle">
            Full-Stack Developer
            </div>
        </h1>

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
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { scrollToSection as scrollToSectionHelper } from '../helpers/scrollToSection'

const isMobileMenuOpen = ref(false)
const showTitle = ref(false)

const navItems = [
    {
        name: 'Projects',
        href: '#projects'
    },
    {
        name: 'Skills',
        href: '#skills'
    },
    {
        name: 'Experience',
        href: '#experience'
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

const router = useRouter()

const scrollToSection = async (sectionId) => scrollToSectionHelper(router, sectionId)

const handleMobileNavClick = async (sectionId) => {
    // Close menu first so body can scroll
    closeMobileMenu()
    await scrollToSection(sectionId)
}

const updateShowTitleOnScroll = () => {
    const y = window.scrollY || window.pageYOffset || 0
    showTitle.value = y > 250
}

onMounted(() => {
    updateShowTitleOnScroll()
    window.addEventListener('scroll', updateShowTitleOnScroll, { passive: true })
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateShowTitleOnScroll)
})
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    padding: 0 calc(var(--container-padding) - var(--nav-padding));
    z-index: 100;
    background: rgba(26, 26, 26, 0.9);
    backdrop-filter: blur(30px);
}

.navbar-content {
    width:100%;
    display: flex;
    justify-content: space-between;
    min-height: 44px;
    max-width: calc(var(--container-width) + calc(var(--nav-padding) * 2));
    padding: 5px 0;
}

.navbar-title {
    padding-left: calc(var(--container-padding) - var(--nav-padding));
    margin: 0;
    font-size: 14px;
    opacity: 0;
    transform: translateY(-4px);
    transition: opacity 250ms ease, transform 250ms ease;
}

.font-weight-light {
    font-weight: 400;
}

.navbar-title.visible {
    opacity: 1;
    transform: translateY(0);
}

.navbar-title-name {
    font-size: 16px;
}

.navbar-title-subtitle {
    color: var(--accent-color);
    font-weight: 400;
}

/* Desktop Navigation */
.nav-desktop {
    display: flex;
    width: 100%;
    justify-content: space-between;
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
    padding: 10px var(--nav-padding);
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
    margin-top: 6px;
    margin-right: var(--nav-padding);

    &:hover .hamburger-line {
        background: var(--accent-color);
    }
}

.hamburger-line {
    width: 100%;
    height: 2px;
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
    padding: 80px var(--nav-padding) 40px var(--nav-padding);
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
@media (max-width: 856px) {
    .navbar {
        justify-content: space-between;
    }

    .navbar-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: var(--nav-padding);
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

@media (min-width: 856px) {
    .hamburger-btn {
        display: none;
    }
    
    .mobile-menu {
        display: none;
    }

    .navbar-title {
        display: none;
    }
}
</style>