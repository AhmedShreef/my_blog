import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
import "./filters.js";
import jQuery from "jquery";
window.jQuery = window.$ = jQuery;
import AOS from "aos";
window.AOS = AOS;
// require("./assets/vendor/jquery/jquery.min.js");
// require("./assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
require("./assets/vendor/jquery.easing/jquery.easing.min.js");
require("./assets/vendor/php-email-form/validate.js");
require("./assets/vendor/jquery-sticky/jquery.sticky.js");
require("./assets/vendor/isotope-layout/isotope.pkgd.js");
require("./assets/vendor/venobox/venobox.js");
require("./assets/vendor/waypoints/jquery.waypoints.min.js");
require("./assets/vendor/owl.carousel/owl.carousel.js");
// require("./assets/vendor/aos/aos.js");
require("./assets/js/main.js");
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");