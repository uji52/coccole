<template>
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
              Coccole
            </h1>
            <h2 class="to-animate">
              パンやさん
            </h2>
          </div>
        </div>
      </div>
      <ul class="slides">
        <li
          style="background-image: url(images/slide_1.jpg);"
          data-stellar-background-ratio="0.5"
        />
        <li
          style="background-image: url(images/slide_2.jpg);"
          data-stellar-background-ratio="0.5"
        />
        <li
          style="background-image: url(images/slide_3.jpg);"
          data-stellar-background-ratio="0.5"
        />
      </ul>
    </div>
  </div>
  <div class="js-sticky">
    <div class="fh5co-main-nav">
      <div class="container-fluid">
        <div class="fh5co-menu-1">
          <a
            href="#"
            data-nav-section="home"
          >Home</a>
          <a
            href="#"
            data-nav-section="about"
          >About</a>
          <a
            href="#"
            data-nav-section="features"
          >Features</a>
        </div>
        <div class="fh5co-logo">
          <a href="index.html">foodee</a>
        </div>
        <div class="fh5co-menu-2">
          <a
            href="#"
            data-nav-section="menu"
          >Menu</a>
          <a
            href="#"
            data-nav-section="events"
          >Events</a>
          <a
            href="#"
            data-nav-section="reservation"
          >Reservation</a>
        </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
