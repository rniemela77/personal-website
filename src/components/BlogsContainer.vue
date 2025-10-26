<template>
    <div class="blogs-container">
        <div class="blogs">
            <div class="blog" v-for="blog in blogs">
                <b>{{ blog.title }}</b>

                <p class="text-muted">{{ blog.description }}</p>

                <p class="date"><small>{{ blog.date }}</small></p>

                <a :href="`/blog/${blog.slug}`">Read More</a>
            </div>
        </div>
    </div>
</template>

<script setup>
const blogs = [
    {
        title: 'Somni Case Study',
        description: 'I built the personality app from the ground up, and learned a lot in the process.',
        slug: 'somni-case-study',
        date: 'October 26, 2025',
    },
    {
        title: 'Openness to Learning',
        description: 'Notes on how to grow and learn.',
        slug: 'knowing-less-growing-more',
        date: 'August 10, 2025',
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

.date {
    font-size: 12px;
    font-style: italic;
    color: #ccc;
}
</style>