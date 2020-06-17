<script>
  import { getContext } from "svelte";

  import Profile from "../components/Profile.svelte";
  import Stories from "../components/Stories.svelte";

  let logged = getContext("logged");
  const { username, name, picture } = $logged;
</script>

<style>
  h2 {
    font-size: 1.3rem;
  }

  .Sidebar {
    height: max-content;
    position: sticky;
    top: 0;
  }
  
  .Sidebar__Content {
    margin-top: .5em;
    margin-bottom: .5em;
  }
</style>

<div class="Sidebar">
  <div class="Sidebar__Container">
    <div class="Sidebar__Header">
      <Profile src={picture.medium}>
        <h2>{username}</h2>
        <span>{`${name.first} ${name.last}`}</span>
      </Profile>
    </div>
    <div class="Sidebar__Content">
      <Stories />
    </div>
  </div>
</div>
