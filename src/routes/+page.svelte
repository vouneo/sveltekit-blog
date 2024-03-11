<script lang="ts">
  import { formatDate } from '$lib/utils'
  import * as config from '$lib/config'
  
  export let data
</script> 

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<section class="container">
  <!-- <ul class="posts">
  {#each data.posts as post}
    <li class="post">
      <a href={post.slug} class="title">{post.title}</a>
      <p class="date">{formatDate(post.date)}</p>
      <p class="description">{post.description}</p>
    </li>    
  {/each}
  </ul> -->

  <h2>Projects</h2>
  <ul class="projects">
    </ul>

  <h2>Experience</h2>
  <ul class="experience">
    </ul>
</section>

<style>
  .posts {
    display: grid;
    gap: var(--size-7);
  }

  .post {
    max-inline-size: var(--size-content-3);
  }

  .post:not(:last-child) {
    border-bottom: 1px solid var(--border);
    padding-bottom: var(--size-7);
  }

  .title {
    font-size: var(--font-size-fluid-2);
    text-transform: capitalize;
    text-decoration: none;
    
  }

  .title:visited {
    color: #ba2960;
  }
  

  .date {
    color: var(--text-2)
  }

  .description {
    margin-top: var(--size-3);
  }

</style>