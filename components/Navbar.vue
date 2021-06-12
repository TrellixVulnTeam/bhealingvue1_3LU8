<template>
  <div>
    <b-navbar
      toggleable="lg"
      variant="info"
      sticky="true"
      class="is-transparent"
      id="nav0"
    >
      <b-navbar-brand>
        <div class="logo animated zoomIn">
          <transition name="logo">
            <nuxt-link
              style="animation-duration: 0.3s"
              class="logo-text"
              to="/"
            >
              <img
                class="head_logo animated"
                src="~assets/img/noun_golden-spiral_43318_ffffff.png"
                alt=""
              />
              <h1 role="presentation">Benevolent Healing</h1>
            </nuxt-link>
          </transition>
          <!-- <transition name="logo-text" enter-active-class="bounceInRight">
            <nuxt-link style="animation-duration: 0.3s" class="logo-text" to="/">J.S. Development</nuxt-link>
          </transition>-->
        </div>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto animated zoomIn">
          <b-nav-item router-tag="a" to="#welcome">Welcome</b-nav-item>
          <b-nav-item to="#process" router-tag="a">Process</b-nav-item>
          <b-nav-item router-tag="a" to="#bout_me">About</b-nav-item>
          <b-nav-item router-tag="a" to="#contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style scoped>
.navbar-brand img.head_logo.animated {
  padding: 0;
  margin: 0;
  width: 7%;
  margin-right: 20px;
  filter: invert(100%);
}
.navbar-brand .logo {
  width: 100%;
  display: inline-block;
  margin-left: 15%;
  margin-top: 0px;
}
.navbar-brand .logo h1 {
  font-size: 22px;
  margin: 0;
  padding: 6px 0;
  line-height: 1;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 3px;
  text-transform: none;
  display: inline-block;
  color: black;
}
#nav0 {
  background-color: transparent !important;
  /* border-bottom: 1px #fff solid; */
  /* margin-bottom: 47px; */
}
</style>
