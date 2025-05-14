<script>
	import FeaturesIcon from '$lib/icons/features.svelte';
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Sparkles from '../atoms/Sparkles.svelte';
</script>

<section id="hero">
	<h1 class="hello">The Danube river</h1>
	<p class="intro">
		<span class="right" style="text-align: center;"
			>Запазване и възстановяване на местообитания и растителни и животински видове.</span
		>
	</p>
	<div class="ctas">
		<Sparkles />
	</div>
</section>
<div class="content">
	<h2>Danube</h2>
	<h2>Danube</h2>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');

	.content {
		position: relative;
		margin: 75px auto;
		width: 500px;
		height: 200px;
		display: flex;
		justify-content: center;
	}

	.content h2 {
		color: #fff;
		font-size: 8em;
		position: absolute;
	}

	.content h2:nth-child(1) {
		color: transparent;
		-webkit-text-stroke: 2px #3877ec;
		color: #ffffff;
	}

	.content h2:nth-child(2) {
		color: #62acf1;
		animation: animate 4s ease-in-out infinite;
	}

	@keyframes animate {
		0%,
		100% {
			clip-path: polygon(
				0% 45%,
				16% 44%,
				33% 50%,
				54% 60%,
				70% 61%,
				84% 59%,
				100% 52%,
				100% 100%,
				0% 100%
			);
		}

		50% {
			clip-path: polygon(
				0% 60%,
				15% 65%,
				34% 66%,
				51% 62%,
				67% 50%,
				84% 45%,
				100% 46%,
				100% 100%,
				0% 100%
			);
		}
	}

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: relative;
		padding: 80px 0;

		@include for-phone-only {
			padding: 40px 0 50px;
		}

		.hello {
			text-align: center;
		}

		.intro {
			font-weight: 500;
			font-size: 1.4rem;
			width: min(100%, 440px);
			display: flex;
			flex-direction: column;

			.left {
				text-align: left;
			}
			.right {
				text-align: right;
			}

			@include for-phone-only {
				display: none;
			}
		}

		.ctas {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 10px;
			width: 100%;
		}
	}
</style>
