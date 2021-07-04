<template>
  <div id="blog-page">
    <!--========================== Hero Section ============================-->
    <section class="hero is-large hero-theme-dark">
      <img
        class="hero-bg-img"
        src="@/assets/img/backgrounds/pier-to-the-beautiful-ocean-sunset-45177-2560x1600.jpg"
      />
      <div class="hero-body">
        <div class="container">
          <h1 class="title animated fadeInUp">
            Blog
          </h1>
          <!-- <h2 class="subtitle animated fadeInUp slower">
            {{ subtitle }}
          </h2> -->
          <br />
          <!-- <div
            v-if="$slots.default"
            class="under-subtitle animated fadeInDown slower"
          >
            <slot />
          </div> -->
        </div>
      </div>
    </section>
    <!-- #hero -->
    <!-- content -->

    <div class="container">
      <div class="row">
        <ul class="blogPostItem" v-for="post of posts" :key="post.slug">
          <li v-for="post of posts" :key="post.slug">
            <b-card
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="m-4"
            >
              <NuxtLink :to="post.slug"
                ><h2>{{ post.title }}</h2></NuxtLink
              >

              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
            </b-card>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch();

    return {
      posts
    };
  }
};
</script>
<style lang="css">
@media screen and (min-width: 769px) {
  #blog-page .hero.is-large .hero-body {
    padding-bottom: 18rem;
    padding-top: 18rem;
    text-align: center;
    /* padding-left: 18em; */
  }
}
.hero {
  margin-top: -8rem;
  background-size: cover !important;
  background-position: center;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.hero .hero-bg-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.hero .opti-image {
  opacity: 0;
}
.hero .opti-image-loaded {
  opacity: 1;
}

.title {
  font-weight: 300;
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
  font-size: 1.5rem;
  margin-bottom: 0 !important;
}
.under-subtitle {
  display: inline-block;
  font-size: 1rem;
  border-top: 2px solid;
  padding-top: 5px;
}
.opti-image {
  opacity: 0;
}
.opti-image-loaded {
  opacity: 0.12;
  animation: blurIn 4.5s ease;
}
.hero-body {
  position: relative;
  z-index: 2;
}
.hero-theme-dark .title,
.hero-theme-dark .subtitle,
.hero-theme-dark .under-subtitle,
.hero-theme-dark .under-subtitle strong {
  color: white;
}
.blogPostItem {
  list-style: none;
}
</style>
