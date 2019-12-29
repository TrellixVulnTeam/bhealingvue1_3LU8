<template>
  <div>
    <!--========================== Testimonial Section ============================-->
    <section id="testimonial">
      <b-container class="container wow fadeIn">
        <b-row>
          <b-col md="12">
            <h3 class="section-title">Testimonials</h3>
          </b-col>
          <b-col md="12">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              img-blank-color="transparent"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->

              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide img-blank>
                <blockquote
                  role="presentation"
                >Betty has a loving way of nudging you to go deeper. I went to a painting class she was conducting and ended up knowing more of my emotional clutter. She always delivers a powerful healing, no matter what the modality.</blockquote>
                <h6 role="presentation">~ Diana E. Cohen ~</h6>
              </b-carousel-slide>

              <!-- Slide with blank fluid image to maintain slide aspect ratio -->
              <b-carousel-slide img-blank>
                <blockquote
                  role="presentation"
                >I have been blessed to work with Betty for several years now to heal from childhood abuse. I originally started out by thinking that I just wanted to stop the pain. With Betty’s assistance I have gone far beyond that. With her gentle probing and ability to poke in just the right direction, I am living a life that I could not believe was possible a few short years ago.</blockquote>
                <h6 role="presentation">~ Michele Wright ~</h6>
              </b-carousel-slide>
            </b-carousel>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<style scoped>
/* Testimonials Section
--------------------------------*/
#testimonials {
  background-color: whitesmoke;
  background-size: cover;
  padding: 80px 0 60px;
}
/* Testimonial Section */
#testimonial {
  background-color: whitesmoke;
  background-size: cover;
  padding: 80px 0;
  height: 49vh;
  border-top: 1px solid lightgrey;
}
#testimonials .box {
  padding: 50px 20px;
  margin-bottom: 50px;
  text-align: center;
  border: 1px solid #e6e6e6;
  height: 200px;
  position: relative;
  background: #fafafa;
}
blockquote {
  text-shadow: none;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 0px;
  padding-bottom: 20px;
  color: #333;
  text-align: center;
  height: 150px;
  margin-bottom: 22px;
}
.carousel-caption h6 {
  text-shadow: none;
}
#testimonials .icon {
  position: absolute;
  top: -36px;
  left: calc(50% - 36px);
  transition: 0.2s;
  border-radius: 50%;
  border: 6px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 72px;
  height: 72px;
  background: #2dc997;
}

#testimonials .icon a {
  display: inline-block;
}

#testimonials .icon i {
  color: #fff;
  font-size: 24px;
}

#testimonials .box:hover .icon {
  background: #fff;
  border: 2px solid #2dc997;
}

#testimonials .box:hover .icon i {
  color: #2dc997;
}

#testimonials .box:hover .icon a {
  color: #2dc997;
}

#testimonials .title {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 15px;
  text-transform: uppercase;
}

#testimonials .title a {
  color: #111;
}

#testimonials .description {
  font-size: 14px;
  line-height: 24px;
}
/* Call To Action Section
--------------------------------*/
#call-to-action {
  /* background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), */
  /* url("../img/backgrounds/shutterstock_149883605.jpg") fixed center center; */
  background-size: cover;
  padding: 80px 0;
  height: 69vh;
}

#call-to-action .cta-title {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
}

#call-to-action .cta-text {
  color: #fff;
}

@media (min-width: 769px) {
  #call-to-action .cta-btn-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: -19em;
  }
  .call-to-action {
    background-size: 20%;
  }
}
@media (max-width: 769px) {
  #carouselExampleIndicators {
    /* background-image: url('./img/backgrounds/shutterstock_149883605.jpg'); */
    /* height: 100vh;
    min-height: 300px; */
    /* background: no-repeat center center scroll !important; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover !important;
    /* margin-left: -7em; */
  }
}
#call-to-action .cta-btn {
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 8px 30px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 10px;
  border: 2px solid #fff;
  color: #fff;
}

#call-to-action .cta-btn:hover {
  background: #2dc997;
  border: 2px solid #2dc997;
}

#carouselExampleIndicators {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover !important;
  /* width: 40em; */
}
@media (min-width: 1200px) {
  #call-to-action .container {
    max-width: 1140px;
    margin-left: -6%;
  }
}
.carousel-indicators li {
  box-sizing: content-box;
  -webkit-box-flex: 0;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #333;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  -webkit-transition: opacity 0.6s ease;
  transition: opacity 0.6s ease;
}
.carousel-item {
  height: 25vh !important;
  min-height: 175px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.carousel-indicators li {
  background-color: #517b48;
}
.carousel-indicators li.active {
  background-color: #5b7da6;
}
.carousel-caption {
  color: #2b2c2d;
  text-align: center;
  /* background: rgba(230, 230, 230, .5); */
}
</style>