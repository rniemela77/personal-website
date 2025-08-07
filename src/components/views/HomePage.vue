<template>
    <div>
        <div class="name-title animate-on-scroll" data-animation="fade-in">
            <h1 class="name">Robert Niemela</h1>
            <p class="title">Front-End Engineer</p>
        </div>

        <section id="projects" class="animate-on-scroll" data-animation="slide-up">
            <h2 class="section-title">Featured Projects</h2>

            <div class="section-card">
                <SomniProject />

                <hr class="section-divider">

                <ChuzapathProject />
            </div>
        </section>

        <section id="blog" class="animate-on-scroll" data-animation="slide-up">
            <h2 class="section-title">Blogs</h2>

            <div class="section-card">
                <BlogsContainer />
            </div>
        </section>

        <section id="skills" class="animate-on-scroll" data-animation="slide-up">
            <h2 class="section-title">Skills</h2>

            <div class="section-card">
                <SkillsSection />
            </div>
        </section>

        <section id="education" class="animate-on-scroll" data-animation="slide-up">
            <h2 class="section-title">Education</h2>

            <div class="section-card">
                <EducationSection />
            </div>
        </section>

        <section id="experience" class="animate-on-scroll" data-animation="slide-up">
            <h2 class="section-title">Experience</h2>

            <div class="section-card">
                <ExperienceSection />
            </div>
        </section>

        <section id="contact" class="animate-on-scroll" data-animation="slide-up">
            <h2 class="section-title">Contact</h2>

            <div class="section-card">
                <ContactSection />
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import SomniProject from '../SomniProject.vue'
import ChuzapathProject from '../ChuzapathProject.vue'
import BlogsContainer from '../BlogsContainer.vue';
import SkillsSection from '../SkillsSection.vue';
import EducationSection from '../EducationSection.vue';
import ExperienceSection from '../ExperienceSection.vue';
import ContactSection from '../ContactSection.vue';

onMounted(() => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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