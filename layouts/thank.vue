<template>
  <div class="thank">
    <div>
      <b-container>
        <b-row>
          <b-col md="12" class="thankWhite animated zoomIn">
            <h1 class="title">Thank you!</h1>
            <p>Your form submission has been received.</p>
            <p class="homelink text-center">
              <a href="/">
                <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'arrow-left'}" />&nbsp&nbsp Back to home
              </a>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
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
  }
};
</script>
<style>
.thank {
  background-color: #0d1e25;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
.thankWhite {
  background-color: #fff;
  border-radius: 10px;
  width: 600px;
  height: 200px;
  text-align: center;
  padding-top: 3%;
}
.homelink {
  margin-top: 10%;
}
</style>
