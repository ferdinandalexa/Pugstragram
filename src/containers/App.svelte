<script>
  import { onMount } from "svelte";

  import getUsers from "../services/getUsers";

  import Header from "./Header.svelte";
  import Main from "./Main.svelte";
  import ContextUser from "../contexts/ContextUser.svelte";

  let promises = Promise.all([getUsers(), getUsers(5)]);
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: sans-serif;
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
