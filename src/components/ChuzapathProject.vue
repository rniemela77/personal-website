<template>
    <div class="project">
        <div class="project-image">
            <img src="/assets/images/chuzapath.jpg" alt="Chuzapath" width="100%" loading="lazy">
        </div>

        <div class="project-description">
            <h3 class="project-title">Chuzapath</h3>

            <p class="text-muted">AI-driven choose-your-own-adventure game. Player makes choices, AI generates story.</p>

            <p class="text-muted text-small"><b>Built with Vue.js, OpenAI API, and Netlify Functions.</b></p>

            <a href="https://chuzapath.netlify.app" target="_blank">View Project</a> | <a
                href="https://github.com/rniemela77/CYOA-game" target="_blank">GitHub</a>
        </div>
    </div>
</template>

<style scoped>
.project {
    display: flex;
    align-items: center;
    gap: 30px;
}

.project-image {
    flex: 0 0 350px;
}

.project-description {
    padding: 10px;
}

.project-title {
    font-size: 18px;
}

img {
    width: 100%;
    max-width: 350px;
    height: auto;
    border-radius: 10px;
	border: 0.5px solid #000;
}

@media screen and (max-width: 800px) {
	.project {
		flex-direction: column;
		gap: 0;
	}

    .project-image {
        flex: 0;
    }
}
</style>