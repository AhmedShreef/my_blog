<template>
    <div class="">
        <article class="entry" data-aos="fade-up">

              <div class="entry-img">
                <img v-bind:src="thmbinal" alt="" class="img-fluid">
              </div>

              <h2 class="entry-title">
                <a href="blog-single.html">{{title}}</a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="icofont-user"></i> <a href="blog-single.html">{{author}}</a></li>
                  <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">{{created_at}}</time></a></li>
                  <li class="d-flex align-items-center"><i class="icofont-comment"></i> <a href="blog-single.html">12 Comments</a></li>
                </ul>
              </div>

              <div class="entry-content">
                <p v-html="$options.filters.shorten(content)"></p>
                <div class="read-more">
                  <router-link :to="`post/${slug}`">Read More</router-link>
                </div>
              </div>

            </article><!-- End blog entry -->

        
    </div><!--/post-->
</template>
<script>
    export default {
        props:["slug", "title", "thmbinal", "created_at", "author", "content"],
        name:'post'
    }
</script>

<style scoped>

</style>