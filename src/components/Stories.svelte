<script>
  import { getContext } from "svelte";

  import Profile from "../components/Profile.svelte";

  let friends = getContext("friends");
</script>

<style>
  .Stories {
    box-shadow: 0 5px 10px -5px rgba(33, 33, 33, 0.1);
    padding: 1em;
  }

  .Stories__Header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    color: gray;
  }

  .Stories__Title {
    font-weight: 700;
  }

  .Stories__Toggle {
    cursor: pointer;
  }

  .Stories__Friends > :global(*) {
    margin-bottom: .5em;
  }
</style>

<div class="Stories">
  <div class="Stories__Header">
    <h4 class="Stories__Title">Stories</h4>
    <small class="Stories__Toggle">Ver todos</small>
  </div>
  <div class="Stories__Friends">
    {#each $friends as { username, name, picture }}
      <Profile src={picture.medium} size="32px" active={true}>
        <h3>{username}</h3>
        <small>{`${name.first} ${name.last}`}</small>
      </Profile>
    {/each}
  </div>
</div>
