<template>
  <div>
    <div id="u150" class="ax_default box_2" style="left: 28px; top: 111px;">
      <img id="u150_img" class="img " src="src/assets/images/首页/u23.svg">
      <div id="u150_text" class="text " style="display:none; visibility: hidden">
        <p></p>
      </div>
    </div>
    <div id="u151" class="ax_default box_2" style="left: 28px; top: 111px;">
      <img id="u151_img" class="img " src="src/assets/images/首页/u24.svg">
      <div id="u151_text" class="text ">
        <p><span>从中间件传过来的值（xx高切坡）概况</span></p>
      </div>
    </div>
    <div id="u169" class="ax_default label" style="left: 57px; top: 170px;">
      <div id="u169_div" class=""></div>
      <div id="u169_text" class="text ">
        <p v-for="item in list" v-if="item.aid==name"><span>高切坡名称：{{item.catid}}</span></p>
      </div>
    </div>
    <div id="u170" class="ax_default label" style="left: 245px; top: 170px;">
      <div id="u170_div" class=""></div>
      <div id="u170_text" class="text ">
        <p v-for="item in list" v-if="item.aid==name"><span>安全等级：{{item.catid}}</span></p>
      </div>
    </div>
    <div id="u171" class="ax_default label" style="left: 57px; top: 204px;">
      <div id="u171_div" class=""></div>
      <div id="u171_text" class="text ">
        <p v-for="item in list" v-if="item.aid==name"><span>经度坐标：{{item.catid}}</span></p>
      </div>
    </div>
    <div id="u172" class="ax_default label" style="left: 57px; top: 238px;">
      <div id="u172_div" class=""></div>
      <div id="u172_text" class="text ">
        <p v-for="item in list" v-if="item.aid==name"><span>地理位置：{{item.catid}}</span></p>
      </div>
    </div>
    <div id="u173" class="ax_default label" style="left: 245px; top: 204px;">
      <div id="u173_div" class=""></div>
      <div id="u173_text" class="text ">
        <p v-for="item in list" v-if="item.aid==name"><span>纬度坐标：{{item.catid}}</span></p>
      </div>
    </div>
    <div id="u174" class="ax_default label" style="left: 57px; top: 272px;">
      <div id="u174_div" class=""></div>
      <div id="u174_text" class="text ">
        <p v-for="item in list" v-if="item.aid==name"><span>最大坡高：{{item.catid}}</span></p>
      </div>
    </div>
    <div id="u175" class="ax_default label" style="left: 245px; top: 272px;">
      <div id="u175_div" class=""></div>
      <div id="u175_text" class="text ">
        <p v-for="item in list" v-if="item.aid==name"><span>防治措施：{{item.catid}}</span></p>
      </div>
    </div>
    <div id="u176" class="ax_default label" style="left: 57px; top: 306px;">
      <div id="u176_div" class=""></div>
      <div id="u176_text" class="text ">
        <p v-for="item in list" v-if="item.aid==name"><span>面积：{{item.catid}}</span></p>
      </div>
    </div>
    <div id="u177" class="ax_default label" style="left: 245px; top: 306px;">
      <div id="u177_div" class=""></div>
      <div id="u177_text" class="text ">
        <p v-for="item in list" v-if="item.aid==name"><span>有无变形迹象：{{item.catid}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
    import VueEvent from "../../model/vueevent"
    export default {
        name: "xxgqpgk",
        data(){
            return{
                msg:'',
                name:'499',
                list:[]
            }
        },methods:{requestData(){
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';

        this.$http.get(api).then((response)=> {
            this.list=response.body.result;
        },function (err) {
            console.log(err);
        })
    }}, mounted() {
            this.requestData();
            VueEvent.$on('zjj-to', (data)=>{
                console.log(data);
                this.name=data[3].gqpmc;
                //localStorage.setItem(this.name);


            });


        }
    }
</script>

<style scoped>

</style>
