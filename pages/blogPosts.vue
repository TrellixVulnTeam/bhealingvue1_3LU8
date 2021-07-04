<template>
  <div>
    <img
      class="hero-bg-img"
      src="assets/img/backgrounds/pier-to-the-beautiful-ocean-sunset-45177-2560x1600.jpg"
    />
    <h2>{{ post.title }}</h2>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post
    };
  }
};
</script>
