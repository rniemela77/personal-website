<template>
    <div class="blogs-container">
        <div class="blogs">
            <div class="blog" v-for="blog in blogs">
                <b>{{ blog.title }}</b>

                <p class="text-muted">{{ blog.description }}</p>

                <a :href="`/blog/${blog.slug}`">Read More</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import SomniProgress from './blog-posts/SomniProgress.vue'
import KnowingLess from './blog-posts/KnowingLess.vue'

const blogs = [
    {
        title: 'Building a personality quiz that goes deeper',
        description: 'I built a quiz that ditches rigid categories for AI generated profiles, mixing psychology with mythology.',
        slug: 'building-personality-quiz',
    },
    {
        title: 'Knowing Less, Growing More',
        description: 'How to grow without falling apart.',
        slug: 'knowing-less-growing-more',
    }
]
</script>

<style>
.blogs-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.blogs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
}

.blog {
    flex: 300px;
    border: 1px solid #3BD4971C;
    border-radius: 10px;
    padding: 20px;
}
</style>