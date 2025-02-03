<template>
  <div id="fh5co-container">
    <div
      id="fh5co-home"
      class="js-fullheight"
      data-section="home"
    >
      <div class="flexslider">
        <div class="fh5co-overlay" />
        <div class="fh5co-text">
          <div class="container">
            <div class="row">
              <h1 class="to-animate">
                <img
                  src="@/assets/images/logo/Coccole_logo-06.png"
                  class="img-responsive"
                  alt="Coccole"
                  role="img"
                  aria-label="Coccoleロゴ"                  
                >
              </h1>
            </div>
          </div>
        </div>
        <ul class="slides">
          <li :style="{ backgroundImage: `url(${images.shop003})`, backgroundPosition: 'center' }" />
          <li :style="{ backgroundImage: `url(${images.shop002})`, backgroundPosition: 'center' }" />
          <li :style="{ backgroundImage: `url(${images.pan002})`, backgroundPosition: 'center' }" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import shop003 from '@/assets/images/shop/Shop_003.jpg';
import shop002 from '@/assets/images/shop/Shop_002.jpg';
import pan002 from '@/assets/images/pan/002.jpg';

export default {
  name: 'CoccoleHead',
  props: {
    msg: {
      type: String,
      default: 'Message'
    }
  },
  data() {
    return {
      images: {
        shop003,
        shop002,
        pan002
      }
    };
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
