<template>
  <div class="carousell">
          <div class="carousel-inner">
            <carousel-item v-for="(slide,index) in slides" 
            :key="`item-${index}`" 
            :slide="slide"
            :current-slide="currentSlide"
            :index="index"
            >
        </carousel-item>
        <carousel-controls @prev='prev' @next='next'></carousel-controls>
          </div>
        </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue"
import CarouselControls from "./CarouselControls.vue"


export default {
    components:{CarouselItem, CarouselControls},
    props:['slides'],
    data:()=>({
      currentSlide:0,
      slideInterval:null
    }),
    methods:{
      setCurrentSlide(index){
        this.currentSlide=index;
      },
      prev(){
        const index=
        this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1;
        this.setCurrentSlide(index)
      },
      next(){
        const index=
        this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
        this.setCurrentSlide(index)
      }
    },
    mounted(){
      // this.slideInterval=setInterval(() => {
      //   // const index=this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
      //   // // this.currentSlide=index;
      //   // this.setCurrentSlide(index);
      //   this.next()
      // }, 3000);
    },
    beforeUnmount(){
      clearInterval(this.slideInterval)
    }
}
</script>

<style scoped>
.carousell{
  margin-top: 100px;
  display:flex ;
  justify-content: center;
}
.carousel-inner{
  position:relative;
  width:800px;
  height:400px;
  overflow:hidden;
}
</style>