<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
<style>
/* @import "./assets/vendor/bootstrap/css/bootstrap.min.css"; */
@import "./assets/vendor/icofont/icofont.min.css";
@import "./assets/vendor/boxicons/css/boxicons.min.css";
@import "./assets/vendor/animate.css/animate.min.css";
@import "./assets/vendor/venobox/venobox.css";
@import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";
@import "./assets/vendor/aos/aos.css";
@import "./assets/css/style.css";
</style>
