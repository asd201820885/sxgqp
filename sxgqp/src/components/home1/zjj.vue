<template>
  <div>

    <!-- 宜昌(四县区的) (图片 ) -->
    <div  v-show="view[0].view1" v-model="view[0].view1" style="cursor:pointer">
      <div id="u40" class="ax_default image" data-label="宜昌">
        <img id="u40_img" class="img " src="src/assets/images/首页/宜昌_u40.svg">
        <div id="u40_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>
      <!-- Unnamed (图片 ) -->
      <div id="u41" class="ax_default image" style="cursor: pointer;">
        <div v-on:mousedown="emitnews">
          <img id="u41_img" class="img " src="src/assets/images/首页/u41.png" tabindex="0">
          <div id="u41_text" class="text " style="display:none; visibility:hidden">

          </div>
        </div>
      </div>

    </div>
    <!-- 巴东 (图片 ) -->
    <div v-show="view[1].view2" v-model="view[1].view2" style="cursor:pointer">

      <div id="u89" class="ax_default image" data-label="巴东" style="cursor: pointer; left: 482px; top: 188px;">
        <img id="u89_img" class="img " src="src/assets/images/首页/巴东_u89.svg" tabindex="0">
        <div id="u89_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>
      <div id="u90" class="ax_default image" style="left: 800px; top: 209px;">
        <img id="u90_img" class="img " src="src/assets/images/首页/u90.png">
        <div id="u90_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>
      <div v-on:mousedown="emitnews1()">
        <div id="u91" class="ax_default marker" style="cursor: pointer; left: 973px; top: 365px;">
          <img id="u91_img" class="img " src="src/assets/images/首页/u91.svg" tabindex="0">
          <div id="u91_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>
      </div>
      <div id="u92" class="ax_default marker" style="left: 900px; top: 500px;">
        <img id="u92_img" class="img " src="src/assets/images/首页/u92.svg">
        <div id="u92_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>
      <div id="u93" class="ax_default marker" style="left: 979px; top: 625px;">
        <img id="u93_img" class="img " src="src/assets/images/首页/u92.svg">
        <div id="u93_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>
      <div id="u94" class="ax_default marker" style="left: 859px; top: 709px;">
        <img id="u94_img" class="img " src="src/assets/images/首页/u92.svg">
        <div id="u94_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>
      <div id="u95" class="ax_default box_2 ax_default_hidden" style="display: none; visibility: hidden; left: 487px; top: 194px;">
        <img id="u95_img" class="img " src="src/assets/images/首页/u95.svg">
        <div id="u95_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>
    </div>
    <!--三级图具体好切坡图-->
    <div v-show="view[2].view3" v-model="view[2].view3" style="cursor:pointer">
      <div id="u146" class="ax_default image" data-label="巴东" style="cursor: pointer; left: 482px; top: 188px;">
        <img id="u146_img" class="img " src="src/assets/images/首页/巴东_u89.svg" tabindex="0">
        <div id="u146_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>
      <div id="u147" class="ax_default image" style="left: 563px; top: 175px;">
        <img id="u147_img" class="img " src="src/assets/images/首页/u147.png">
        <div id="u147_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>
      <div id="u148" class="ax_default marker" style="cursor: pointer; left: 962px; top: 471px;">
        <img id="u148_img" class="img " src="src/assets/images/首页/u91.svg" tabindex="0">
        <div id="u148_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>
      <div id="u149" class="ax_default marker" style="left: 831px; top: 744px;">
        <img id="u149_img" class="img " src="src/assets/images/首页/u92.svg">
        <div id="u149_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

    </div>

    <div id="u119" class="ax_default" data-label="axhub-line-config" style="left: 2265px; top: 501px;">
      <script id="u119_script" type="axure-repeater-template" data-label="axhub-line-config">
            </script>

      <div id="u119-1" class="" style="width: 0px; height: 0px;">
      </div>
      <div id="u119-2" class="" style="width: 0px; height: 0px;">
      </div>
      <div id="u119-3" class="" style="width: 0px; height: 0px;">
      </div>
      <div id="u119-4" class="" style="width: 0px; height: 0px;">
      </div>
      <div id="u119-5" class="" style="width: 0px; height: 0px;">
      </div>
      <div id="u119-6" class="" style="width: 0px; height: 0px;">
      </div>
      <div id="u119-7" class="" style="width: 0px; height: 0px;">
      </div>
      <div id="u119-8" class="" style="width: 0px; height: 0px;">
      </div>
    </div>
    <br>
    <br>
    <br>


  </div>
</template>

<script>
    import VueEvent from "../../model/vueevent";
    export default {
        name: "zjj",
        data(){
            return{
                msg:'巴东县110区高切坡',
                title:'巴东县110区高切坡',
                view:[
                    {view1:true,},
                    {view2:false,},
                    {view3:false,},
                    {gqpmc:499}
                ],




            }
        },methods:{
            emitnews(){
                this.view[0].view1=false;
                this.view[1].view2=true;
                this.view[2].view3=false;
                VueEvent.$emit('zjj-to',this.view);//将数据广播形式传到兄弟组件中。

            },
            emitnews1(){
                this.view[0].view1=false;
                this.view[1].view2=false;
                this.view[2].view3=true;
                VueEvent.$emit('zjj-to',this.view);
            },changeb(){
                document.getElementById("lss").style.color="red";
            }
        }
    }
</script>

<style scoped>


</style>

