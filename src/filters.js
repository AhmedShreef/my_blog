import Vue from "vue";

//make upercase
Vue.filter('imgsrc', function(v) {
    return "http://flattern.test/upload/" + v;
});

//make reverse
Vue.filter('date', function(v) {
    return new Date(v);
});

//read more post [shorten text]
Vue.filter('shorten', function(v) {
    return v.substring(0, 200) + '....';
});