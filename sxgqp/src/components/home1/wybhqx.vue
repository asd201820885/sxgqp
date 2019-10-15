<template>
<!--具体高切坡的位移变化-->
  <div>
    <div id="u152" class="ax_default box_2" style="left: 28px; top: 360px;">
      <img id="u152_img" class="img " src="src/assets/images/首页/u25.svg">
      <div id="u152_text" class="text " style="display:none; visibility: hidden">
        <p></p>
      </div>
    </div>
    <div id="u153" class="ax_default box_2" style="left: 28px; top: 360px;">
      <img id="u153_img" class="img " src="src/assets/images/首页/u24.svg">
        <div id="u153_text" class="text ">
        <p><span>&nbsp;&nbsp; &nbsp; XXX高切坡时间-位移变化曲线</span></p>
      </div>
    </div>
    <div id="u156" class="ax_default label" style="left: 408px; top: 371px;">
      <div id="u156_div" class=""></div>
      <div id="u156_text" class="text ">
        <p><span style="text-decoration:underline ;">详情</span></p>
      </div>
    </div>



  </div>
</template>

<script>
  import VueEvent from "../../model/vueevent";
  import echarts from 'echarts';
    export default {
        name: "wybhqx",
        data(){return{
            list:[],

        }},methods:{
            //绘折线图
            hutu(){
                this.chartLine = echarts.init(document.getElementById('u152'));

                // 指定图表的配置项和数据
                var option = {
                    backgroundColor: "#333333",
                    xAxis: {
                        type: 'category',
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                        axisLine: {
                            lineStyle: {
                                color: '#ffffff'
                            }
                        },


                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#ffffff',
                            }
                        }},
                        series: [{
                            data: [2,5,5, 6, 8, 12, 15,20,21,21,27,30],
                            type: 'line',
                            lineStyle: {                // 线条样式 => 必须使用normal属性
                                normal: {
                                    color: '#38B0DE',
                                }
                            },
                        }],

                    };


                // 使用刚指定的配置项和数据显示图表。
                this.chartLine.setOption(option);


            },
            requestData(){
                var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                this.$http.get(api).then((response)=>{
                   this.list=response.body.result;
                },(err)=>{
                    console.log(err);
                })
            },
            //zjj组件传值过来
           senddata(){
               VueEvent.$on('zjj-to', (data)=>{
                   console.log(data);
                   this.name=data;
                   //localStorage.setItem(this.name);


               });
           },



        },
        mounted() {
            this.hutu();
            this.requestData();
            this.senddata();
        }
    }
</script>

<style scoped>

</style>
