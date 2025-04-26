<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer class="border-t border-gray-800 py-4 px-4 sm:px-6">
	<div class="flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm gap-2">
		<p class="relative inline-block text-center sm:text-left">
			crafted by
			<span class="magic">
				<span class="magic-text">
					{config.footer}
				</span>
			</span>
			&copy; {new Date().getFullYear()}
		</p>

		<div class="flex space-x-2 items-center">
			<a href="https://www.instagram.com/vouneo" target="_blank" aria-label="Instagram" class="icon-link">
				<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
					<path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z" />
					<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
				</svg>
			</a>
			<a href="https://twitter.com/vouneo" target="_blank" aria-label="Twitter" class="icon-link">
				<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
				</svg>
			</a>
			<a href="https://github.com/vouneo" target="_blank" aria-label="GitHub" class="icon-link">
				<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
				</svg>
			</a>
		</div>
	</div>
</footer>

<style>
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

	@keyframes background-pan {
		from {
			background-position: 0% center;
		}
		to {
			background-position: -200% center;
		}
	}

	.icon-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		padding: 4px;
	}

	.icon {
		width: 18px;
		height: 18px;
	}

	/* Estilos responsivos adicionales */
	@media (max-width: 640px) {
		footer {
			padding: 12px 8px;
		}
		.icon-link {
			width: 28px;
			height: 28px;
		}
		.icon {
			width: 16px;
			height: 16px;
		}
	}
</style>