<script setup lang="ts"></script>

<template>
	<div class="profile">
		<div class="profile__info" v-if="false">
			<img src="@/assets/img/pfp.png" alt="" class="profile__avatar" />
			<div class="profile__title">Bayastan</div>
			<div class="profile__text">dont know</div>
		</div>
		<div class="profile__skelet skelet-profile" v-if="true">
			<img src="@/assets/img/pfp.png" alt="" class="profile__avatar" />
			<div class="skelet-profile__title"></div>
			<div class="skelet-profile__info">
				<div class="skelet-profile__text"></div>
				<div class="skelet-profile__text"></div>
				<div class="skelet-profile__text"></div>
				<div class="skelet-profile__text"></div>
				<div class="skelet-profile__text"></div>
			</div>
		</div>
		<button class="btn btn-white profile__btn" @click="$emit('openAdd')">
			Добавить
		</button>
	</div>
</template>

<style lang="scss" scoped>
	.profile {
		padding: 15px;
		background: #262626;
		border: 1px solid #4d4d4d;
		border-radius: 12px;

		&__btn {
			margin-top: 20px;
		}
		&__info {
		}

		&__avatar {
			margin-bottom: 20px;
		}

		&__title {
		}

		&__text {
		}

		&__skelet {
		}
	}
	.skelet-profile {
		&__img {
		}

		&__info {
			display: flex;
			flex-direction: column;
			gap: 16px;
		}

		&__title {
			background: linear-gradient(
				90deg,
				#3c3c3c 0%,
				#444444 51.04%,
				#333333 100%
			);
			border-radius: 8px;
			width: 190px;
			height: 26px;
			margin: 0 auto;
			margin-bottom: 25px;
		}

		&__text {
			background: linear-gradient(
				90deg,
				#3c3c3c 0%,
				#444444 51.04%,
				#333333 100%
			);
			border-radius: 4px;
			width: 155px;
			height: 10px;
			margin: 0 auto;
		}
	}
</style>
