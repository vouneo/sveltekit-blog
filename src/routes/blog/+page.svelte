<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--size-4);
		padding: 0;
		list-style-type: none;
	}
	.post {
		border: 1px solid var(--border);
		border-radius: var(--radius-2);
		padding: var(--size-4);
		display: flex;
		flex-direction: column;
		height: 100%;
		transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
	}
	.post:hover {
		transform: translateY(-5px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	}
	.title {
		font-size: clamp(1.2rem, 2vw, 1.5rem);
		text-transform: capitalize;
		text-decoration: none;
		margin-bottom: var(--size-2);
		color: var(--text-1);
	}
	.title:visited {
		color: #ba2960;
	}
	.date {
		color: var(--text-2);
		font-size: clamp(0.8rem, 1.5vw, 1rem);
		margin-bottom: var(--size-2);
	}
	.description {
		margin-top: auto;
		font-size: clamp(0.9rem, 1.8vw, 1.1rem);
	}

	@media (max-width: 640px) {
		.posts {
			grid-template-columns: 1fr;
		}
	}

	@media (min-width: 641px) and (max-width: 1024px) {
		.posts {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1025px) {
		.posts {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
