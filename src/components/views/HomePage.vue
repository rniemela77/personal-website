<template>
    <div>
        <div class="name-title animate-on-scroll" data-animation="fade-in">
            <h1 class="name">Robert Niemela</h1>
            <p class="title">Full-Stack Web Developer <span class="title-parentheses">(Front-End Focused)</span></p>
            <button class="btn-primary btn-glow" @click="scrollToSection('#projects')">View My Projects</button>
            <div class="bio">
                <p>I build clean, optimized UIs and thoughtful full-stack applications with a focus on performance and usability.</p>
                <p>I approach every project with a beginner's mind- experimenting, refining, and solving problems creatively.</p>
                <p>Recently, I built <a href="https://somni.quest" target="_blank">Somni</a>, an AI-powered personality platform that blends psychology, mythology, and modern user experience.</p>
            </div>
        </div>

        <section id="projects">
            <div class="animate-on-scroll" data-animation="slide-up">
                <h2 class="section-title">Featured Projects</h2>

                <div class="section-card">
                    <SomniProject />

                    <hr class="section-divider">

                    <ChuzapathProject />

                    <hr class="section-divider">

                    <DoohickeyInteractiveProject />
                </div>
            </div>
        </section>

        <section id="skills">
            <div class="animate-on-scroll" data-animation="slide-up">
                <h2 class="section-title">Skills</h2>

                <div class="section-card">
                    <SkillsSection />
                </div>
            </div>
        </section>

        <section id="education">
            <div class="animate-on-scroll" data-animation="slide-up">
                <h2 class="section-title">Education</h2>

                <div class="section-card">
                    <EducationSection />
                </div>
            </div>
        </section>

        <section id="experience">
            <div class="animate-on-scroll" data-animation="slide-up">
                <h2 class="section-title">Experience</h2>

                <div class="section-card">
                    <ExperienceSection />
                </div>
            </div>
        </section>

        <section id="blog">
            <div class="animate-on-scroll" data-animation="slide-up">
                <h2 class="section-title">Blogs</h2>

                <div class="section-card">
                    <BlogsContainer />
                </div>
            </div>
        </section>

        <section id="contact">
            <div class="animate-on-scroll" data-animation="slide-up">
                <h2 class="section-title">Contact</h2>

                <div class="section-card">
                    <ContactSection />
                </div>
            </div>
        </section>

        <section id="resume">
            <div class="animate-on-scroll" data-animation="slide-up">
                <h2 class="section-title">Resume</h2>

                <div class="section-card">
                    <ResumeSection />
                </div>
            </div>
        </section>

        <div class="text-center">
            <h2>Ready to bring thoughtful engineering to your team.</h2>

            <div class="btn-container">
                <button class="btn-primary" @click="scrollToSection('#contact')">Hire Me</button>

                <button class="btn-primary" @click="scrollToSection('#projects')">View Projects</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { scrollToSection as scrollToSectionHelper } from '../../helpers/scrollToSection'
import SomniProject from '../SomniProject.vue'
import ChuzapathProject from '../ChuzapathProject.vue'
import DoohickeyInteractiveProject from '../DoohickeyInteractiveProject.vue'
import BlogsContainer from '../BlogsContainer.vue';
import SkillsSection from '../SkillsSection.vue';
import EducationSection from '../EducationSection.vue';
import ExperienceSection from '../ExperienceSection.vue';
import ContactSection from '../ContactSection.vue';
import ResumeSection from '../ResumeSection.vue';

const router = useRouter()
const scrollToSection = async (sectionId) => scrollToSectionHelper(router, sectionId)

onMounted(() => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});
</script>

<style scoped>
.name-title {
    text-align: center;
    margin: clamp(30px, 5vw, 100px) 0;
}

.name {
    font-size: 48px;
    margin-top: 80px;
    margin-bottom: 0;
    line-height: 1;
}

.title {
    margin-top: 0;
    font-size: 20px;
    font-weight: 300;
    color: #62ffc1;
    margin-bottom: 3rem;
}

.title-parentheses {
    white-space: nowrap;
}

.btn-glow {
    box-shadow: 0 0 36px rgb(0 255 221 / 15%);
}

.bio {
    max-width: 65ch;
    display: block;
    line-height: 2;
    text-align: left;
    margin: 1.5rem auto clamp(4rem, 8vw, 8rem);
    font-size: 16px;
    color: #d3d3d3;
    padding: 1rem;
}

.section-card {
    margin-bottom: clamp(30px, 10vw, 100px);
    border: 1px solid #3BD49770;
    background: #00382110;
    box-shadow: 0 0 10px 0 rgba(0 255 221 / 0.11);
    border-radius: 10px;
    padding: 20px;
}

.text-center {
    text-align: center;
}

.btn-container {
    display: flex;
    gap: 40px;
    justify-content: center;
    margin: 2rem 0 4rem;
}

.btn-primary {
    background: var(--accent-color);
    color: #000;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;
    padding: 10px 20px;
    text-decoration: none;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
        background: white;
    }
}

/* Animation base styles */
.animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-on-scroll.animate {
    opacity: 1;
    transform: translateY(0);
}

/* Fade-in animation for the title */
[data-animation="fade-in"] {
    transform: translateY(20px);
}

[data-animation="fade-in"].animate {
    transform: translateY(0);
}

/* Slide-up animation for sections */
[data-animation="slide-up"] {
    transform: translateY(40px);
}

[data-animation="slide-up"].animate {
    transform: translateY(0);
}

/* Stagger animation for child elements */
.animate-on-scroll.animate .section-card {
    animation: slideInContent 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
}

@keyframes slideInContent {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .animate-on-scroll {
        transform: translateY(20px);
    }

    [data-animation="slide-up"] {
        transform: translateY(25px);
    }
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
    .animate-on-scroll {
        transition: none;
        transform: none;
        opacity: 1;
    }

    .animate-on-scroll.animate {
        transform: none;
    }

    .animate-on-scroll.animate .section-card {
        animation: none;
    }
}
</style>