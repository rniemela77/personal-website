<template>
    <div class="skills-section">
        <div class="skills-container">
            <div class="skill-section" v-for="skillSection in skills">
                <b>{{ skillSection.name }}</b>

                <div class="skill-section-list">
                    <div class="skill" v-for="skill in skillSection.skills" :key="skill.name">
                        <div class="skill-icon">
                            <img :src="`/assets/icons/${skill.icon}.svg`" :alt="skill.name" width="20" height="20" />
                        </div>

                        <b>{{ skill.name }}</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const skills = [
    {
        name: 'Frontend',
        skills: [
            {
                name: 'Vue.js',
                icon: 'vue'
            },
            {
                name: 'TypeScript',
                icon: 'typescript'
            },
            {
                name: 'Sass',
                icon: 'sass'
            },
        ]
    },
    {
        name: 'Testing',
        skills: [
            {
                name: 'Jest',
                icon: 'jest'
            },
            {
                name: 'Cypress',
                icon: 'cypress'
            },
        ]
    },
    {
        name: 'Backend',
        skills: [
            {
                name: 'Laravel',
                icon: 'laravel'
            },
            {
                name: 'Firebase',
                icon: 'firebase'
            },
            {
                name: 'SQL',
                icon: 'sql'
            }
        ]
    }
];
</script>

<style scoped>
.skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
}

.skill-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
}

.skill-section-list {
    display: flex;
    gap: 20px;
}

.skill {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>