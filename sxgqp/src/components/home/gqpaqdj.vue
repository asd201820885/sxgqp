<template>
<!--高切坡安全等级-->
  <div>
    <div id="u37" class="ax_default box_2">
      <img id="u37_img" class="img " src="src/assets/images/首页/u37.svg">
      <div id="u37_text" class="text " style="display:none; visibility: hidden">
        <p></p>
      </div>
    </div>
    <!-- title(矩形) -->
    <div id="u38" class="ax_default box_2">
      <img id="u38_img" class="img " src="src/assets/images/首页/u38.svg">
      <div id="u38_text" class="text ">
        <p><span>&nbsp;&nbsp; &nbsp; 高切坡安全等级</span></p>
      </div>
    </div>
    <!-- 详情(矩形) -->
    <div id="u39" class="ax_default label">
      <div id="u39_div" class=""></div>
      <div id="u39_text" class="text ">
        <p><router-link to="/content" style="text-decoration:underline ;">详情</router-link></p>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "gqpaqdj"
    }
</script>

<style scoped>

</style>
