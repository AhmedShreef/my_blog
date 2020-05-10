<template>
  <div>
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>{{setting.app_title}}</h3>
              <p>
                {{setting.app_footer_about_text}}
                <br>
                <strong>Phone:</strong> {{setting.app_phone_contact ? setting.app_phone_contact : ''}}<br />
                <strong>Email:</strong> {{setting.app_email_contact}}<br />
              </p>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <router-link to="/" tag="li" exact><i class="bx bx-chevron-right"></i> <a>Home</a></router-link>
                <router-link to="/about" tag="li"><i class="bx bx-chevron-right"></i> <a>About</a></router-link>
                <router-link to="/blog" tag="li"><i class="bx bx-chevron-right"></i> <a>Blog</a></router-link>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Web Design</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Marketing</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" /><input
                  type="submit"
                  value="Subscribe"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container d-md-flex py-4">
        <div class="mr-md-auto text-center text-md-left">
          <div class="copyright">
            &copy; Copyright <strong><span>{{setting.app_title}}</span></strong
            >. All Rights Reserved
          </div>
        
        </div>
        <div class="social-links text-center text-md-right pt-3 pt-md-0">
          <a :href="setting.app_tw_link" target="_blang" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a :href="setting.app_fp_link" target="_blang" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a :href="setting.app_insta_link" target="_blang" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a :href="setting.app_linkedin_link" target="_blang" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </footer>
    <!-- End Footer -->
    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "footer",
  data() {
    return {
      setting: []
    };
  },
  mounted: function() {
    // using vuex
    console.log(this.getApiUrl);
    axios
      .get(this.getApiUrl + "setting")
      .then(res => (this.setting = res.data))
      .catch(err => console.log(err));
  },
  computed: {
    ...mapGetters(["getApiUrl"])
  }
};
</script>

<style></style>
