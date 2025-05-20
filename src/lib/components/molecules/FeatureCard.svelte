<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import type { TagType } from '$lib/utils/types';
	import Image from '../atoms/Image.svelte';

	export let name: string;
	export let description: string;
	export let image: string;
	export let tags: TagType[] | undefined;
</script>

<Card additionalClass="feature-card">
	<div class="image" slot="image" style="margin: auto 0;">
		<Image src={image} alt="Picture describing the {name} feature" />
	</div>
	<div class="content" slot="content">
		<div class="title">
			<span>{name}</span>
		</div>
		<p>{@html description}</p>
	</div>
</Card>

<style lang="scss">
	@import '$lib/scss/themes.scss';

	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
	}

	.image {
		object-fit: contain;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		font-size: 1.2rem;
		font-family: var(--font--title);
		font-weight: 700;
	}

	.tags {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
	}

	.footer {
		margin-top: 20px;
	}
</style>
