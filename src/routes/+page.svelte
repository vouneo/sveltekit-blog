<script lang="ts">
	import * as config from '$lib/config'
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>
<section class="container">
	<article>
		<h2>Octavio García</h2>
		<br />
		<h3>Desarrollador Web Freelance</h3>
		<br />
		<p>
			Me especializo en convertir ideas en soluciones digitales que aporten verdadero valor. Mi
			trabajo abarca desde la creación de aplicaciones web hasta el mantenimiento de código ya
			existente, siempre buscando mejorar la experiencia de los usuarios y ofrecer herramientas
			eficientes para mis clientes.
		</p>
		<br />
		<p>
			Ofrezco servicios de desarrollo web completos, desde la conceptualización hasta el
			lanzamiento, abarcando tanto el frontend como el backend. Además, puedo ayudarte con el
			mantenimiento de sistemas y la formación de equipos en diversas áreas del desarrollo de
			software.
		</p>
		<br />
		<p>
			Una de mis especialidades son las Aplicaciones Web Progresivas (PWAs), que imitan el
			funcionamiento de aplicaciones móviles tradicionales, pero con menos complicaciones y mayor
			accesibilidad. Son rápidas, eficientes y pueden instalarse directamente desde el navegador.
		</p>
		<br />
		<p>
			Con sede en Rancagua, Chile, estoy siempre abierto a nuevas colaboraciones y conexiones. Si
			tienes un proyecto en mente o necesitas apoyo en desarrollo web, ¡no dudes en contactarme!
		</p>
		<br />
	</article>
</section>

<style>
	.container {
		display: grid;
		place-content: center;
	}
</style>
