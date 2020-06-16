<script>
  export let size = "42px";
  let src = "https://i.imgur.com/JKyS3L3.png";
</script>

<style>
  .Profile {
    align-items: center;
    display: flex;
    justify-content: flex-start;
  }

  .Profile__Picture {
    border-radius: 50%;
    height: var(--heigth);
    margin-right: 10px;
  }

  .Profile__Info > :global(*) {
    margin: 0;
  }
</style>

<div class="Profile" style="--heigth: {size}">
  <img {src} alt="Foto de perfil" class="Profile__Picture" />
  <div class="Profile__Info">
    <slot>
      <p>No hay info</p>
    </slot>
  </div>
</div>
