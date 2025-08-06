<template>
    <div class="experience-section">
        <div class="experience-container">
            <div class="experience-item" v-for="(experience, index) in experiences" :key="experience.company">
                <div class="experience-item-header">
                    <b>{{ experience.title }}</b>
                    <span>({{ experience.company }})</span>
                    <span class="text-muted">{{ experience.date }}</span>
                </div>

                <ul>
                    <li v-for="bullet in experience.bullets" :key="bullet">{{ bullet }}</li>
                </ul>

                <hr class="section-divider" v-if="index !== experiences.length - 1">
            </div>
        </div>
    </div>
</template>

<script setup>
const experiences = [
    {
        company: "Goodwill of Central and Northern Arizona",
        date: "June 2022 - April 2025",
        title: "Software Engineer I",
        bullets: [
            "Led migration from PHP Blade to Vue.js, improving site performance and maintainability",
            "Implemented Pinia for state management, improving efficiency and code organization",
            "Optimized Webpack bundle splitting to load large libraries only on specific pages, reducing initial page load time by 40%"
        ]
    },
    {
        company: "Chapman Automotive Group",
        date: "May 2021 - April 2022",
        title: "Developer",
        bullets: [
            "Added interactive filters to online store using Vue.js, improving user experience",
            "Rebuilt vehicle detail page, for better performance and design",
            "Implemented Jest testing to ensure frontend reliability"
        ]
    }
]
</script>

<style scoped>
.experience-item-header {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

ul {
    margin-top: 10px;
}

li {
    line-height: 1.5;
}

li::marker {
    color: var(--accent-color);
}
</style>