<template>
  <div>
    <b-navbar toggleable="lg" variant="info" sticky class="is-transparent animated" id="nav0">
      <b-navbar-brand>
        <div class="logo animated zoomIn">
          <transition name="logo">
            <nuxt-link style="animation-duration: 0.3s" class="logo-text" to="/">
              <img class="head_logo animated" src="~assets/img/noun_golden-spiral_43318_ffffff.png" />
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
          <b-nav-item router-tag="a" to="#bout_me">About Me</b-nav-item>
          <b-nav-item router-tag="a" to="#contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
export default {
  components: {
    Footer,
    Navbar
  },
  data: function() {
    return {
      loaded: false,
      show: false,
      scrollPosition: null
    };
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    },
    onFadeIn() {
      this.show = true;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", function() {
        var navbar = document.getElementById("nav0");
        var nav_classes = navbar.classList;
        if (document.documentElement.scrollTop >= 250) {
          if (nav_classes.contains("shrink") === false) {
            nav_classes.toggle("shrink");
          }
        } else {
          if (nav_classes.contains("shrink") === true) {
            nav_classes.toggle("shrink");
          }
        }
      });
    });
  }
};
</script>
<style>
#nav0.shrink {
  padding: 0.02rem;
  background: #4b5255 !important;
  height: 81px;
}
#nav0 {
  transition: 0.9s;
}
div#nav-collapse {
  margin-right: 4%;
}
.navbar-brand img.head_logo.animated {
  padding: 0;
  margin: 0;
  width: 7%;
  margin-right: 20px;
  filter: invert(100%);
}
#nav0.shrink img.head_logo {
  filter: invert(0%);
}
img.round {
  border-radius: 15px;
}
.navbar-brand .logo {
  width: 100%;
  display: inline-block;
  margin-left: 15%;
  margin-top: 0px;
}
#nav0.shrink .navbar-brand .logo h1 {
  color: #fff;
}
#nav0.shrink a.nav-link {
  color: #fff;
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
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
a {
  color: #007bff;
  text-decoration: none;
  text-decoration-line: none;
  text-decoration-style: initial;
  text-decoration-color: initial;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
