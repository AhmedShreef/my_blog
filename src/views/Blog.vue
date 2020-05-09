<template>
    <div class="blog">
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>{{ pageName }}</h2>
          <ol>
            <router-link tag="li" to="/"><a>Home</a></router-link>
            <li>{{ pageName }}</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= Blog Section ======= -->
    <section id="blog" class="blog">
      <div class="container">

        <div class="row">

          <div class="col-lg-8 entries">

            <BlogPost v-for="post in posts" 
                        :key="post.id" 
                        :title="post.title" 
                        :thmbinal="post.thmbinal" 
                        :created_at="post.created_at" 
                        :author="post.author" 
                        :content="post.content" 
                        :slug="post.slug"
                        ></BlogPost>

            <div class="blog-pagination">
              <ul class="justify-content-center">
                <li class="disabled"><i class="icofont-rounded-left"></i></li>
                <li><a href="#">1</a></li>
                <li class="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"><i class="icofont-rounded-right"></i></a></li>
              </ul>
            </div>

          </div><!-- End blog entries list -->

          <div class="col-lg-4">

            <div class="sidebar" data-aos="fade-left">

              <Sidebar></Sidebar>

          </div><!--  End blog sidebar -->

        </div><!-- col sidebar -->

      </div>
      </div><!--container-->
    </section><!-- End Blog Section -->
    </div>
</template>
<script>
import BlogPost from "@/components/BlogPost.vue";
import Sidebar from "@/components/Sidebar.vue";
import axios from "axios";
export default {
  data() {
    return {
      pageName: "Blog",
      posts: [],
    };
  },
  name:"blog",
  mounted: function() {
    axios.get("http://flattern.test/api/posts")
      .then(res => this.posts = res.data)
        .catch(err => console.log(err));
    },
    components:{
       BlogPost,
        Sidebar
    }
}
</script>