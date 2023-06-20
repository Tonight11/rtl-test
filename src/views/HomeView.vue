<script setup lang="ts">
	import { ref } from 'vue';

	import Inventory from '@/components/Inventory.vue';
	import Profile from '@/components/Profile.vue';
	import AddItem from '@/components/AddItem.vue';
	import Modal from '@/components/Modal.vue';

	const addModal = ref(false);
</script>

<template>
	<main>
		<div class="menu">
			<div class="menu__inner">
				<div class="menu__main">
					<Profile @open-add="addModal = true" />
					<Inventory />
				</div>
				<Modal v-if="addModal" @closeModal="addModal = false" class="add-item">
					<AddItem />
				</Modal>
			</div>
		</div>
	</main>
</template>

<style lang="scss">
	.menu {
		display: flex;
		justify-content: center;

		&__inner {
		}
		&__main {
			display: flex;
			gap: 25px;
			margin-bottom: 25px;
		}
	}
</style>
