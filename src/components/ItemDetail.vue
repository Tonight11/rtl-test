<template>
	<div class="item-details">
		<div class="item-details-content">
			<div class="item-details__square" :style="'background: ' + item.color">
				<div
					class="item-details__square-before"
					:style="{ backgroundColor: item.color, opacity: 0.5 }"
				></div>
			</div>

			<h2 class="item-details__name">{{ item.name }}</h2>
			<p class="item-details__desc">{{ item.desc }}</p>
			<div class="delete-section">
				<button class="btn btn-red" @click="confirmDelete">Удалить</button>
			</div>
		</div>
		<Confirm
			v-if="showConfirmationDialog"
			@cancel-delete="cancelDelete"
			@delete-item="deleteItem"
		>
			<small v-if="err" style="color: red"
				>Нельзя удалить больше чем кол-во</small
			>
			<input
				class="confirm__quant"
				placeholder="Введите количество"
				type="number"
				v-model.number="deleteQuantity"
				min="1"
				:max="item.quantity"
			/>
		</Confirm>
	</div>
</template>

<script setup lang="ts">
	import Confirm from './Confirm.vue';
	import { ref } from 'vue';

	const props = defineProps({
		item: {
			type: Object,
			required: true,
		},
	});
	const emit = defineEmits(['delete']);

	const showConfirmationDialog = ref(false);
	const deleteQuantity = ref(1);
	const err = ref(false);

	const confirmDelete = () => {
		showConfirmationDialog.value = true;
	};

	const cancelDelete = () => {
		showConfirmationDialog.value = false;
		deleteQuantity.value = 1;
	};

	const deleteItem = () => {
		if (deleteQuantity.value > props.item.quantity) {
			err.value = true;
			return;
		}
		const confirmedQuantity = deleteQuantity.value;
		showConfirmationDialog.value = false;
		deleteQuantity.value = 1;
		// Вызовите метод удаления предмета из инвентаря, передавая confirmedQuantity
		emit('delete', confirmedQuantity);
	};
</script>

<style lang="scss" scoped>
	.item-details {
		background: rgba(38, 38, 38, 0.5);

		backdrop-filter: blur(8px);

		&__square {
			margin: 0 auto;
			backdrop-filter: blur(6px);
			width: 115.56px;
			height: 115.56px;
			position: relative;
			margin-bottom: 30px;

			&-before {
				display: block;
				width: 115.56px;
				height: 115.56px;
				position: absolute;
				top: 10px;
				left: 10px;
			}
		}

		&__name {
			margin-bottom: 25px;
		}
	}

	.item-details {
		height: 100%;
		padding: 55px 20px 20px;
	}
	.item-details-content {
		height: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.delete-section {
		margin-top: auto;
	}

	.confirm__quant {
		width: 100%;
		margin-bottom: 20px;
	}
</style>
