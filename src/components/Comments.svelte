<script>
  import { onMount, getContext } from "svelte";

  import autosize from "autosize";

  import Profile from "./Profile.svelte";
  import Comment from "./Comment.svelte";

  const logged = getContext("logged");
  let textarea;
  let isSubmited = false;
  let comments = [];

  function addComment(text) {
    if (text != "") {
      const newComment = {
        username: $logged.username,
        comment: text
      };
      comments = [...comments, newComment];
    }
  }

  function handleEnter(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      isSubmited = true;
    }
  }

  $: if (isSubmited) {
    addComment(textarea.value);
    textarea.value = "";
    autosize.update(textarea);
    isSubmited = false;
  }

  onMount(() => {
    autosize(textarea);
  });
</script>

<style>
  .Comments {
    padding: 0.5em;
  }

  .Comments__Msg-Default {
    display: inline-block;
    color: gray;
    text-align: center;
    font-size: 0.9em;
    margin-bottom: 1rem;
  }

  .Add-Comment {
    border: 1px solid #efefef;
    border-radius: 5px;
    display: block;
    font-family: inherit;
    padding: 7px 10px;
    width: 90%;
    height: 1em;
    resize: none;
  }

  .Add-Comment::placeholder {
    color: gray;
  }

  .Comments__Add-Comment {
    align-items: flex-start;
    display: flex;
    justify-content: start;
    padding-top: 0.25em
  }

  .Comments__Form {
    width: 100%;
  }
</style>

<div class="Comments">
  {#each comments as { username, comment }}
    <Comment>
      <span class="Comment__User">{username}</span>
      <span class="Comment__Text">{comment}</span>
    </Comment>
  {:else}
    <span class="Comments__Msg-Default">No hay comentarios, aún</span>
  {/each}
</div>
<div class="Comments__Add-Comment">
  <Profile src={$logged.picture.medium} size="32px" />
  <form class="Comments__Form" on:submit|preventDefault>
    <textarea
      on:keypress={handleEnter}
      bind:this={textarea}
      class="Add-Comment"
      rows="0"
      placeholder="Escribe un lindo comentario" />
  </form>
</div>
