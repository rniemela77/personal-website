<template>
    <div class="contact-section">
        <h3 class="contact-section-title">I'm open to full-time opportunities and collaborations.</h3>
        
        <div class="contact-container">
            <div class="contact-item" v-for="item in contactItems" :key="item.name">
                <h3>{{ item.name }}</h3>

                <a :href="item.link" target="_blank">{{ item.value }}</a>
            </div>
        </div>
    </div>
</template>

<script setup>
const contactItems = [
    {
        name: "Email",
        value: "rvniemela@hotmail.com",
        link: "mailto:rvniemela@hotmail.com"
    },
    {
        name: "LinkedIn",
        value: "LinkedIn",
        link: "https://www.linkedin.com/in/robert-niemela/"
    },
    {
        name: "GitHub",
        value: "GitHub",
        link: "https://github.com/rniemela77"
    }
]
</script>

<style scoped>
.contact-section-title {
    border-bottom: 1px solid #3BD49770;
    display: inline-block;
}

.contact-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.contact-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
}
</style>