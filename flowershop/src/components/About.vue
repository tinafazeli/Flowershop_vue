<template>
    <div>
        <Navbar/>
        <carousel :slides="slides"></carousel>
    </div>
</template>

<script>
import Navbar from '@/components/NavbarSec.vue'
import Carousel from '@/components/carousel/CarouselMain.vue'
export default {
  name:'NavbarView',
  components:{
    Navbar,
    Carousel
  },
  data:()=>({
    slides:[
      "https://picsum.photos/id/1050/800/400",
      "https://picsum.photos/id/1039/800/400",
      "https://picsum.photos/id/1037/800/400",
      "https://picsum.photos/id/1040/800/400"
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>