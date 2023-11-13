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
          </div>
        </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue"
export default {
    components:{CarouselItem},
    props:['slides'],
    data:()=>({
      currentSlide:0,
      slideInterval:null
    }),
    methods:{
      setCurrentSlide(index){
        this.currentSlide=index;
      }
    },
    mounted(){
      this.slideInterval=setInterval(() => {
        const index=this.currentSlide < this.slides.length -1 ? this.currentSlide + 1 : 0;
        // this.currentSlide=index;
        this.setCurrentSlide(index);
      }, 3000);
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