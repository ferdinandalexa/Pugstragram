<script>
  import likesCount from "../stores/likes";
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
  .Header {
    --height: 65px;
    height: var(--height);
    background: #fafafa;
  }

  .Header__Container {
    height: inherit;
    margin: 0 auto;
    max-width: 800px;
  }
  .Header__Content {
    align-items: center;
    display: flex;
    height: inherit;
    justify-content: space-between;
  }
  .Header__Logo {
    background: #fff;
    cursor: pointer;
    font-size: 28px;
    font-family: Pacifico, cursive;
    margin: 0;
    mix-blend-mode: multiply;
    position: relative;
  }

  .Header__Logo::before {
    background-image: linear-gradient(to right, #f09433, #bc1888);
    content: "";
    height: 100%;
    mix-blend-mode: screen;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .Header__Navigation > :global(i) {
    color: lightgray;
    padding: 0.5em;
    transition: color 0.2s ease;
  }

  .Header__Navigation > :global(i:hover) {
    color: gray;
  }
  
  .Header__likes-count{
    margin-left: .25em;
  }
</style>

<header class="Header">
  <header class="Header__Container">
    <header class="Header__Content">
      <h1 class="Header__Logo">Pugstagram</h1>
      <nav class="Header__Navigation">
        <i class="fas fa-heart">
          <span class="Header__likes-count">{$likesCount ? $likesCount : ''}</span>
        </i>
        <i class="fas fa-user" />
      </nav>
    </header>
  </header>
</header>
