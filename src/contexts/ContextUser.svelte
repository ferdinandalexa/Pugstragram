<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  export let user = {};
  export let friends = [];

  let profile = writable({
    login: { username: "" },
    name: { first: "Unknown", last: "Unknown" },
    location: { city: "Unknown", state: "" },
    picture: { medium: "" }
  });

  let list = writable([]);

  $profile = user;
  $list = friends;

  setContext("logged", profile);
  setContext("friends", list);
</script>

<slot />
