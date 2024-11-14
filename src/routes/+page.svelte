<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section id="recent-posts">
	<ul>
		{#each data.posts as post}
			<li class="post-card">
				<h3 class="post-title">
					<a href={post.slug}>{post.title}</a>
				</h3>
				<div class="post-meta">
					<span class="post-date">{formatDate(post.date)}</span>
				</div>
				<div class="post-content">
					<p class="post-description">{post.description}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>

<style>
	/* Estilos para la sección de posts recientes */
	#recent-posts {
		margin: 0 auto;
		max-width: 800px;
		padding: var(--size-5) var(--size-4);
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	.post-card {
		padding: var(--size-4);
		border-bottom: 1px solid var(--border);
		margin-bottom: var(--size-4);
	}

	.post-title a {
		font-size: var(--font-size-fluid-1);
		color: var(--brand);
		text-decoration: none;
		transition: color 0.2s ease-in-out;
	}

	.post-title a:hover {
		color: var(--brand-dark); /* Color más oscuro en hover */
	}

	.post-meta {
		margin-top: var(--size-1);
		color: var(--text-2);
		font-size: var(--font-size-0);
	}

	.post-content {
		margin-top: var(--size-2);
	}

	.post-description {
		color: var(--text-1);
		font-size: var(--font-size-1);
		line-height: 1.6;
		margin: 0;
	}

	/* Responsivo para pantallas pequeñas */
	@media (max-width: 768px) {
		.post-card {
			padding: var(--size-3);
		}

		.post-title a {
			font-size: var(--font-size-fluid-1);
		}

		h2 {
			font-size: var(--font-size-fluid-2);
		}
	}
</style>
