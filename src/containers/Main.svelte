<script>
  import Timeline from "./Timeline.svelte";
  import Sidebar from "./Sidebar.svelte";
</script>

<style>
  .Main {
    column-gap: 20px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin: 0 auto;
    max-width: 800px;
    padding-top: 2em;
    padding-bottom: 2em;
    position: relative;
  }
</style>

<main class="Main">
  <Timeline />
  <Sidebar />
</main>
