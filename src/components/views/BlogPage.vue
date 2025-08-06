<template>
    <div>
        <button @click="goBack">Back</button>
        
        <div v-if="component" class="blog-post">
            <component :is="component" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import SomniProgress from '../blog-posts/SomniProgress.vue'
import KnowingLess from '../blog-posts/KnowingLess.vue'

const posts = [
    {
        slug: 'building-personality-quiz',
        component: SomniProgress
    },
    {
        slug: 'knowing-less-growing-more',
        component: KnowingLess
    }
]

const router = useRouter()

const component = computed(() => {
    return posts.find(post => post.slug === router.currentRoute.value.params.post)?.component
})

const goBack = () => {
    router.push('/')
}
</script>

<style scoped>
button {
    color: var(--accent-color);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 5px;

    &::before {
        content: '←';
        margin-right: 10px;
    }

    &:hover {
        border: 1px solid var(--accent-color);
    }
}
</style>

<style>
.blog-post {
    h2 {
        text-transform: uppercase;
        font-size: 32px;
        margin-bottom: 10px;
        display: inline-block;

        &::after {
            content: '';
            display: block;
            width: 100%;
            margin-top: 10px;
            height: 3px;
            background: linear-gradient(to right, var(--accent-color) 0%, #3BD49700 100%);
        }
    }

    .subtitle {
        display: block;
        color: #ccc;
        margin-bottom: 30px;
        font-size: 16px;
    }

    h3 {
        font-size: 20px;
        margin-bottom: 10px;
        color: var(--accent-color);

        &:not(:first-child) {
            margin-top: 30px;
        }
    }

    p {
        margin-bottom: 20px;
        line-height: 1.5;
        font-size: 16px;
        color: #ccc;
    }
}
</style>