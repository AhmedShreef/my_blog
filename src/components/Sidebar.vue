<template>
  <div class="">
    <h3 class="sidebar-title">Search</h3>
    <div class="sidebar-item search-form">
      <form action="">
        <input type="text" />
        <button type="submit"><i class="icofont-search"></i></button>
      </form>
    </div>
    <!-- End sidebar search formn-->

    <h3 class="sidebar-title">Categories</h3>
    <div class="sidebar-item categories">
      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link :to="`category/${category.slug}`" exact
            >{{ category.name }}
            <span>({{ category.posts_count }})</span></router-link
          >
        </li>
      </ul>
    </div>
    <!-- End sidebar categories-->
  </div>
  <!--/appsidepar-->
</template>
<script>
import axios from "axios";
export default {
  name: "sidebar",
  data() {
    return {
      categories: []
    };
  },
  mounted: function() {
    axios
      .get("http://flattern.test/api/categories")
      .then(res => (this.categories = res.data))
      .catch(err => console.log(err));
  }
};
</script>
