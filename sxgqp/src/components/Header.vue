<template>
  <div >
    <!-- header-background -->
    <div id="u6" class="ax_default box_3">
      <div id="u6_div" class=""></div>
      <div id="u6_text" class="text " style="display:none; visibility: hidden">
        <p></p>
      </div>
    </div>
    <!-- znfx -->
    <div id="u7" class="ax_default box_2">
      <div id="u7_div" class=""></div>
      <div id="u7_text" class="text ">
        <p><router-link to="/znfx">智能分析</router-link></p>
      </div>
    </div>
    <!-- login -->
    <div id="u8" class="ax_default" data-left="1692" data-top="24" data-width="201" data-height="37">

      <!-- Unnamed (图片 ) -->
      <div id="u9" class="ax_default _图片">
        <img id="u9_img" class="img " src="src/assets/images/首页/u9.png"/>
        <div id="u9_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u10" class="ax_default label">
        <div id="u10_div" class=""></div>
        <div id="u10_text" class="text ">
          <p><router-link to="/xtgl">您好，admin</router-link></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u11" class="ax_default label">
        <div id="u11_div" class=""></div>
        <div id="u11_text" class="text ">
          <p><router-link to="/tc" style="text-decoration:underline ;">退出</router-link></p>
        </div>
      </div>
    </div>
    <!--  home(矩形) -->
    <div id="u12" class="ax_default box_2">

      <div id="u12_text" class="text ">
        <p><router-link to="/home">首页</router-link></p>
      </div>
    </div>
    <!-- sjfw(矩形) -->
    <div id="u13" class="ax_default box_2">
      <div id="u13_div" class=""></div>
      <div id="u13_text" class="text ">
        <p><router-link to="/sjfw">数据服务</router-link></p>
      </div>
    </div>
    <!-- title (图片 ) -->
    <div id="u19" class="ax_default image">
      <img id="u19_img" class="img " src="src/assets/images/首页/u19.png"/>
      <div id="u19_text" class="text " style="display:none; visibility: hidden">
        <p></p>
      </div>
    </div>
    <!-- title (矩形) -->
    <div id="u15" class="ax_default _一级标题">
      <div id="u15_div" class=""></div>
      <div id="u15_text" class="text ">
        <p><span>三峡工程湖北库区高切坡智能管控云平台</span></p>
      </div>
    </div>
    <!-- cgzs(矩形) -->
    <div id="u20" class="ax_default box_2">
      <div id="u20_div" class=""></div>
      <div id="u20_text" class="text ">
        <p><router-link to="/cgzs">成果管理</router-link></p>
      </div>
    </div>
    <!-- xtgl(矩形) -->
    <div id="u21" class="ax_default box_2">
      <div id="u21_div" class=""></div>
      <div id="u21_text" class="text ">
        <p><router-link to="/xtgl">系统管理</router-link></p>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>


</style>
