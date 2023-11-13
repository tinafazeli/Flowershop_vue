<template>
  <div class="carousell">
          <div class="carousel-inner">
            <carousel-item v-for="(slide,index) in slides" 
            :key="`item-${index}`" 
            :slide="slide">
        </carousel-item>
          </div>
        </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue"
export default {
    components:{CarouselItem},
    props:['slides']
}
</script>

<style>

</style>