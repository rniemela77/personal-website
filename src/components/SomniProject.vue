<template>
	<div class="project">
		<button class="project-image" 
				@click="openModal"
				@keydown.enter.prevent="openModal"
				@keydown.space.prevent="openModal"	
				aria-label="Click to watch demo video"
		>
			<img src="/assets/images/somni.png" alt="Somni" width="100%" loading="lazy"/>
			<span>Watch demo video</span>
		</button>

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

    <!-- Video Modal -->
    <Modal
        v-model="isModalOpen"
        title="Somni demo video"
        aria-label="Somni demo video"
    >
        <div class="video-wrapper">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/vbswZ26iymg?si=-s_vIdQ9a8dGwy4g"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </div>
    </Modal>
</template>

<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'

const isModalOpen = ref(false)

function openModal() {
	isModalOpen.value = true
}
</script>

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
	cursor: pointer;
	background: none;
	border: none;
	line-height: 1;
	color: #ccc;

	& span {
		transition: all 0.2s ease;
		display: block;
		padding: 10px;
		font-size: 14px;
		font-style: italic;
	}

	&:hover {
		color: var(--accent-color);
		text-decoration: underline;
	}
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
	cursor: pointer;
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

.video-wrapper {
	position: relative;
	width: 100%;
	padding-top: 56.25%; /* 16:9 */
	overflow: hidden;
	border-radius: 8px;
	border: 1px solid rgba(255, 255, 255, 0.1);
}

.video-wrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: 0;
}

/* fade transition now provided by Modal.vue too, but keeping here for scope safety if needed */
/* .fade-* classes may be defined globally in Modal.vue */
</style>