<script lang="ts">
	import * as config from '$lib/config'
	import '../app.css'
</script>

<!-- Footer -->
<footer>
	<p class="parraf">
		crafted by

		<span class="magic">
			<span class="magic-text">{config.footer}</span>
		</span>
		&copy; {new Date().getFullYear()}
	</p>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
		/* Añadimos flexbox para centrar */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@keyframes background-pan {
		from {
			background-position: 0% center;
		}

		to {
			background-position: -200% center;
		}
	}

	p {
		color: var(--text-2);
	}

	p > .magic {
		display: inline-block;
		position: relative;
	}

	.magic > .magic-text {
		animation: background-pan 3s linear infinite;
		background-clip: text;
		background: linear-gradient(
			to right,
			var(--purple-11),
			var(--violet-11),
			var(--pink-5),
			var(--purple-11)
		);
		background-size: 200%;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		white-space: nowrap;
	}
</style>
