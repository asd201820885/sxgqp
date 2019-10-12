<template>
  <div>
    <!--高切坡概况-->

      <!-- background (矩形) -->
      <div id="u23" class="ax_default box_2">
        <img id="u23_img" class="img " src="src/assets/images/首页/u23.svg"/>
        <div id="u23_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>
    <!-- title (矩形) -->
      <div id="u24" class="ax_default box_2">
        <img id="u24_img" class="img " src="src/assets/images/首页/u24.svg">
        <div id="u24_text" class="text ">
          <p><span>&nbsp;&nbsp; &nbsp; 湖北库区高切坡概况</span></p>
        </div>
      </div>
    <!-- 范围(矩形) -->
    <div id="u29" class="ax_default label">
      <div id="u29_div" class=""></div>
      <div id="u29_text" class="text ">
        <p><span>范围：宜昌（{{this.iet}})</span></p>
      </div>
    </div>
    <!-- 高切坡数量 (矩形) -->
    <div id="u30" class="ax_default label">
      <div id="u30_div" class=""></div>
      <div id="u30_text" class="text ">
        <p><span>高切坡数量：&nbsp;&nbsp; 234</span></p>
      </div>
    </div>
    <!-- 主要监测手段(矩形) -->
    <div id="u42" class="ax_default label">
      <div id="u42_div" class=""></div>
      <div id="u42_text" class="text ">
        <p><span>主要监测手段：位移监测、群测群防、声发射</span></p>
      </div>
    </div>
    <!--群测群防数量 (矩形) -->
    <div id="u46" classthis="ax_default label">
      <div id="u46_div" class=""></div>
      <div id="u46_text" class="text ">
        <p><span>群测群防数量：&nbsp;&nbsp; 235&nbsp; &nbsp; </span></p>
      </div>
    </div>
    <!-- 有专业监测数量 (矩形) -->
    <div id="u47" class="ax_default label">
      <div id="u47_div" class=""></div>
      <div id="u47_text" class="text ">
        <p><span>有专业监测数量：&nbsp;&nbsp; 121</span></p>
      </div>
    </div>
    <!-- 有变形迹象数量(矩形) -->
    <div id="u53" class="ax_default label">
      <div id="u53_div" class=""></div>
      <div id="u53_text" class="text ">
        <p><span>有变形迹象数量：&nbsp;&nbsp; 135</span></p>
      </div>
    </div>




  </div>
</template>

<script>
    export default {
        name: "hbgqpgk",
        data(){
            return{
                msg:'',
                iet:'yichan'
            }
        }
    }
</script>

<style scoped>

</style>
