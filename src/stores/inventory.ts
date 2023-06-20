import { ref, computed, type Ref, watchEffect } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

interface Item {
	id: symbol;
	name: string;
	desc: string;
	quantity: number;
	color: string;
}

export const useInventoryrStore = defineStore('inventory', () => {
	const mylist = useLocalStorage('inventory', createEmptySlots(5, 5));
	function createEmptySlots(rowCount: number, columnCount: number) {
		const slots = [];
		for (let row = 1; row <= rowCount; row++) {
			for (let column = 1; column <= columnCount; column++) {
				slots.push({
					item: null as Item | null,
				});
			}
		}
		return slots;
	}

	const getFreeSlot = computed(() =>
		mylist.value.find(item => item.item === null)
	);

	const deleteItem = (quantity: number) => {
		if (selectedItem.value) {
			selectedItem.value.quantity -= quantity;

			if (selectedItem.value.quantity === 0) {
				const slotIndex = mylist.value.findIndex(
					item => item.item?.id === selectedItem.value.id
				);

				if (slotIndex !== -1) {
					const updatedSlot = { ...mylist.value[slotIndex], item: null };
					mylist.value.splice(slotIndex, 1, updatedSlot);
				}
			}
		}
		selectedItem.value = null;
	};

	const addItem = (item: Item) => {
		const freeSlot = getFreeSlot.value;
		if (freeSlot) {
			freeSlot.item = {
				id: item.id,
				name: item.name,
				desc: item.desc,
				quantity: item.quantity,
				color: item.color,
			};
		} else {
			throw new Error('Освободите инвентарь');
		}
	};

	const enabled = ref(true);

	const selectedItem = ref(null) as Ref<null> | Ref<Item>;

	return {
		mylist,
		enabled,
		deleteItem,
		selectedItem,
		addItem,
	};
});
