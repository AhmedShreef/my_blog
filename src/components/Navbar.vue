<template>
  <div>
    <section id="topbar" class="d-none d-lg-block">
      <div class="container d-flex">
        <div class="contact-info mr-auto">
          <i class="icofont-envelope"></i
          ><a :href="+'mailto:'+setting.app_email_contact">{{setting.app_email_contact}}</a>
          <i class="icofont-phone"></i> {{setting.app_phone_contact ? setting.app_phone_contact : ''}}
        </div>
        <div class="social-links">
          <a :href="setting.app_tw_link" target="_blang" class="twitter"><i class="icofont-twitter"></i></a>
          <a :href="setting.app_fp_link" target="_blang" class="facebook"><i class="icofont-facebook"></i></a>
          <a :href="setting.app_insta_link" target="_blang" class="instagram"><i class="icofont-instagram"></i></a>
          <a :href="setting.app_linkedin_link" target="_blang" class="linkedin"><i class="icofont-linkedin"></i></a>
        </div>
      </div>
    </section>

    <!-- ======= Header ======= -->
    <header id="header">
      <div class="container d-flex">
        <div class="logo mr-auto">
          <h1 class="text-light"><router-link to="/" exact>{{setting.app_title}}</router-link></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>

        <nav class="nav-menu d-none d-lg-block">
          <ul>
           <router-link to="/" tag="li" exact><a>Home</a></router-link>
            <router-link to="/about" tag="li"><a>About</a></router-link>
            <router-link to="/blog" tag="li"><a>Blog</a></router-link>
            <!--<li class="drop-down">
              <a href="">Drop Down</a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="drop-down">
                  <a href="#">Drop Down 2</a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
                <li><a href="#">Drop Down 5</a></li>
              </ul>
            </li>-->
          </ul>
        </nav>
        <!-- .nav-menu -->
      </div>
    </header>
    <!-- End Header -->
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "navbar",
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
