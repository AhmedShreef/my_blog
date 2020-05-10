<template>
    <div class="">
     
        <!-- Slide 1 -->
          <div :class="index = 1 ? 'carousel-item active' : 'carousel-item'" 
            :style="`background-image: url(${image})`"
          >
            <div class="container">
              <div class="carousel-content animated fadeInUp">
                <h2>{{title}}</h2>
                <p>
                  {{content}}
                </p>
              </div>
            </div>
          </div>
        
    </div><!--/post-->
</template>
<script>
    export default {
        props:["index","title", "image", "content"],
        name:'slider'
    }
</script>