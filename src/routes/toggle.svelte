<script lang="ts">
	import { fly } from 'svelte/transition'
	import { Moon, Sun } from 'lucide-svelte'
	import { theme, toggleTheme } from '$lib/theme'
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }}>
			<Sun />
			<!-- <span>Light</span> -->
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<Moon />
			<!-- <span>Dark</span> -->
		</div>
	{/if}
</button>

<style>
	button {
		padding-left: 1rem;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;

	}

	button > * {
		display: grid;
		gap: var(--size-2);
		grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
	}
</style>
