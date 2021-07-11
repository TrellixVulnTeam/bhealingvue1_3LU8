<template>
  <div id="blogPostPage">
    <section class="hero is-medium hero-theme-dark">
      <img class="hero-bg-img" :src="post.thumbnail" alt="" />
      <div class="hero-body">
        <h3 role="heading" aria-level="1" class="title animated fadeInUp">
          {{ post.title }}
        </h3>

        <div>
          <h6 class="subtitle">
            {{ post.summary }}
          </h6>
        </div>
        <br />

        <div class="under-subtitle animated fadeInDown slower">
          <span v-if="post.author" class="author-wrapper">
            <strong>Author:</strong> {{ post.author }}
          </span>
          <span v-if="post.date" class="date-wrapper">
            <strong>Published on:</strong> {{ post.date }}
          </span>
        </div>
      </div>
    </section>
    <b-container class="mb-5">
      <b-row>
        <b-col class="mt-5">
          <nuxt-content :document="post" />
          <h6 class="text-right" role="heading" aria-level="3">
            Author: {{ post.author }}
          </h6>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
      // const article = await $content(`articles/${params.slug}`).fetch()
      console.log("this is the post:" + post.thumbnail);
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post
    };
  }
};
</script>
<style lang="css">
@media screen and (min-width: 769px) {
  #blogPostPage .hero.is-medium .hero-body {
    padding-bottom: 16rem;
    padding-top: 16rem;
    text-align: center;
    /* padding-left: 18em; */
  }
}
.hero {
  margin-top: 0rem;
  background-size: cover !important;
  background-position: center;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.hero.is-medium .hero-bg-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  width: 100%;
}

.title {
  font-weight: 300;
  font-size: 3.2rem !important;
  /* @media (min-width: 768px) {
    font-size: 3.2rem;
  } */
}
.subtitle,
.under-subtitle {
  padding: 0;
  margin: 0;
}
.subtitle {
  font-size: 1.5rem !important;
  margin-bottom: 0 !important;
}
.under-subtitle {
  display: inline-block;
  font-size: 1rem;
  border-top: 2px solid #00d1b2;
  padding-top: 5px;
}

.hero.is-medium .hero-body {
  position: relative;
  z-index: 2;
  padding-bottom: 17rem;
  padding-top: 2rem;
}
.hero-theme-dark .title,
.hero-theme-dark .subtitle,
.hero-theme-dark .under-subtitle,
.hero-theme-dark .under-subtitle strong {
  color: white;
}
</style>
