<script>
  import { onMount, getContext } from "svelte";

  import getPugsImages from "../services/getPugsImages";

  import Post from "../components/Post.svelte";

  let images = "";

  let friends = getContext("friends");
  let numberPosts = $friends.length;
  onMount(async () => {
    images = await getPugsImages(numberPosts);
  });
</script>

<div class="Timeline">
  {#each images as post, index}
    <Post {post} src={$friends[index].picture.medium} active={true}>
      <h4>{`${$friends[index].username}`}</h4>
      <small>
        {`${$friends[index].location.city} ${$friends[index].location.state}`}
      </small>
    </Post>
  {/each}
</div>