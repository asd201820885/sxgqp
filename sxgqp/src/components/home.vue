<template>

  <div id="base" class>
    <!-- home-background (矩形) -->
    <div id="u14" class="ax_default box_3">
      <div id="u14_div" class=""></div>
      <div id="u14_text" class="text " style="display:none; visibility: hidden">
        <p></p>
      </div>
    </div>
    <v-zjj  ></v-zjj>
    <!-- 今日速报 (矩形) -->
    <v-jrsb ></v-jrsb>
    <!--第三组的home组件-->
    <div v-show="view[2].view3" v-model="view[2].view3">
      <v-xxgqpgk></v-xxgqpgk>
      <v-wybhqx></v-wybhqx>
      <v-xxgqpxq></v-xxgqpxq>
    </div>
    <!--第二组的home组价-->
    <div>

    </div>
    <!--第一组的home组件-->
    <div v-show="view[0].view1" v-model="view[0].view1">
      <!-- 湖北库区高切坡概况 (矩形) -->
      <v-gqpgk></v-gqpgk>

      <!-- 降水概况(矩形) -->
      <v-jsgk ></v-jsgk>

      <!-- 高切坡实时预警 (矩形) -->
      <v-gqpssyj ></v-gqpssyj>

      <!-- 高切坡安全等级 (矩形) -->
      <v-gqpaqdj ></v-gqpaqdj>

      <!-- 三峡库区水位区 (矩形) -->
      <v-swq></v-swq>
    </div>





    <router-view></router-view>
  </div>

</template>

<script >

    import gqpaqdj from "./home/gqpaqdj";
    import gqpgk from "./home/gqpgk";
    import gqpsjwybhqx from "./home/gqpsjwybhqx";
    import gqpssyj from "./home/gqpssyj";
    import gqpswq from "./home/gqpswq";
    import gqpxq from "./home/gqpxq";

    import jsgk from "./home/jsgk";
    import jtgqpgk from "./home/jtgqpgk";
    import swq from "./home/swq";
    import tqgk from "./home/tqgk";

    import wybhqx from "./home1/wybhqx";
    import xxgqpxq from "./home1/xxgqpxq";
    import jrsb from "./home1/jrsb";
    import xxgqpgk from "./home1/xxgqpgk";
    import zjj from "./home1/zjj";
    import VueEvent from "../model/vueevent";
    export default {
        name: "home",
        data() {
            return {
                msg:'asd',
                view:[
                    {
                        view1:true,
                    },
                    {
                        view2:false,

                    },
                    {
                        view3:false,
                    }
                ],



            }
        },
        methods:{
            //接受zjj传过来的数据
            getdata(){
                VueEvent.$on('zjj-to',(data)=>{
                    this.view[0].view1=data[0].view1;
                    this.view[1].view2=data[1].view2;
                    this.view[2].view3=data[2].view3;
                    console.log(data);

                });
            }

        },mounted(){
            this.getdata();
        },
        components:{
            'v-gqpaqdj':gqpaqdj,
            'v-gqpgk':gqpgk,
            'v-gqpsjwybhqx':gqpsjwybhqx,
            'v-gqpssyj':gqpssyj,
            'v-gqpswq':gqpswq,
            'v-gqpxq':gqpxq,
            'v-jsgk':jsgk,
            'v-jtgqpgk':jtgqpgk,
            'v-swq':swq,
            'v-tqgk':tqgk,

            'v-xxgqpxq':xxgqpxq,
            'v-jrsb':jrsb,
            'v-wybhqx':wybhqx,
            'v-zjj':zjj,
            'v-xxgqpgk':xxgqpgk

        }
    }
</script>

<style scoped>


</style>
