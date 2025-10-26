<template>
    <div class="blog-post">
        <h2>Somni</h2>

        <p>
            Somni is an AI-powered personality web app that blends psychology and mythology. 
            It features 20 interactive quizzes that use sliders instead of multiple-choice questions 
            for more nuanced answers. Using AI, Somni combines quiz data to create a unique 
            mythic persona archetype that reflects each user's strengths, struggles, and overall essence.
        </p>

        <h3>Motivation</h3>
        <p>
            I built Somni to practice front-end, back-end, and UI/UX design while creating something I would 
            actually want to use. I've always enjoyed personality quizzes, but most of them feel binary. I wanted to design something that treated personality as a spectrum, where answers could 
            express degrees instead of absolutes. I thought- it would be really cool if it combined all my results into one unique archetype, too.
        </p>
        <p>
            I also wanted to learn how to work with a NoSQL database and explore using AI in a meaningful way. 
            My goals included building with Vue.js and TypeScript, setting up Firebase for authentication 
            and data storage, and using the OpenAI API to turn user results into narrative insights. 
            The main idea was to reflect a user's personality back to them as a symbolic mythic character.
        </p>

        <h3>Approach</h3>
        <p>
            I started with the hardest problems first, like authentication, database setup, and connecting APIs. 
            Once the foundation was stable, I mapped out the entire user flow on a whiteboard, 
            from user signup, to quiz results, to the AI-generated mythic archetype. I switched between building the front-end and refining the design, which helped me 
            see how closely UI and UX decisions are connected.  
        </p>
        <p>
            I also tried to think ahead about scalability, planning how I could add new quizzes or archetypes 
            without rebuilding major parts of the app.
        </p>

        <h3>Design & Experience</h3>
        <p>
            I wanted Somni's interface to be easy to use, but also have a mythic, fun feel.
            I went with a dark color palette with deep blues and purples, and a background image of mountains with a night sky.
            I also used a lot of gradients and animations to create a sense of depth and fun.
        </p>

        <h3>Challenges & Learnings</h3>
        <p>
            Working on both the UI/UX and interface at the same time slowed me down. 
            I ended up changing my mind about the user flow a few times.
            In the future, I would separate design and engineering phases more clearly, 
            focusing on clear design phases before building.
            I would also run user tests earlier, since that would help me understand how users interacted with the app.
            Another massive challenge I ran into was prompt engineering for the AI. 
            I went through a lot of trial and error to get it to generate the kind of responses I wanted. I can honestly say that I learned *a lot* about how to speak to an LLM model like GPT-5.
        </p>
        <p>
            This project helped me build a complete product from start to finish.
            I learned Firebase in depth, strengthened my front-end architecture skills, 
            and practiced designing user flows that were purposeful and easy to use. 
            Most importantly, I learned how to integrate AI into a project in a way that felt useful.
        </p>

        <h3>Reflection</h3>
        <p>
            Somni was something I wanted to exist, so I built it. 
            It let me create something new, solve problems I hadn't faced before, and build the kind of app I'd actually want to use myself.
            It also taught me how to handle the complexities of AI integration and prompt engineering.
        </p>

        <hr class="section-divider"></hr>
        <p>Want to check Somni out for yourself? You can find it <a href="https://somni.quest" target="_blank">here</a>, and let me know what you think!</p>
    </div>
</template>

<script setup>
</script>