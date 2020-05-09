<template>
  <div class="single-post">
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Blog</h2>
          <ol>
            <router-link tag="li" to="/"><a>Home</a></router-link>
            <router-link tag="li" to="/blog"><a>Blog</a></router-link>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Breadcrumbs -->

    <!-- ======= Blog Section ======= -->
    <section id="blog" class="blog">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 entries">
            <article class="entry entry-single" data-aos="fade-up">
              <div class="entry-img">
                <img :src="post.thmbinal" :alt="post.title" class="img-fluid" />
              </div>

              <h2 class="entry-title">
                <a>{{post.title}}</a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center">
                    <i class="icofont-user"></i>
                    <a href="blog-single.html">{{post.author}}</a>
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="icofont-wall-clock"></i>
                    <a href="blog-single.html"
                      ><time datetime="2020-01-01">{{post.created_at}}</time></a
                    >
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="icofont-comment"></i>
                    <a href="blog-single.html">12 Comments</a>
                  </li>
                </ul>
              </div>

              <div v-html="post.content" class="entry-content"></div>

              <div class="entry-footer clearfix">
                <div class="float-left">
                  <i class="icofont-folder"></i>
                  <ul class="cats">
                    <li><a href="#">{{post.category}}</a></li>
                  </ul>

                </div>

                <div class="float-right share">
                  <a href="" title="Share on Twitter"
                    ><i class="icofont-twitter"></i
                  ></a>
                  <a href="" title="Share on Facebook"
                    ><i class="icofont-facebook"></i
                  ></a>
                  <a href="" title="Share on Instagram"
                    ><i class="icofont-instagram"></i
                  ></a>
                </div>
              </div>
            </article>
            <!-- End blog entry -->
            <!-- End blog comments -->
          </div>
          <!-- End blog entries list -->

          <div class="col-lg-4">
            <div class="sidebar" data-aos="fade-left">
              <Sidebar></Sidebar>
              <!-- End sidebar tags-->
            </div>
            <!-- End sidebar -->
          </div>
          <!-- End blog sidebar -->
        </div>
      </div>
    </section>
    <!-- End Blog Section -->
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import axios from "axios";
export default {
  data: function() {
    return {
      pageName: "About Us",
      post: []
    };
  },
  name: "singlePost",
  mounted: function() {
    axios
      .get("http://flattern.test/api/post/"+this.$route.params.slug)
      .then(res => (this.post = res.data))
      .catch(err => console.log(err));
  },
  components: {
    Sidebar
  }
};
</script>
