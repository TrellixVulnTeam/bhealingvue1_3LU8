<template>
  <div>
    <!-- #header -->
    <!--========================== Hero Section ============================-->
    <section id="hero">
      <div class="hero-container">
        <div class="container welcome quote animated fadeIn">
          <p>
            Hi, I’m Betty Smith Sadler. These are times of great change, within
            ourselves, and in our world. Wherever you are on your Spiritual
            path, beginning the journey within, or looking to move beyond your
            current awareness, my job is waking you up to your potential as you
            discover who you really are.
          </p>
          <blockquote>
            <img src="~/assets/img/noun_golden-spiral_43318_ffffff.svg" alt />

            <p style="text-align: center;" role="presentation">
              "What you seek is seeking you."
              <br />~ Rumi ~
            </p>
          </blockquote>
        </div>
      </div>
    </section>
    <!-- #hero -->

    <main id="main">
      <!--========================== About Us Section ============================-->
      <Welcome />

      <!-- #about -->

      <!--========================== Process Section ============================-->
      <Process />
      <!-- #process -->
      <!--========================== Call To Action Section
      ============================-->
      <CTA />
      <!-- #call-to-action -->
      <!--========================== About Section ============================-->
      <About />
      <!-- #bout_me -->
      <Testimonial />
      <!--========================== Contact Section ============================-->
      <Contact />
    </main>

    <!--========================== Footer ============================-->
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Welcome from "~/components/Welcome";
import Process from "~/components/Process";
import About from "~/components/About";
import CTA from "~/components/CTA";
import Testimonial from "~/components/Testimonial";
import Contact from "~/components/Contact";

export default {
  components: {
    Logo,
    Welcome,
    Process,
    About,
    CTA,
    Testimonial,
    Contact
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
#hero {
  width: 100%;
  height: 100vh;
  background: url(~assets/img/backgrounds/dsc_0476.jpg) top center;
  background-size: cover;
  position: relative;
  margin-top: -130px;
}
#hero .hero-container {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.container.welcome.quote.animated {
  /* border: 1px solid black; */
  margin-top: -20em;
  height: 15em;
  border-radius: 10px;
  text-align: center;
  background: rgb(255, 255, 255, 0.7);
  padding: 2em;
  -webkit-animation-duration: 2s;
  -webkit-animation-delay: 1.5s;
  display: block !important;
}
#hero .container.welcome.quote img {
  height: 35px !important;
  filter: invert(100%);
  margin: auto;
}
#hero blockquote {
  margin: 1em 0;
}
</style>
