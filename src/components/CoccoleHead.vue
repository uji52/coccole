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
          <li
            class="slide-image"
            :style="{ backgroundImage: `url(${images.shopExterior})` }"
            @error="(error) => handleImageError('店舗外観', error)"
          />
          <li
            class="slide-image"
            :style="{ backgroundImage: `url(${images.shopInterior})` }"
            @error="(error) => handleImageError('店舗内装', error)"
          />
          <li
            class="slide-image"
            :style="{ backgroundImage: `url(${images.sampleItem})` }"
            @error="(error) => handleImageError('サンプル商品', error)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import shopExterior  from '@/assets/images/shop/Shop_003.jpg';
import shopInterior from '@/assets/images/shop/Shop_002.jpg';
import sampleItem from '@/assets/images/pan/002.jpg';

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
        shopExterior,
        shopInterior,
        sampleItem,
      }
    };
  },
  methods: {
    handleImageError(imageName, error) {
      console.error(`画像「${imageName}」の読み込みに失敗しました:`, error);
    }
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
.slide-image {
  background-position: center;
  background-size: cover;
}
</style>
