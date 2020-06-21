<script>
  import { onMount } from "svelte";

  import getUsers from "../services/getUsers";

  import Header from "./Header.svelte";
  import Main from "./Main.svelte";
  import ContextUser from "../contexts/ContextUser.svelte";
  import Modal from "./Modal.svelte";

  let modal;
  let promises = Promise.all([getUsers(), getUsers(5)]);
</script>

<style>
  :global(html) {
    box-sizing: border-box;
  }
  
  :global(*, *::before, *::after) {
    box-sizing: inherit;
  }

  :global(body) {
    margin: 0;
    font-family: sans-serif;
  }
  
  :global(a) {
    color: initial;
    text-decoration: none;
  }
</style>

<div class="App">
  {#await promises}
    <h2>Loading...</h2>
  {:then [user, friends]}
    <ContextUser user={user[0]} {friends}>
      <Header />
      <Main />
    </ContextUser>
  {/await}
</div>
