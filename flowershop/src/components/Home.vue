<template>
    <div>
        <Navbar/>
        <div class="intro-sec" dir="rtl">
        <img src="../assets/images/flower19.png">
        <div class="intro-txt">
           <hr class="rotate">
           <h1>گل ها شیوه ی طبیعت برای سرودن شعر هستند</h1>
           <p class="intro-p">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p> 
           <p class="intro-p p2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات</p>
        </div>
        </div>
        <div class="best-sell">
          <div class="row">
            <div class="top-sellers">
              <div class="item" v-for="x in card" :key="x">
                <img src="../assets/images/flower20.jpg">
                <div class="item-detail">
                  <h3>{{ x.title }}</h3>
                  <div class="price">
                      <a href="#" class="now">{{ x.price }}<br><span class="rial">تومان</span></a>
                      <a class="space">|</a>
                      <a href="#" class="befor">{{ x.bprice }}<br><span class="rial">تومان</span></a>  
                  </div>
                  <button class="buy">
                    <svg @click="Buy1()"
                    id="buybtn1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" 
                    :class="x.class"
                    viewBox="0 0 16 16" >
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                  <svg @click="Buy2()"
                  id="buybtn2"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" 
                    :class="x.secClass" 
                    viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                  </svg>
                  <button class="like">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>
                    </button>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="top-sellers">
              <div class="item" v-for="x in card" :key="x">
                <img src="../assets/images/flower20.jpg">
                <div class="item-detail">
                  <h3>{{ x.title }}</h3>
                  <div class="price">
                      <a href="#" class="now">{{ x.price }}<br><span class="rial">تومان</span></a>
                      <a class="space">|</a>
                      <a href="#" class="befor">{{ x.bprice }}<br><span class="rial">تومان</span></a>  
                  </div>
                  <button class="buy" v-on:click="x.Buy =! x.Buy">
                    <div v-if="x.Buy">
                      <svg xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" 
                    :class="x.class"
                    viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                    </div>
                    <div v-else>
                      <svg
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" 
                    :class="x.secClass" 
                    viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>

                      </svg>
                    </div>

                  <button class="like">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>
                        </button>
                  </button>
                </div>
              </div>
            </div>


            <div class="top-sellers">
              
            </div>
          </div>
          <div class="continue" dir="rtl">
                <p> موارد بیشتر >></p>
            </div>
        </div>
        <div class="top-sellers-footer">
            <img class="line" src="../assets/images/line2-removebg-preview.png" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D2D1F1" fill-opacity="1" d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,240C840,267,960,277,1080,245.3C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <p id="titr">پرفروش ترین ها
            </p>
        </div>
        <button @click="count++">{{count}}</button>

        <p v-if="count>3">{{ count }}</p>
    </div>
</template>

<script>
import Navbar from '@/components/NavbarSec.vue'
// import ref from 'vue'
export default {
  name:'NavbarView',
  components:{
    Navbar
  },
  data(){
    return{
      // Test:ref(true),
      count:0,
    card:[{
     title:"گل سوسن",
    price:'140,000',
  bprice:'160,000',
class:'bi bi-cart-plus',
secClass: 'bi bi-cart-check-fill',
Buy:true,
},

{
     title:"گل لاله",
    price:'150,000',
  bprice:'170,000',
class:'bi bi-cart-plus',
Buy:true,
secClass: 'bi bi-cart-check-fill'},
{
     title:"گل لیلیوم",
    price:'170,000',
  bprice:'190,000',
class:'bi bi-cart-plus',
Buy:true,

secClass: 'bi bi-cart-check-fill'},
{
     title:"گل بنفشه",
    price:'130,000',
  bprice:'145,000',
class:'bi bi-cart-plus',
Buy:true,

secClass: 'bi bi-cart-check-fill'},
{
     title:"گل پروانه",
    price:'140,000',
  bprice:'155,000',
class:'bi bi-cart-plus',
Buy:true,

secClass: 'bi bi-cart-check-fill'},]
    }
  },
  methods:{
    handleBuy(){
      this.Buy=! this.Buy
    },
    Buy1(){
      var buybtn1=document.getElementById('buybtn1');
      var buybtn2=document.getElementById('buybtn2');
      buybtn1.style.display='none';
      buybtn2.style.display='inline';
      buybtn2.style.color='red'
    },
    Buy2(){
      var buybtn1=document.getElementById('buybtn1');
      var buybtn2=document.getElementById('buybtn2');
      buybtn2.style.display='none';
      buybtn1.style.display='inline';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
