<script lang="ts">
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
      <p class="date">{post.date}</p>
      <p class="description">{post.description}</p>
    </li>    
  {/each}
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
    font-size: var(--font-size-fluid-3);
    text-transform: capitalize;
    text-decoration: underline;
    text-decoration-style: var(--teal-6);
    text-decoration-thickness: 0.175rem;
  }

  .date {
    color: var(--text-2)
  }

  .description {
    margin-top: var(--size-3);
  }

</style>