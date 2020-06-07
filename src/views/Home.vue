<template>
  <div>
    <div id="header-wrapper">
      <i class="el-icon-link"></i>
      <a>DAIMS</a>
    </div>
    <create />
  </div>
</template>

<script>
// @ is an alias to /src
import create from '@/components/create.vue'

export default {
  name: 'Home',
  components: {
    create
  }
}
</script>
<style>

#header-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  margin: 30px 0 50px;
}
#header-wrapper a {
  font-size: 40px;
  font-family: "Roboto"
}
#header-wrapper i {
  font-size: 40px
}
</style>
