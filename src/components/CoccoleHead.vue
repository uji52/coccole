<template>
  <div id="fh5co-container">
    <div id="fh5co-home" class="js-fullheight" data-section="home">
      <div class="flexslider">
        <div class="fh5co-overlay"></div>
        <div class="fh5co-text">
          <div class="container">
            <div class="row">
              <h1 class="to-animate">
                <img src="@/assets/images/logo/Coccole_logo-06.png" class="img-responsive" alt="Coccole">
              </h1>
            </div>
          </div>
        </div>
        <ul class="slides">
          <li style="background-image: url(images/shop/Shop_003.jpg);background-position: center;" ></li>
          <li style="background-image: url(images/shop/Shop_002.jpg);background-position: center;"></li>
          <li style="background-image: url(images/pan/002.jpg);background-position: center;"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoccoleHead',
  props: {
    msg: {
      type: String,
      default: 'Message'
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
</style>
