<template>
    <div class="blog-post">
        <h2>Building a personality quiz that goes deeper</h2>
        <i class="subtitle">What if a personality quiz could tell a story about you?</i>

        <h3>Why I made it</h3>
        <p>Most personality tests felt too rigid: 16 types (MBTI), 5 traits (Big Five), 9 numbers (Enneagram). I wanted something that could measure the user across more dimensions, and receive more nuanced results.</p>
        
        <p>So, I built a quiz that uses sliders instead of yes-no answers, letting users shade their answers, not just pick hard 1s and 0s.</p>
        
        <p>After the quiz, I wanted the user to see how their dominant personality trait can be a strength. Then, in the AI Insights, I wanted the user to see themselves in new ways, not just data, but animals, myths, and narratives that say more than just "you're a 5 on the introversion scale".</p>

        <h3>Tech Stack</h3>
        <p>I built it with Vue.js and TypeScript for the frontend, OpenAI for the AI magic, Netlify Functions for the backend, and Firebase for auth and storage.</p>
    
        <h3>The Hard Parts</h3>
        <p>Figuring out what to build first was both easy and hard. Prioritizing was harder than I thought; quizzes, user profiles, and AI integration all felt like they were equally important.</p>

        <p>The UI kept changing, too. I'd build something, change my mind on the vision of the app and the user flow, and have to start over.</p>

        <p>Optimizing the AI was another pain, I iterated on prompts for a long time to get it to reliably generate responses I liked. I ended up forcing the AI to generate JSON responses so that I could parse and store it properly.</p>

        <p>I wanted the AI to generate a lot of content for the user, but I didn't want to pay an absurd amount of money for it. I did my best to optimize token usage, using a cheaper model, and limiting user AI requests until they paid.</p>

        <p>Stripe webhooks were the hardest part. I had to figure out how to handle the different events, and how to store the data in a way that was easy to query and display.</p>

        <h3>What's Next</h3>
        <p>I'm going to be adding more personality dimensions (quizzes), and more AI content to the app. I also want to include some social features to it so it doesn't feel so lonely for the user.</p>

        <p>I imagine a more guided "story-telling" vibe in the user flow that puts more emphasis on the AI content would turn this app into something far more impressive.</p>

        <hr class="section-divider"></hr>
        <p>Check out the app <a href="https://somni.quest" target="_blank">here</a>, and let me know what you think!</p>
    </div>
</template>

<script setup>
</script>