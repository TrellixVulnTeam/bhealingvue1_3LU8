<template>
  <div>
    <section id="contact">
      <div class="container wow fadeInUp">
        <div class="section-header">
          <h3 class="section-title">Let's Connect</h3>
          <p class="section-description">
            Give me a call, or drop me an email to schedule a
            session, or a complimentary 30 minute consultation.
            <br />Let's get started moving forward together!
          </p>
          <p></p>
        </div>
      </div>

      <div class="container wow fadeInUp">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-4">
            <ul class="social-links">
              <li id="phone">
                <a aria-label=" call Betty at 770-206-4002" href="tel:7703178288">
                  <i class="fa fa-phone fa-2x animated faa-ring faa-slow"></i>
                  <font-awesome-icon
                    :icon="{ prefix: 'fas', iconName: 'phone' }"
                    class="animated ring"
                    flip="horizontal"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/benevolenthealing.org/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/betty-smith-sadler-13672219/"
                  aria-label="linked in"
                  target="_blank"
                >
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }" />
                </a>
              </li>
              <li>
                <a href="mailto:betty@benevolenthealing.org">
                  <font-awesome-icon
                    :icon="{ prefix: 'fas', iconName: 'envelope' }"
                    class="animated faa-ring faa-slow"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-8">
            <div class="form">
              <form
                action="/thank-you"
                method="post"
                name="contact1"
                class="contactForm"
                netlify-honeypot="bot-field"
                netlify
              >
                <input type="hidden" name="form-name" value="contact" />
                <p class="hidden">
                  <label>
                    Don’t fill this out:
                    <input name="bot-field" />
                  </label>
                </p>
                <div class="form-group">
                  <input
                    type="text"
                    aria-label="Full Name"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    aria-label="Email Address"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    class="form-control"
                    aria-label="Message"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="text-center">
                  <button class="buttonfx curtaindown" name="submit" type="submit">Send Message</button>
                </div>
                <div class="form-group">
                  <div class="col-sm-10 col-sm-offset-2">
                    <!-- Will be used to display an alert to the user-->
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="member">
              <div class="pic">
                <img
                  class="round"
                  src="~/assets/img/backgrounds/open-ocean-dolphin-swim-freeport-the-bahamas-1.JPG"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- #contact -->
  </div>
</template>

<style scoped>
/* Contact Section
--------------------------------*/
#contact {
  background: #fff;
  padding: 80px 0 40px;
  border-top: 1px solid lightgrey;
}

#contact #google-map {
  height: 300px;
  margin-bottom: 20px;
}

#contact .info {
  color: #333333;
}

#contact .info i {
  font-size: 32px;
  color: #2dc997;
  float: left;
}

#contact .info p {
  padding: 0 0 10px 50px;
  margin-bottom: 20px;
  line-height: 22px;
  font-size: 14px;
}

#contact .info .email p {
  padding-top: 5px;
}

#contact .social-links {
  padding-bottom: 20px;
  display: inline-block;
  list-style: none;
}
#contact .social-links li {
  display: block;
  margin: 10px;
}

#contact .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #333;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#contact .social-links a:hover {
  background: #507b48;
  transition: ease-in-out 300ms;
  color: #fff;
}

#contact .form #sendmessage {
  color: #5b8553;
  border: 1px solid #5b8553;
  display: none;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#contact .form #errormessage {
  color: red;
  display: none;
  border: 1px solid red;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#contact .form #errormessage.show,
#contact .form #sendmessage.show,
#contact .form .show {
  display: block;
}

#contact .form .validation {
  color: red;
  display: none;
  margin: 0 0 20px;
  font-weight: 400;
  font-size: 13px;
}
.fa-phone.fa-2x {
  font-size: 1.2em;
}
#contact .form input,
#contact .form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}

#contact .form button[type="submit"] {
  background: #51749f;
  border: 0;
  padding: 10px 24px;
  color: #fff;
  transition: 0.4s;
  border-radius: 3px;
}

#contact .form button[type="submit"]:hover {
  background: #507b48;
  transition: ease-in 300ms !important;
}
button:focus {
  outline: none;
  outline: -webkit-focus-ring-color auto 5px;
}
#contact img {
  width: 103%;
  margin-left: 50%;
  margin-top: -20px;
}

.justify-content-center {
  margin-left: -24%;
  text-align: left;
}
#contact .col-lg-4.col-md-8 {
  margin-left: -17%;
}
.container.form.wow.fadeInUp {
  margin-left: 8%;
}

@media (max-width: 768px) {
  #contact .pic img {
    width: 115%;
    margin-left: -14%;
    margin-top: -97em;
  }
  #contact .social-links li {
    display: inline;
    margin: 10px;
  }
  .justify-content-center {
    margin-left: 10%;
    text-align: left;
    margin-top: -1em;
  }
  section#contact {
    margin-top: -4em;
  }
  #contact .section-header {
    margin-top: 16em;
  }
}
.hidden {
  display: none;
}
</style>