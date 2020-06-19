<script>
  export let size = "42px";
  export let src = "https://i.imgur.com/JKyS3L3.png";
  export let active = false;
</script>

<style>
  .Profile {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    width: max-content;
  }

  :global(.active) .Profile__Picture {
    width: var(--size);
    height: var(--size);
    border: double 2px transparent;
    border-radius: 100%;
    background-image: linear-gradient(#fff, #fff),
      radial-gradient(circle at top left, #f09433, #bc1888);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .Profile__Picture {
    border-radius: 50%;
    height: var(--size);
    margin-right: 10px;
  }

  .Profile__Info > :global(*) {
    margin: 0;
  }
</style>

<div class="Profile" style="--size: {size}">
  <div class:active>
    <img {src} alt="Foto de perfil" class="Profile__Picture" />
  </div>
  <div class="Profile__Info">
    <slot>
    </slot>
  </div>
</div>
