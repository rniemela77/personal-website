<template>
    <div>
        <NavBar />

        <div class="container">
            <transition name="page" mode="out-in">
                <router-view />
            </transition>
        </div>

        <AppBackground />
    </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import AppBackground from './components/AppBackground.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

:root {
    --accent-color: #3BD496;
}
html, body {
    background-color: #1a1a1a;
}

body {
    padding: 0;
    margin: 0;
    color: #E8E8E8;
    font-size: 14px;
    overflow-x: hidden;
}

html {
    box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
}

a {
    color: var(--accent-color);
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 5% 5% 5%;
}

.section-title {
    color: var(--accent-color);
}

#app {
    font-family: 'Inter', sans-serif;
}

/* Page transition styles */
.page-enter-active,
.page-leave-active {
    transition: all 0.3s ease;
}

.page-enter-from {
    opacity: 0;
    transform: translateX(20px);
}

.page-leave-to {
    opacity: 0;
    transform: translateX(-20px);
}

.page-enter-to,
.page-leave-from {
    opacity: 1;
    transform: translateX(0);
}

@media (max-width: 768px) {
    #app {
        padding: 2.5%;
    }
}

.text-muted {
    color: #ccc;
}

.text-small {
    font-size: 12px;
}

.section-divider {
    border: 1px solid #3BD4971C;
    margin: 30px 0;
}
</style>