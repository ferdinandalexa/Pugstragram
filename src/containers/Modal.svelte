<script>
  export let show = true;

  const handleClose = () => {
    show = !show;
  };
</script>

<style>
  .Modal {
    display: grid;
    place-items: center;
    position: fixed;
    height: 100vh;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 2;
  }

  .Modal.hidden {
    display: none;
  }

  .Modal__Backdrop {
    background-color: rgba(33, 33, 33, 0.7);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .Modal__Container {
    align-self: center;
    background-color: #fff;
    border-radius: 10px;
    max-width: 400px;
    padding: 0.5em 1em 2em;
    position: relative;
    width: 90%;
    z-index: 2;
  }

  .Modal__Header {
    display: flex;
    justify-content: space-between;
    color: gray;
  }

  .Modal__Icon {
    align-self: center;
    color: gray;
    cursor: pointer;
    margin-right: 5px;
    transition: color 0.2s ease;
  }

  .Modal__Icon:hover {
    color: #fd5454;
  }

  .Modal__Body {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .Modal__RRSS {
    align-items: center;
    display: flex;
    margin: 10px;
  }

  .fa-facebook-square.Modal__Icon,
  .fa-whatsapp-square.Modal__Icon {
    font-size: 22px;
    margin: 2px 10px;
  }

  .fa-facebook-square.Modal__Icon {
    color: #3b5998;
  }

  .fa-whatsapp-square.Modal__Icon {
    color: #1bd741;
  }
</style>

<div class="Modal" class:hidden={!show}>
  <div class="Modal__Container">
    <div class="Modal__Header">
      <h3>Compartir</h3>
      <i class="fas fa-times Modal__Icon" on:click={handleClose} />
    </div>
    <div class="Modal__Body">
      <a
        href="https://www.facebook.com/sharer/sharer.php?&u=https://pugstagram.co/"
        target="_blank"
        class="Modal__RRSS">
        <i class="fab fa-facebook-square Modal__Icon" />
        <span>Compartir en Facebook</span>
      </a>
      <a
        href="https://api.whatsapp.com/send?&text=mira%20este%20hermoso%20pug%20https://pugstagram.co/"
        target="_blank"
        class="Modal__RRSS">
        <i class="fab fa-whatsapp-square Modal__Icon" />
        <span>Compartir en Whatsapp</span>
      </a>
    </div>
  </div>
  <div class="Modal__Backdrop" on:click={handleClose} />
</div>
