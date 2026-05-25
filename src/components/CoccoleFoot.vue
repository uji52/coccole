<template>
  <footer>
    <div id="fh5co-footer">
      <div class="container">
        <div class="row row-padded">
          <div class="col-md-12 text-center">
            <p class="to-animate">&copy; 2022 Coccole.</p>
            <p class="text-center to-animate">
              <a href="#" class="js-gotop"> Go To Top </a>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <ul class="fh5co-social">
              <li class="to-animate-2">
                <a href="https://Instagram.com/coccole0909">
                  <FontAwesome
                    :icon="{ prefix: 'fab', iconName: 'instagram' }"
                  />
                </a>
              </li>
              <li class="to-animate-2">
                <a href="https://page.line.me/?accountId=834awbfw">
                  <FontAwesome :icon="{ prefix: 'fab', iconName: 'line' }" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CoccoleFoot',
  props: {
    msg: {
      type: String,
      required: true,
      default: 'Message',
    },
  },
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
