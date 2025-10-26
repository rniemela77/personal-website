<template>
	<div class="project">
		<div class="project-image">
			<img src="/assets/images/somni.jpg" alt="Somni" width="100%" loading="lazy"/>
		</div>

		<div class="project-description">
			<h3 class="project-title">Somni</h3>

			<p class="text-muted">
				Somni is an AI-powered personality app that reimagines self-discovery. Through 20 interactive quizzes, it builds a personal profile and transforms it into a unique mythic archetype, complete with insights into essence, challenges, and destiny.
			</p>

			<p class="text-muted text-small">
				<b>Built with Vue.js, TypeScript, OpenAI API, Firebase, and Netlify Functions.</b>
			</p>

			<a href="https://somni.quest" target="_blank">View Project</a> | <a
				href="https://github.com/rniemela77/somni" target="_blank">GitHub</a>

			<div class="case-study-link">
				<router-link to="/blog/somni-case-study">Read the full case study →</router-link>
			</div>
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
    box-shadow: 0 0 5px 0 rgba(0 255 221 / 0.7);
}

.case-study-link {
	margin-top: 30px;
}

@media screen and (max-width: 800px) {
	.project {
		flex-direction: column;
		gap: 0;
	}
}
</style>