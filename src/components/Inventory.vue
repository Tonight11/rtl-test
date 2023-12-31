<template>
	<div class="inventory">
		<VueDraggableNext class="inventory-grid" :list="mylist" handle=".handle">
			<ItemInventory
				v-for="element in mylist"
				:key="element.item?.id"
				class="list-inventory-item"
				:class="{ handle: element.item !== null }"
				:item="element"
				@show-details="showItemDetails"
			/>
		</VueDraggableNext>
		<Transition name="modal">
			<Modal v-if="selectedItem" @closeModal="closeItemDetails" ref="target">
				<ItemDetail :item="selectedItem" @delete="deleteItem" />
			</Modal>
		</Transition>
	</div>
</template>

<script setup lang="ts">
	import { onClickOutside } from '@vueuse/core';
	import ItemInventory from './Item.vue';
	import ItemDetail from './ItemDetail.vue';
	import { VueDraggableNext } from 'vue-draggable-next';
	import Modal from './Modal.vue';
	import { useInventoryrStore } from '@/stores/inventory';
	import { storeToRefs } from 'pinia';
	import { ref, watch } from 'vue';
	import { type Item } from '@/types/inventory';

	const { deleteItem } = useInventoryrStore();
	const { mylist, selectedItem } = storeToRefs(useInventoryrStore());
	const target = ref(null);

	const showItemDetails = (item: {item: Item}) => {
		selectedItem.value = item.item;
	};
	const closeItemDetails = () => {
		selectedItem.value = null;
	};

	onClickOutside(target, () => {
		selectedItem.value = null;
	});
	watch(mylist, () => {
		selectedItem.value = null;
	});
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
		min-height: 120px;
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

	.item.handle {
		cursor: move;
	}
</style>
