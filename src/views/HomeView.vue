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
				<Transition name="addModal">
					<Modal
						v-if="addModal"
						@closeModal="addModal = false"
						class="add-item"
					>
						<AddItem @close-add="addModal = false" />
					</Modal>
				</Transition>
			</div>
		</div>
	</main>
</template>

<style lang="scss">
	.addModal-enter-active,
	.addModal-leave-active {
		transition: all 0.5s ease;
	}

	.addModal-enter-from,
	.addModal-leave-to {
		transform: translateY(100px);
		opacity: 0;
	}
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
