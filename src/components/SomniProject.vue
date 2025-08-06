<template>
	<div class="project">
		<div class="project-image">
			<img src="/assets/images/somni.png" alt="Somni" width="100%" />
		</div>

		<div class="project-description">
			<h3 class="project-title">Somni - Personality Analyzer</h3>

			<p class="text-muted">
				I wanted a personality quiz that went deeper than the usual tests. So I built one that uses AI to
				analyze users across 16+ spectrums, matching them with mythological figures, tarot archetypes, and spirit animals. It's not
				perfect yet, but it's a start.
			</p>

			<p class="text-muted text-small">
				<b>Built with Vue.js, TypeScript, OpenAI API, Firebase, and Netlify Functions.</b>
			</p>

			<a href="https://somni.netlify.app" target="_blank">View Project</a> | <a
				href="https://github.com/rniemela77/somni" target="_blank">GitHub</a>
		</div>
	</div>
</template>

<style scoped>
.project {
	display: flex;
	align-items: center;
	gap: 30px;
}

.project-title {
	font-size: 24px;
}

.project-image {
	flex: 0 1 60%;
}

.project-description {
	flex: 1;
	padding: 30px;
}

.project img {
	width: 100%;
	height: auto;
	max-width: 800px;
	border-radius: 10px;
	border: 0.5px solid #000;
}

@media screen and (max-width: 800px) {
	.project {
		flex-direction: column;
		gap: 0;
	}
}
</style>