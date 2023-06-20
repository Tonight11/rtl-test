<script setup lang="ts">
	defineEmits(['closeModal']);
</script>

<template>
	<div class="modal">
		<div class="modal__close" @click="$emit('closeModal')">X</div>
		<slot />
	</div>
</template>

<style lang="scss" scoped>
	.modal {
		background: rgba(38, 38, 38, 0.5);
		max-width: 250px;
		z-index: 100;
		/* Primary Border */
		backdrop-filter: blur(8px);
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;

		&__close {
			position: absolute;
			top: 10px;
			right: 10px;
			cursor: pointer;
			z-index: 2;
		}
	}

	.add-item {
		position: relative;
		top: auto;
		bottom: auto;
		right: auto;
		max-width: 100%;
	}
</style>
