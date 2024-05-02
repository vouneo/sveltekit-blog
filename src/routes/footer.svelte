<script lang="ts">
	import * as config from '$lib/config'
	import '../app.css'

</script>

<!-- Footer -->
<footer>
	<p>crafted by 
				
		<span class="magic">
			<span class="magic-text">{config.footer}</span>
		</span> &copy {new Date().getFullYear()}</p>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
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

	p > .magic > .magic-star {
		--size: clamp(20px, 1.5vw, 30px);
  
		animation: scale 700ms ease forwards;
		display: block;
		height: var(--size);
		left: var(--star-left);
		position: absolute;
		top: var(--star-top);
		width: var(--size);
	}

	p > .magic > .magic-star > svg {
		animation: rotate 1000ms linear infinite;
		display: block;
		opacity: 0.7;
	}

	p > .magic > .magic-star > svg > path {
  		fill: var(--choco-6);
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
