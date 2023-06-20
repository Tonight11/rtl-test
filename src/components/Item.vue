<template>
	<div class="item" @click="handleItemClick">
		<div
			v-if="item.item"
			class="item__square"
			:style="'background: ' + item.item.color"
		>
			<div
				v-if="item.item"
				class="item__square-before"
				:style="{ backgroundColor: item.item.color, opacity: 0.5 }"
			></div>
		</div>
		<div v-if="item.item" class="item__quantity">{{ item.item.quantity }}</div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		item: {
			type: Object,
			required: true,
		},
	});

	const emit = defineEmits(['show-details']);

	const handleItemClick = () => {
		if (props.item.item === null) {
			return;
		}
		emit('show-details', props.item);
	};
</script>

<style lang="scss" scoped>
	.item {
		position: relative;
		&__square {
			backdrop-filter: blur(6px);
			width: 48px;
			height: 48px;
			position: relative;
			z-index: 2;

			&-before {
				display: block;
				width: 48px;
				height: 48px;
				position: absolute;
				top: 10px;
				left: 10px;
			}
		}

		&__quantity {
			position: absolute;
			bottom: 0;
			right: 0;
			background: #262626;

			/* Primary Border */
			border: 1px solid #4d4d4d;
			border-radius: 6px 0px 0px 0px;
			padding: 2px 4px;
		}
	}
</style>
