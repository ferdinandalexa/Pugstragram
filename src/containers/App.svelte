<script>
    import Header from './Header.svelte';
    import Main from './Main.svelte';
</script>

<style>
    :global(body) {
        margin: 0;
        font-family: sans-serif;
    } 
</style>

<div class="App">
    <Header />
    <Main />
    <!-- <h1 class="App__Title">¡Hello, world!</h1> -->
</div>