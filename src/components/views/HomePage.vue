<template>
    <div>
        <div class="name-title">
            <h1 class="name">Robert Niemela</h1>
            <p class="title">Front-End Engineer</p>
        </div>

        <section id="projects">
            <h2 class="section-title">Featured Projects</h2>

            <div class="section-card">
                <SomniProject />

                <hr class="section-divider">

                <ChuzapathProject />
            </div>
        </section>

        <section id="blog">
            <h2 class="section-title">Blogs</h2>

            <div class="section-card">
                <BlogsContainer />
            </div>
        </section>

        <section id="skills">
            <h2 class="section-title">Skills</h2>

            <div class="section-card">
                <SkillsSection />
            </div>
        </section>

        <section id="education">
            <h2 class="section-title">Education</h2>

            <div class="section-card">
                <EducationSection />
            </div>
        </section>

        <section id="experience">
            <h2 class="section-title">Experience</h2>

            <div class="section-card">
                <ExperienceSection />
            </div>
        </section>

        <section id="contact">
            <h2 class="section-title">Contact</h2>

            <div class="section-card">
                <ContactSection />
            </div>
        </section>
    </div>
</template>

<script setup>
import SomniProject from '../SomniProject.vue'
import ChuzapathProject from '../ChuzapathProject.vue'
import BlogsContainer from '../BlogsContainer.vue';
import SkillsSection from '../SkillsSection.vue';
import EducationSection from '../EducationSection.vue';
import ExperienceSection from '../ExperienceSection.vue';
import ContactSection from '../ContactSection.vue';
</script>

<style scoped>
.name-title {
    text-align: center;
    margin: clamp(30px, 5vw, 100px) 0;
}

.name {
    font-size: 48px;
}

.title {
    font-size: 24px;
}

.section-card {
    margin-bottom: 100px;
    border: 1px solid #3BD49770;
    background: #00382110;
    box-shadow: 0 0 10px 0 rgba(0 255 221 / 0.11);
    border-radius: 10px;
    padding: 20px;
}
</style>