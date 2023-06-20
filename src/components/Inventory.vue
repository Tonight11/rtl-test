<template>
	<div class="inventory">
		<VueDraggableNext class="inventory-grid" :list="mylist">
			<ItemInventory
				v-for="element in mylist"
				:key="element?.id"
				class="list-inventory-item"
				:class="{ 'not-draggable': !enabled }"
				:item="element"
				@show-details="showItemDetails"
			/>
		</VueDraggableNext>
		<Transition name="modal">
			<Modal v-if="selectedItem" @closeModal="closeItemDetails">
				<ItemDetail :item="selectedItem" @delete="deleteItem" />
			</Modal>
		</Transition>
	</div>
</template>

<script setup lang="ts">
	import ItemInventory from './Item.vue';
	import ItemDetail from './ItemDetail.vue';
	import { VueDraggableNext } from 'vue-draggable-next';
	import Modal from './Modal.vue';
	import { useInventoryrStore } from '@/stores/inventory';
	import { storeToRefs } from 'pinia';

	const { deleteItem } = useInventoryrStore();
	const { mylist, enabled, selectedItem } = storeToRefs(useInventoryrStore());

	const showItemDetails = (item: any) => {
		selectedItem.value = item.item;
	};
	const closeItemDetails = () => {
		selectedItem.value = null;
	};
</script>

<style scoped>
	.modal-enter-active,
	.modal-leave-active {
		transition: all 0.5s ease;
	}

	.modal-enter-from,
	.modal-leave-to {
		transform: translateX(100px);
		opacity: 0;
	}
	.inventory {
		display: flex;
		background: #262626;
		position: relative;

		/* Primary Border */
		border: 1px solid #4d4d4d;
		border-radius: 12px;
		overflow: hidden;
	}

	.inventory-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	.list-inventory-item {
		padding: 35px;
		min-height: 100px;
		min-width: 110px;
		border: 1px solid #4d4d4d;
	}

	.inventory-row {
		display: flex;
	}

	.inventory-slot {
		border: 1px solid #ccc;
		width: 100px;
		height: 100px;
	}

	.item {
		cursor: move;
	}
</style>
