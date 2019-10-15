<template>
  <div id="110">
    <div id="u17" class="ax_default box_2">
      <div id="u17_div" class=""></div>
      <div id="u17_text" class="text ">
        <p>今日速报</p>
      </div>
    </div>
    <div id="u18" class="ax_default box_2">
      <div id="u18_div" class=""></div>
      <div id="u18_text" class="text ">

        <p v-if="list!=''">&nbsp; {{this.list[0].title}} </p>
      </div>
    </div>

  </div>
</template>

<script>

    export default {
        name: "jrsb",
        data(){
            return{
                msg:'nishi',
                animate:false,
                list:[],

            }

        }
        ,created(){
            setInterval(this.scroll,3000)
        },
        methods: {
            scroll(){
                this.animate=true; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
                setTimeout(()=>{ // 这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
                    this.list.push(this.list[0]); // 将数组的第一个元素添加到数组的
                    this.list.shift(); //删除数组的第一个元素
                    this.animate=false; // margin-top 为0 的时候取消过渡动画，实现无缝滚动
                },500)
            },requestData(){
                var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';

                this.$http.get(api).then((response)=> {

                    this.list=response.body.result;
                    console.log(this.list[0]);
                },function (err) {
                    console.log(err);
                })
            }

        },mounted() {
            this.requestData();
        }
    }
</script>

<style scoped>
.ls{
  background: darkslategrey;
}
</style>
