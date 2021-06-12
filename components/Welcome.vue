<template>
  <div>
    <section id="welcome">
      <div class="container">
        <div class="row about-container">
          <div class="col-lg-4 content order-lg-1 order-2">
            <div class="member">
              <div class="pic">
                <img
                  class="round"
                  src="~assets/img/backgrounds/Les_Eclaireurs_Lighthouse.jpg"
                  alt
                />
              </div>
            </div>
          </div>

          <div class="col-lg-8 content order-lg-1 order-2">
            <!-- <h2 class="title">Welcome</h2> <p> Hi, I’m Betty Smith Sadler. These are
                            times of great change, within ourselves and in our world. Wherever you are on
                            your Spiritual path, beginning the journey within or looking to move beyond your
                            current awareness, my job is waking you up to your Potential as you discover who
            you really are. </p>-->
            <blockquote>
              <img src="~/assets/img/noun_golden-spiral_43318_ffffff.svg" alt />
              <p>
                “ Ring the bells that still can ring, Forget your perfect
                offering,
                <br />There is a crack in everything, That’s how the light gets
                in. ”
              </p>
              <p>~ Lenard Cohen ~</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Welcome Section
--------------------------------*/
#welcome {
  background: whitesmoke;
  padding: 80px 0;
}
img.round {
  border-radius: 15px;
}
#welcome blockquote img {
  width: 6%;
  filter: invert(100%);
  margin: auto;
}
#welcome .about-container .background {
  min-height: 300px;
  /* background: url("../img/about-img.jpg") center top no-repeat; */
  margin-bottom: 10px;
}

#welcome .about-container .content {
  background: whitesmoke;
}

#welcome .about-container .title {
  color: #333;
  font-weight: 500;
  font-size: 32px;
  text-align: center;
}

@media (max-width: 768px) {
  #welcome .about-container .title {
    padding-top: 15px;
  }
  #welcome img {
    width: 20%;
  }
}

#welcome .about-container p {
  line-height: 26px;
}

#welcome .about-container p:last-child {
  margin-bottom: 0;
}

#welcome .about-container .icon-box {
  background: #fff;
  background-size: cover;
  padding: 0 0 30px;
}

#welcome .about-container .icon-box .icon {
  float: left;
  background: #fff;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 50%;
  border: 2px solid #2dc997;
}

#welcome .about-container .icon-box .icon i {
  color: #2dc997;
  font-size: 24px;
}

#welcome .about-container .icon-box .title {
  margin-left: 80px;
  font-weight: 500;
  margin-bottom: 5px;
  font-size: 18px;
  text-transform: uppercase;
}

#welcome .about-container .icon-box .title a {
  color: #111;
}

#welcome .about-container .icon-box .description {
  margin-left: 80px;
  line-height: 24px;
  font-size: 14px;
}
#welcome img {
  width: 100%;
}
</style>
