<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './toggle.svelte'
	import '../app.css'
</script>

<nav>
	<!-- Title -->
	<a href="/" class="title glitch" data-text="vOuneo">
		{config.title}
	</a>

	<!-- Navigation -->
	<ul>

		<Toggle />
	</ul>

</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-block: var(--size-2);
	}

	.title {
		font-family: var(--font-title);
		font-size: 40px;
		margin-bottom: var(--size-2);
		text-align: center;
	}

	.links {
		display: flex;
		gap: var(--size-5);
		padding: 0;
		list-style: none;
	}

	.links li {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.glitch {
		color: rgb(143, 51, 108);
		font-size: 60px;
		position: relative;
		-webkit-text-stroke: 1px white; /* Borde rojo semi-transparente */
		/*text-stroke: 1px white;  Borde rojo semi-transparente */
		color: transparent; /* Hace que el texto sea transparente */
		-webkit-text-fill-color: rgb(143, 51, 108); /* Relleno blanco para el texto */
		/* text-fill-color: rgb(143, 51, 108);  */
	}
	.glitch::after {
		content: attr(data-text);
		position: absolute;
		left: 10px;
		top: 0;

		overflow: hidden;
		clip: rect(0, 900px, 0, 0);
		animation: animate-glitch /*infinite*/ 7s linear alternate-reverse;
	}

	.glitch::before {
		content: attr(data-text);
		position: absolute;
		left: -10px;

		top: 0;

		overflow: hidden;
		clip: rect(0, 900px, 0, 0);
		animation: animate-glitch 7s /*infinite*/ linear alternate-reverse;
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
