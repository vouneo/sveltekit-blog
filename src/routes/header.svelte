<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './toggle.svelte'
	import '../app.css'
	
</script>

<nav>
  <!-- Title -->
  <a href="/" class="title glitch" data-text="sOmber">
		{config.title}
	</a>

  <!-- Navigation -->
	<ul class="links">
		<li>
			<a href="/rss.xml" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rss"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg></a>
		</li>
		<li>
			<a href="https://github.com/vouneo" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
		</li>
		<li>
			<a href="https://www.twitter.com/vouneo" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
			</a>
		</li>

		<li>
			<a href="/blog">Blog</a>
		</li>
		<li>
			<a href="/contact">Resume</a>
		</li>
	</ul>

  <Toggle />
  
</nav>

<style>
	nav {
		padding-block: var(--size-7);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.links {
		margin-block: var(--size-7);
		display: flex;
		gap: var(--size-7);
		margin-inline-start: auto; 
		padding: left;
	}
	.links li {
		list-style-type: none;
		display: flex; /* Aplica flexbox al elemento li */
		justify-content: center; /* Centra horizontalmente el contenido */
		align-items: center; /* Centra verticalmente el contenido */
	}

	li:hover {
		color:rgb(143, 51, 108)
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	 .title {
		font-family: var(--font-title);
		
		font-size: 40px;
	} 

	.glitch {
		background-clip: text;
		color: rgb(143, 51, 108);
		font-size: 60px;
		position: relative;
		
		}
	.glitch::after {
		content: attr(data-text);
		position: absolute;
		left: 10px;
		
		top: 0;
		
		
		overflow: hidden;
		clip: rect(0, 900px, 0, 0);
		animation: animate-glitch 15s  linear alternate-reverse;
		}

	.glitch::before {
		content: attr(data-text);
		position: absolute;
		left: -10px;
		
		top: 0;
		
		overflow: hidden;
		clip: rect(0, 900px, 0, 0);
		animation: animate-glitch 15s  linear alternate-reverse;
		}

		@keyframes animate-glitch {
		0% {
			clip: rect(99px, 9999px, 45px, 0);
		}
		5% {
			clip: rect(7px, 9999px, 49px, 0);
		}
		10% {
			clip: rect(52px, 9999px, 79px, 0);
		}
		15% {
			clip: rect(51px, 9999px, 42px, 0);
		}
		20% {
			clip: rect(37px, 9999px, 43px, 0);
		}
		25% {
			clip: rect(38px, 9999px, 9px, 0);
		}
		30% {
			clip: rect(34px, 9999px, 93px, 0);
		}
		35% {
			clip: rect(18px, 9999px, 84px, 0);
		}
		40% {
			clip: rect(100px, 9999px, 75px, 0);
		}
		45% {
			clip: rect(15px, 9999px, 4px, 0);
		}
		50% {
			clip: rect(14px, 9999px, 10px, 0);
		}
		55% {
			clip: rect(4px, 9999px, 75px, 0);
		}
		60% {
			clip: rect(17px, 9999px, 55px, 0);
		}
		65% {
			clip: rect(75px, 9999px, 57px, 0);
		}
		70% {
			clip: rect(39px, 9999px, 84px, 0);
		}
		75% {
			clip: rect(96px, 9999px, 54px, 0);
		}
		80% {
			clip: rect(45px, 9999px, 25px, 0);
		}
		85% {
			clip: rect(60px, 9999px, 100px, 0);
		}
		90% {
			clip: rect(5px, 9999px, 6px, 0);
		}
		95% {
			clip: rect(49px, 9999px, 57px, 0);
		}
		100% {
			clip: rect(54px, 9999px, 90px, 0);
		}
		}
	
	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}

</style>
