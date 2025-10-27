<template>
	<Teleport to="body">
		<transition name="fade">
			<div
				v-if="modelValue"
				class="modal-overlay"
				role="dialog"
				aria-modal="true"
				:aria-labelledby="title ? titleId : undefined"
				:aria-label="!title && ariaLabel ? ariaLabel : undefined"
				@click="onOverlayClick"
			>
				<div class="modal-content" @click.stop>
					<button ref="closeButtonRef" class="modal-close" @click="close" aria-label="Close">×</button>
					<h4 v-if="title" :id="titleId" class="modal-title">{{ title }}</h4>
					<slot />
				</div>
			</div>
		</transition>
	</Teleport>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch, nextTick } from 'vue'

const props = defineProps({
	modelValue: { type: Boolean, required: true },
	title: { type: String, default: '' },
	ariaLabel: { type: String, default: '' },
	closeOnEsc: { type: Boolean, default: true },
	closeOnOverlay: { type: Boolean, default: true },
	lockScroll: { type: Boolean, default: true },
})

const emit = defineEmits(['update:modelValue', 'open', 'close'])

const closeButtonRef = ref(null)
const titleId = `modal-title-${Math.random().toString(36).slice(2)}`

function close() {
	emit('update:modelValue', false)
	emit('close')
}

function onOverlayClick() {
	if (props.closeOnOverlay) close()
}

function onKeydown(event) {
	if (event.key === 'Escape' && props.closeOnEsc && props.modelValue) {
		close()
	}
}

watch(
	() => props.modelValue,
	async (isOpen) => {
		if (isOpen) {
			emit('open')
			await nextTick()
			if (closeButtonRef.value) closeButtonRef.value.focus()
			if (props.lockScroll) document.body.style.overflow = 'hidden'
		} else {
			if (props.lockScroll) document.body.style.overflow = ''
		}
	},
	{ immediate: true }
)

onMounted(() => {
	window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
	window.removeEventListener('keydown', onKeydown)
	// restore scroll if needed
	document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.9);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
}

.modal-content {
	position: relative;
	background: #0b0b0b;
	padding: 16px;
	border-radius: 10px;
	width: 90%;
	max-width: 900px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
	border: 1px solid rgba(0, 255, 221, 0.4);
}

.modal-title {
	margin: 0;
	line-height: 2;
	margin-bottom: 1rem;
}

.modal-close {
	position: absolute;
	top: 0;
	right: 0;
	font-size: 28px;
	line-height: 1;
	border: none;
	background: transparent;
	color: #fff;
	cursor: pointer;
	transition: all 0.1s ease;
	height: 64px;
	width: 64px;
}

.modal-close:hover {
	color: var(--accent-color);
	transform: scale(1.2);
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>

