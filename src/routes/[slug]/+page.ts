import { error } from '@sveltejs/kit'

export async function load({ params }) {
  try {
    const post = await import(`../../routes/posts/${params.slug}.md`)  

    return {
      content: post.default,
      meta: post.metadata
    }
  } catch (e) {
    error(404, `No se encuentra ${params.slug}`);
  }
    
}
