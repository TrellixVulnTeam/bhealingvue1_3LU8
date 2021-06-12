<template>
  <div>
    <section id="bout_me">
      <div class="container wow fadeInUp">
        <div class="section-header">
          <h3 class="section-title">About Me</h3>
          <div class="row">
            <div class="col-lg-4col-md-6"></div>
            <div class="col-lg-4 col-md-6">
              <div class="member">
                <div class="pic">
                  <img
                    class="round"
                    src="~/assets/img/headshots/BettyHeadshot4 copy.jpg"
                    alt
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-6">
              <p class="section-description">
                I grew up with a strong sensitivity to people, animals, and the
                natural world that has deepened and evolved through the years. I
                received an MEd in Rehabilitation Counseling, and worked in this
                field for many years. I am also an artist, and I earned a BFA in
                Drawing and Painting. My interest in the spiritual and the
                psychological has taken me far below the surface of things. I
                found my calling when I studied spiritual healing and
                development with Martha Novak and Infinite Insight, a system to
                which I am still aligned. My system is a refined and
                sophisticated one, making me an adept at helping my clients
                achieve clarity, peace, joy, potential, heightened creativity,
                and more. I now help clients realize that God is a God of more,
                and is right there inside of us, ready to be used and enjoyed.
              </p>
              <blockquote class="quote">
                <img
                  src="~assets/img/noun_golden-spiral_43318_ffffff.svg"
                  alt
                />
                <p style="text-align: center;" role="presentation">
                  Your task is not to seek for love,
                  <br />but merely to seek and find all the barriers within
                  yourself <br />that you have built against it.” <br />~ Rumi ~
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* bout_me Section
--------------------------------*/
#bout_me {
  background: #fff;
  padding: 150px 0 250px;
}

#bout_me .member {
  text-align: center;
  margin-bottom: 20px;
}

#bout_me .member .pic {
  margin-bottom: 15px;
  overflow: hidden;
  height: auto;
}

#bout_me .member .pic img {
  max-width: 100%;
}

#bout_me .member h4 {
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 18px;
}

#bout_me .member span {
  font-style: italic;
  display: block;
  font-size: 13px;
}

#bout_me .member .social {
  margin-top: 15px;
}

#bout_me .member .social a {
  color: #b3b3b3;
}

#bout_me .member .social a:hover {
  color: #2dc997;
}

#bout_me .member .social i {
  font-size: 18px;
  margin: 0 2px;
}
blockquote.quote img {
  width: 6% !important;
  filter: invert(100%);
  margin: auto;
}
</style>
