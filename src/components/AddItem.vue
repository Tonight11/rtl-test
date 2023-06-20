<script setup lang="ts">
	import { useInventoryrStore } from '@/stores/inventory';
	const { addItem } = useInventoryrStore();
	import { ref } from 'vue';
	const newItem = ref({
		id: Math.random() * 10,
		name: '',
		desc: '',
		quantity: 1,
		color: '',
	});

	const addNewItem = () => {
		addItem(newItem.value);

		newItem.value.id = Math.random() * 10;
		newItem.value.name = '';
		newItem.value.desc = '';
		newItem.value.color = '';
		newItem.value.quantity = 0;
	};
</script>

<template>
	<form @submit.prevent="addNewItem" class="add__item">
		<input
			v-model="newItem.name"
			placeholder="name"
			type="text"
			class="add__item-input"
		/>
		<input
			v-model="newItem.desc"
			placeholder="desc"
			type="text"
			class="add__item-input"
		/>
		<input
			v-model.number="newItem.quantity"
			placeholder="quantity"
			type="number"
			class="add__item-input"
		/>
		<input
			v-model="newItem.color"
			placeholder="color"
			type="text"
			class="add__item-input"
		/>
		<button class="btn btn-white">+</button>
	</form>
</template>

<style lang="scss" scoped>
	.add__item {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 20px 40px 20px 20px;
		background: #262626;

		border-radius: 12px;
		&-input {
			width: 100%;
			background: linear-gradient(
				90deg,
				#3c3c3c 0%,
				#444444 51.04%,
				#333333 100%
			);
			border-radius: 12px;
		}
	}
</style>
