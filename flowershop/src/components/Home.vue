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
          <p id="titr">پرفروش ترین ها
            </p>
          <!-- <div class="row"> -->
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
                  </button>
                  <button class="like" v-on:click="x.Like =! x.Like">
                    <div v-if="x.Like">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                      </svg>
                    </div>
                    <div v-else>
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div> 
          <div class="continue" dir="rtl">
                <p> موارد بیشتر >></p>
          </div>
        </div>
        <div class="top-sellers-footer">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D2D1F1" fill-opacity="1" d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,240C840,267,960,277,1080,245.3C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> -->
            <img class="line" src="../assets/images/line2-removebg-preview.png" alt="">
        </div>
        <div class="giftBox">
          <div class="slideshow">
            <!-- <button @click="count++">back</button> -->
            <div class="carusel">
              <div class="slide" v-for="x in giftItem" :key="x">
                <div class="circleback"><img v-bind:src="x.src" alt=""></div>
              </div>
            </div>
          </div>
          <div class="gift-detail">
            <hr class="rotate2">
            <h1>با یک باکس گل عزیزات رو</h1>
            <h1 class="secondtitr">سوپرایز کن</h1>
            <div class="detail-box">
                <p dir="rtl">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی
                </p>
            </div>
        </div>
        </div>

        <!-- <div class="special-discount">
        <div class="space"></div>
        <div id="titr2"> تخفیف های ویژه</div>
        <div class="item">
            <div class="row">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-compact-left btn2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                  </svg>
                <div class="items">
                    <img src="images/flower16.jpg" alt="">
                    <div class="item-detail">
                        <h3>گل سوسن</h3>
                        <div class="price">
                          <a href="#" class="now">140,000<br><span class="rial">تومان</span></a>
                          <a class="space">|</a>
                          <a href="#" class="befor">160,000<br><span class="rial">تومان</span></a>  
                        </div>
                        <button class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </button>
                        <button class="like">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>
                        </button>
                    </div>
                    
                </div>


                <div class="items">
                    <img src="images/flower2.jpg" alt="">
                    <div class="item-detail">
                        <h3>گل سوسن</h3>
                        <div class="price">
                          <a href="#" class="now">140,000<br><span class="rial">تومان</span></a>
                          <a class="space">|</a>
                          <a href="#" class="befor">160,000<br><span class="rial">تومان</span></a>  
                        </div>
                        <button class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </button>
                        <button class="like">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>
                        </button>
                    </div>
                </div>
                <div class="items">
                    <img src="images/flower3.jpg" alt="">
                    <div class="item-detail">
                        <h3>گل سوسن</h3>
                        <div class="price">
                          <a href="#" class="now">140,000<br><span class="rial">تومان</span></a>
                          <a class="space">|</a>
                          <a href="#" class="befor">160,000<br><span class="rial">تومان</span></a>  
                        </div>
                        <button class="buy">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </button>
                        <button class="like">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>
                        </button>
                    </div>
                    
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-compact-right btn1" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                </svg>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D2D1F1" fill-opacity="1" d="M0,96L48,80C96,64,192,32,288,53.3C384,75,480,149,576,170.7C672,192,768,160,864,128C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div> -->
  <carousel></carousel>
   </div>

    
</template>

<script>
import Navbar from '@/components/NavbarSec.vue'
import Carousel from '@/components/secondcarousel/CarouselMain.vue'

export default {
  name:'NavbarView',
  components:{
    Navbar,
    Carousel
  },
  data(){
    return{ 
      // count:0,
    card:[{
     title:"گل سوسن",
    price:'140,000',
    bprice:'160,000',
    class:'bi bi-cart-plus',
    secClass: 'bi bi-cart-check-fill',
    Buy:true,
    Like:true
    },

    {
        title:"گل لاله",
        price:'150,000',
      bprice:'170,000',
      class:'bi bi-cart-plus',
      Buy:true,
      secClass: 'bi bi-cart-check-fill',
      Like:true
    },
    {
        title:"گل لیلیوم",
      price:'170,000',
    bprice:'190,000',
    class:'bi bi-cart-plus',
    Buy:true,
    secClass: 'bi bi-cart-check-fill',
    Like:true
  },
    {
        title:"گل بنفشه",
        price:'130,000',
      bprice:'145,000',
    class:'bi bi-cart-plus',
    Buy:true,
    Like:true,
    secClass: 'bi bi-cart-check-fill'
  },
    {
        title:"گل پروانه",
        price:'140,000',
      bprice:'155,000',
    class:'bi bi-cart-plus',
    Buy:true,
    secClass: 'bi bi-cart-check-fill',
    Like:true},
    {
     title:"گل  عقاقیا",
    price:'145,000',
    bprice:'162,000',
    class:'bi bi-cart-plus',
    secClass: 'bi bi-cart-check-fill',
    Like:true,
    Buy:true
    },
    {
        title:"گل آفتاب گردون",
        price:'140,000',
      bprice:'160,000',
      class:'bi bi-cart-plus',
      Like:true,
      secClass: 'bi bi-cart-check-fill',
    Buy:true
    },
    {
        title:"گل شبدر",
      price:'160,000',
    bprice:'180,000',
    class:'bi bi-cart-plus',
    secClass: 'bi bi-cart-check-fill',
    Buy:true,
    Like:true
  },
    {
        title:"گل سنبل",
        price:'110,000',
      bprice:'150,000',
    class:'bi bi-cart-plus',
    secClass: 'bi bi-cart-check-fill',
    Buy:true,
    Like:true
  },
    {
        title:"گل زنبق",
        price:'140,000',
      bprice:'155,000',
    class:'bi bi-cart-plus',
    Buy:true,
    Like:true,
    secClass: 'bi bi-cart-check-fill'}
  ],
  giftItem:[{
    src:require('../assets/images/box1-removebg-preview.png')
  },
  {
    src:require('../assets/images/box2-removebg-preview.png')
  },
  {
    src:require('../assets/images/box3-removebg-preview.png')
  },
  {
    src:require('../assets/images/box4-removebg-preview.png')
  },
  {
    src:require('../assets/images/box5-removebg-preview.png')
  }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro-sec{
    display: flex;
}
.intro-sec .intro-txt{
    margin-top: 5%;
}
.rotate{
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    background-color: #FF0000;
    border-color: #FF0000;
    border-radius: 150px !important;
    width: 76px;
    height: 6px;
    position: relative;
    left: 350px;
    top:62px;
    }
.intro-sec .intro-txt h1{
    width: 280px;
    margin-right: 84px;
    font-weight: bold;
}
.intro-sec .intro-txt .intro-p{
    color: #585757;
    margin-top: 45px;
    margin-right: 80px;
    width: 80%;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.intro-sec .intro-txt .p2{
    width: 85% !important;
}
.top-sellers{
    background-color: #D2D1F1;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
}

.best-sell .continue p{
    width: 100%;
    background-color: #D2D1F1;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-right: 50px;
    padding-bottom: 4px;
    color: #7D0371;
    font-size: 1.4rem;
}
.best-sell .top-sellers .item{
    padding-top: 30px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
}
.best-sell .top-sellers .item img{
    width: 210px;
    height: 260px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    margin-bottom: 0px;
    padding-bottom: 0px;
}
.best-sell .top-sellers .item-detail{
    position: relative;
    bottom: 30px;
    background-color: #fff;
    margin-top: 0px;
    padding-top: 0px;
    width: 210px;
    height: 108px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}
.best-sell .top-sellers .item-detail h3{
    padding-left: 30%;
    padding-top: 10px;
}
.best-sell .top-sellers .item-detail .price{
    display:inline-flex;
    padding-left: 10px;
}
.best-sell .top-sellers .item-detail .price a{
    line-height: 8.5px;
}
.best-sell .top-sellers .item-detail .price .now{
    color: #000000;
    font-weight: bolder;
    text-decoration: none;
}
.best-sell .top-sellers .item-detail .price .now .rial{
    position: relative;
    right: 8px;
    font-size: .6rem;
    font-weight: bold;
}
.best-sell .top-sellers .item-detail .price .space{
    color: #797979;
}
.best-sell .top-sellers .item-detail .price .befor{
    color: #FF0000;
    font-size: .8rem;
    text-decoration: line-through;
    padding-top: 2px;
}
.best-sell .top-sellers .item-detail .price .befor .rial{
    font-size: .6rem;
    text-decoration: none !important;
}
.best-sell .top-sellers .item-detail .buy{
    background-color: #f0fff1;
    border-width: 1px;
    border-color:#7D0371;
    border-radius: 9px;
    color: #7D0371;
    position: absolute;
    left: 135px;
    top: 60px;
    width: 28px;
    height: 28px;
}
.best-sell .top-sellers .item-detail .like{
    background-color: #f0fff1;
    border-width: 1px;
    border-color:#7D0371;
    border-radius: 9px;
    color: #7D0371;
    /* position:static; */
    position: absolute;
    left:168px;
    bottom: 20px;
    width: 28px;
    height: 28px;
}
#titr{
    position: relative;
    top:42px;
    left: 72%;
    color: #FF0000;
    width: 280px;
    height: 60px;
    background-color: #D2D1F1;
    font-size: 2.6rem;
    font-weight: bold;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    padding-left: 40px;
    border-bottom-color: #7D0371;
    border-bottom-width: 1px;
    border-bottom-style:solid;
}

.top-sellers-footer{
  background-color: #D2D1F1;
}
.top-sellers-footer .line{
    width: 100%;
} 
.giftBox{
    display: grid;
    grid-template-columns: auto auto;
    /* height: 850px; */
    margin-top: 50px;
}
.slideshow{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.carusel{
    width: 45rem;
    height: 42rem;
    border: .2rem dashed #eebe97;
    border-radius: 100%;
    display: flex;
    position: relative;
    right:50%;
    justify-content: center;
    align-items: center;
    flex-shrink:0;
    transition: rotate 1s;
}
.slide {
    width: 15rem;
    height: 15rem;
    position: absolute;
}
.slide:nth-child(1) {
    bottom: -9rem;
    left:27rem;
}
.slide:nth-child(2) {
    top:-3rem;
    left: 27rem;
}
.slide:nth-child(3) {
    top: 5rem;
    right: -6.5rem;
}
.slide:nth-child(4) {
    top:17rem;
    left:41rem;
}
.slide:nth-child(5) {
    top:28rem;
    left:37rem;
}
.slide:nth-child(1) img{
    height: 11rem;
    bottom: 35px;
    left:2px;
}
.slide:nth-child(2) img{
    height: 9rem;
}
.slide:nth-child(3) img{
    width: 7.5rem;
    height: 10.5rem;
    left:10px;
    bottom: 25px;
}
.slide:nth-child(4) img{
    width: 8rem;
    height: 10rem;
    bottom: 30px;
}
.slide:nth-child(5) img{
    height: 10rem;
    bottom: 40px;
}

.slide .circleback{
    width: 8rem;
    height: 8rem;
    background-color: #9A6BA9;
    border-radius: 80%;
}
.slide img {
    width: 8rem;
    height: 11rem;
    transition: transform 0.5s;
    position: relative;
    bottom: 5px;
}
.giftBox .gift-detail{
    margin-top: 80px;
    margin-right: 50px;
}
.giftBox .gift-detail h1{
    font-weight:bolder;
    font-size: 2.5rem;
    padding-left: 7%;
}
.giftBox .gift-detail .secondtitr{
    color: #FF0000;
    padding-left: 57%;
}
.rotate2{
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    background-color: #FF0000;
    border-color: #FF0000;
    border-radius: 150px !important;
    width: 120px;
    height: 10px;
    position: relative;
    left: 200px;
    top:92px;
    }
.giftBox .gift-detail .detail-box{
    background-color: #D2D1F1;
    width: 400px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}
.giftBox .gift-detail .detail-box p{
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 30px;
    padding-right: 30px;
    color: #535151;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}
</style>
