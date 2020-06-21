<script>
  import { getContext } from "svelte";

  import likesCount from "../stores/likes";

  import Modal from "../containers/Modal.svelte";
  import Profile from "./Profile.svelte";
  import Comments from "./Comments.svelte";

  export let post = "";
  export let src = "";
  export let active = "";

  let isLiked = false;
  let isMarked = false;
  let showModal = false;

  const handleLike = () => {
    isLiked = !isLiked;
    if (!isLiked) likesCount.update(n => n - 1);
    else likesCount.update(n => n + 1);
  };

  const handleMark = () => (isMarked = !isMarked);
  const handleModal = () => (showModal = !showModal);
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
    transition: color 0.1s ease;
  }

  :global(.Post__Icon.isLiked) {
    color: #fd5454;
  }

  :global(.Post__Icon.isMarked) {
    color: #fdbb54;
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

  .Post__Footer {
    padding: 0.5em 1em;
  }
</style>

<Modal bind:show={showModal} />
<article class="Post">
  <div class="Post__Header">
    <Profile {src} size="32px" {active}>
      <slot />
    </Profile>
    <i class="fas fa-ellipsis-h Post__Icon" />
  </div>
  <div class="Post__Body">
    <img
      src={post}
      alt="Imagen de pug"
      class="Post__Image"
      on:dblclick={handleLike} />
    <div class="Post__Actions">
      <span>
        <i
          class="fas fa-heart Post__Icon"
          class:isLiked
          on:click={handleLike} />
        <i class="fas fa-paper-plane Post__Icon" on:click={handleModal} />
      </span>
      <span>
        <i
          class="fas fa-bookmark Post__Icon"
          class:isMarked
          on:click={handleMark} />
      </span>
    </div>
  </div>
  <div class="Post__Footer">
    <Comments />
  </div>
</article>
