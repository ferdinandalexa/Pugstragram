<script>
  import { onMount } from "svelte";

  import autosize from "autosize";

  import Profile from "./Profile.svelte";
  import Comments from "./Comments.svelte";

  export let post = "";
  export let src = "";
  export let active = "";

  let textarea;
  onMount(() => {
    autosize(textarea);
  });
</script>

<style>
  .Post {
    box-shadow: 0 5px 10px -5px rgba(33, 33, 33, 0.1);
    margin: 1.5em 0;
    width: 100%;
  }

  .Post:first-child {
    margin-top: 0;
  }

  .Post:last-child {
    margin-bottom: 0;
  }

  .Post__Icon {
    color: gray;
    cursor: pointer;
    padding-right: 0.25em;
    padding-left: 0.25em;
  }

  .Post__Header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0.5em 1em;
  }

  .Post__Image {
    width: 100%;
    max-height: 600px;
    object-fit: cover;
  }

  .Post__Actions {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0.5em 1em;
  }

  .Post__Footer{
    padding: 0.5em 1em;
  }

  .Add-Comment {
    border: 1px solid #efefef;
    border-radius: 5px;
    display: block;
    font-family: inherit;
    height: 1em;
    margin: auto;
    padding: 7px 10px;
    width: 90%;
    resize: none;
  }

  .Add-Comment::placeholder {
    color: gray;
  }
</style>

<article class="Post">
  <div class="Post__Header">
    <Profile {src} size="32px" {active}>
      <slot />
    </Profile>
    <i class="fas fa-ellipsis-h Post__Icon" />
  </div>
  <div class="Post__Body">
    <img src={post} alt="Imagen de pug" class="Post__Image" />
    <div class="Post__Actions">
      <span>
        <i class="fas fa-heart Post__Icon" />
        <i class="fas fa-paper-plane Post__Icon" />
      </span>
      <span>
        <i class="fas fa-bookmark Post__Icon" />
      </span>
    </div>
  </div>
  <div class="Post__Footer">
    <Comments />
    <form on:submit|preventDefault>
      <textarea
        bind:this={textarea}
        class="Add-Comment"
        rows="0"
        placeholder="Escribe un lindo comentario" />
    </form>
  </div>
</article>
