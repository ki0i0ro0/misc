<svelte:options tag="my-articles" />

<script>
  import { onMount } from 'svelte';

  let articles = [];

  onMount(async () => {
    const res = await fetch('https://qiita.com/api/v2/items?page=1&per_page=20');
    articles = await res.json();
  });
</script>

{#each articles as article}
  <p>
    <a href={article.url}>{article.title}</a>
  </p>
{:else}
  <p>loading...</p>
{/each}

<style>
  a {
    color: red;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
