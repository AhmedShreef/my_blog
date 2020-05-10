<template>
  <div class="blog">
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>{{ category.category_name }}</h2>
          <ol>
            <router-link tag="li" to="/"><a>Home</a></router-link>
            <router-link tag="li" to="/blog"><a>Blog</a></router-link>
            <li>{{ category.category_name }}</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Breadcrumbs -->

    <!-- ======= Blog Section ======= -->
    <section id="blog" class="blog" v-if="this.posts.length > 0">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 entries">
            <BlogPost
              v-for="post in posts"
              :key="post.id"
              :title="post.title"
              :thmbinal="post.thmbinal"
              :created_at="post.created_at"
              :author="post.author"
              :content="post.content"
              :slug="post.slug"
            ></BlogPost>

            <div class="blog-pagination">
              <pagination
                class="justify-content-center"
                :data="pagination"
                @pagination-change-page="getPosts"
              ></pagination>
            </div>
          </div>
          <!-- End blog entries list -->

          <div class="col-lg-4">
            <div class="sidebar" data-aos="fade-left">
              <Sidebar></Sidebar>
            </div>
            <!--  End blog sidebar -->
          </div>
          <!-- col sidebar -->
        </div>
      </div>
      <!--container-->
    </section>
    <!-- End Blog Section -->
  </div>
</template>
<script>
import BlogPost from "@/components/BlogPost.vue";
import Sidebar from "@/components/Sidebar.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      pageName: "category",
      posts: [],
      category: [],
      pagination: {}
    };
  },
  name: "Category",
  mounted: function() {
    this.getPosts();
  },
  methods: {
    getPosts(page = 1) {
      axios
        .get(
          this.getApiUrl +
            "category/" +
            this.$route.params.slug +
            "?page=" +
            page
        )
        .then(res => {
          this.posts = res.data.posts.data;
          this.pagination = res.data.posts;
          this.category = res.data.category;
        });
    }
  },
  components: {
    BlogPost,
    Sidebar
  },
  computed: {
    ...mapGetters(["getApiUrl"])
  }
};
</script>
<style></style>
