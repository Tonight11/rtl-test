<script setup lang="ts">
	defineEmits(['cancelDelete', 'deleteItem']);
</script>

<template>
	<div class="confirmation-dialog">
		<slot />
		<div class="confirmation-dialog-buttons">
			<button class="btn btn-white" @click="$emit('cancelDelete')">
				Отмена
			</button>
			<button class="btn btn-red" @click="$emit('deleteItem')">Удалить</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.confirmation-dialog {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(38, 38, 38, 0.6);
		z-index: 1;
		padding: 20px;

		/* Primary Border */
		border: 1px solid #4d4d4d;
		backdrop-filter: blur(8px);
	}
	.confirmation-dialog-buttons {
		display: flex;
		gap: 10px;
	}
</style>
