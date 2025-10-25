<template>
    <div class="project">
        <div class="project-image">
            <img src="/assets/images/doohickeyinteractive.jpg" alt="Doohickey Interactive" width="100%" loading="lazy">
        </div>

        <div class="project-description">
            <h3 class="project-title">Doohickey Interactive</h3>

            <p class="text-muted">Interactive experience featuring puzzles, effects, audio and a mysterious story.</p>

            <p class="text-muted text-small"><b>Built with Vue.js.</b></p>

            <a href="https://doohickey-interactive.netlify.app" target="_blank">View Project</a> | <a
                href="https://github.com/rniemela77/doohickey-interactive" target="_blank">GitHub</a>
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
    box-shadow: 0 0 4px 0 rgba(0 255 221 / 0.4);
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