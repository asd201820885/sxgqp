import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);
import home from "./components/home";
import cgzs from "./components/cgzs";
import sjfw from "./components/sjfw";
import xtgl from "./components/xtgl";
import znfx from "./components/znfx";
import gqpaqdj from "./components/home/gqpaqdj";
import gqpgk from "./components/home/gqpgk";
import gqpsjwybhqx from "./components/home/gqpsjwybhqx";
import gqpssyj from "./components/home/gqpssyj";
import gqpswq from "./components/home/gqpswq";
import gqpxq from "./components/home/gqpxq";
import jsgk from "./components/home/jsgk";
import jrsb from "./components/home1/jrsb";
import jtgqpgk from "./components/home/jtgqpgk";
import swq from "./components/home/swq";
import tqgk from "./components/home/tqgk";
import content from "./components/content";
import xxgqpgk from "./components/home1/xxgqpgk";
import xxgqpxq from "./components/home1/xxgqpxq";
import zjj from "./components/home1/zjj";
import wybhqx from "./components/home1/wybhqx";
import tc from './components/tc';
const routes=[
  {path:'/home',component:home},
  {path:'/cgzs',component:cgzs},
  {path:'/sjfw',component:sjfw},
  {path:'/xtgl',component:xtgl},
  {path:'/znfx',component:znfx},
  {path:'/gqpxq',component:gqpxq},
  {path:'/gqpswq',component:gqpswq},
  {path:'/gqpssyj',component:gqpssyj},
  {path:'/gqpsjwybhqx',component:gqpsjwybhqx},
  {path:'/gqpgk',component:gqpgk},
  {path:'/gqpaqdj',component:gqpaqdj},
  {path:'/jtgqpgk',component:jtgqpgk},
  {path:'/jsgk',component:jsgk},
  {path:'/swq',component:swq},
  {path:'/tqgk',component:tqgk},
  {path:'/content/:',component:content},
  {path:'/tc',component:tc},
  {path:'/jrsb',component:jrsb},
  {path:'/xxgqpgk',component:xxgqpgk},
  {path:'/xxgqpxq',component:xxgqpxq},
  {path:'/zjj',component:zjj},
  {path:'/wybhqx',component:wybhqx},

  {path:'*',redirect:'home'}
]
const router=new VueRouter({routes})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
