<script setup lang="ts">
	import { useInventoryrStore } from '@/stores/inventory';
	const { addItem } = useInventoryrStore();
	import { ref, type Ref } from 'vue';
	const emit = defineEmits(['closeAdd']);
	const newItem = ref({
		id: Symbol('123'),
		name: '',
		desc: '',
		quantity: 1,
		color: '',
	});
	const err = ref(false) as Ref<boolean> | Ref<string>;

	const addNewItem = () => {
		err.value = false;
		if (newItem.value.name === '') {
			err.value = 'Заполните все поля';
			return;
		}
		if (newItem.value.desc === '') {
			err.value = 'Заполните все поля';
			return;
		}
		if (newItem.value.quantity === 0) {
			err.value = 'Заполните все поля';
			return;
		}
		if (newItem.value.color === '') {
			err.value = 'Заполните все поля';
			return;
		}
		try {
			addItem(newItem.value);
		} catch (error) {
			err.value = error as string;
			return;
		}

		newItem.value.id = Symbol('123');
		newItem.value.name = '';
		newItem.value.desc = '';
		newItem.value.color = '';
		newItem.value.quantity = 0;

		emit('closeAdd');
	};
</script>

<template>
	<form @submit.prevent="addNewItem" class="add__item">
		<small v-if="err" style="color: red">{{ err }}</small>
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
