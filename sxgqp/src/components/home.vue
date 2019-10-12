<template>

  <div id="base" class>
    <br>
    <br>
  <hr>
    <!-- home-background (矩形) -->
    <div id="u14" class="ax_default box_3">
      <div id="u14_div" class=""></div>
      <div id="u14_text" class="text " style="display:none; visibility: hidden">
        <p></p>
      </div>
    </div>
    <!-- jrsb (矩形) -->
    <div>
    <div id="u17" class="ax_default box_2">
      <div id="u17_div" class=""></div>
      <div id="u17_text" class="text ">
        <p>今日速报</p>
      </div>
    </div>
    <div id="u18" class="ax_default box_2">
      <div id="u18_div" class=""></div>
      <div id="u18_text" class="text ">
        <p><span>&nbsp;&nbsp; xxx县xxx区域发生xxxxxxxx预警</span></p>
      </div>
    </div>
    </div>

    <!-- 四个区域 (组合) -->
    <div id="u22" class="ax_default" data-label="四个区域" data-left="28" data-top="111" data-width="1857" data-height="900">

      <!-- 湖北库区高切坡概况 (矩形) -->
      <v-gqpgk></v-gqpgk>

      <!-- 降水概况(矩形) -->
      <v-jsgk></v-jsgk>

      <!-- 高切坡实时预警 (矩形) -->
      <v-gqpssyj></v-gqpssyj>

      <!-- 高切坡安全等级 (矩形) -->
      <v-gqpaqdj></v-gqpaqdj>

      <!-- 宜昌(四县区的) (图片 ) -->
      <div>
      <div id="u40" class="ax_default image" data-label="宜昌">
        <img id="u40_img" class="img " src="src/assets/images/首页/宜昌_u40.svg">
        <div id="u40_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>
      <!-- Unnamed (图片 ) -->
      <div id="u41" class="ax_default image" style="cursor: pointer;">
        <img id="u41_img" class="img " src="src/assets/images/首页/u41.png" tabindex="0">
        <div id="u41_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>
      </div>

      <!-- 三峡库区水位区 (矩形) -->
      <v-swq></v-swq>
      <!-- Line (组合) -->
      <div id="u80" class="ax_default" data-label="Line" data-left="34" data-top="744" data-width="406" data-height="252">

        <!-- axhub-line-config (中继器) -->
        <div id="u81" class="ax_default" data-label="axhub-line-config">
          <script id="u81_script" type="axure-repeater-template" data-label="axhub-line-config">
            </script>
          <div id="u81-1" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u81-2" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u81-3" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u81-4" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u81-5" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u81-6" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u81-7" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u81-8" class="" style="width: 0px; height: 0px;">
          </div>
        </div>

        <!-- axhub-line-data (中继器) -->
        <div id="u82" class="ax_default" data-label="axhub-line-data">
          <script id="u82_script" type="axure-repeater-template" data-label="axhub-line-data">
            </script>
          <div id="u82-1" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u82-2" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u82-3" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u82-4" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u82-5" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u82-6" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u82-7" class="" style="width: 0px; height: 0px;">
          </div>
        </div>

        <!-- axhub-line-chart (矩形) -->
        <div id="u83" class="ax_default box_1" data-label="axhub-line-chart"><div style="position:relative;"><canvas id="canvas_2" width="406" height="252" style="width: 406px; height: 252px;"></canvas><div class="g2-tooltip" style="position: absolute; visibility: hidden; white-space: nowrap; z-index: 8; transition: visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(255, 255, 255, 0.9); box-shadow: rgb(174, 174, 174) 0px 0px 10px; border-radius: 3px; color: rgb(87, 87, 87); font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, SimSun, sans-serif; line-height: 20px; padding: 10px 10px 6px;"><div class="g2-tooltip-title"></div><ul class="g2-tooltip-list"></ul></div></div></div>
      </div>
      <!-- Colum (组合) -->
      <div id="u84" class="ax_default" data-label="Colum" data-left="1456" data-top="659" data-width="415" data-height="335">

        <!-- axhub-column-config (中继器) -->
        <div id="u85" class="ax_default" data-label="axhub-column-config">
          <script id="u85_script" type="axure-repeater-template" data-label="axhub-column-config">
            </script>
          <div id="u85-1" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u85-2" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u85-3" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u85-4" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u85-5" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u85-6" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u85-7" class="" style="width: 0px; height: 0px;">
          </div>
        </div>

        <!-- axhub-column-data (中继器) -->
        <div id="u86" class="ax_default" data-label="axhub-column-data">
          <script id="u86_script" type="axure-repeater-template" data-label="axhub-column-data">
            </script>
          <div id="u86-1" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u86-2" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u86-3" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u86-4" class="" style="width: 0px; height: 0px;">
          </div>
        </div>

        <!-- axhub-column-chart (矩形) -->
        <div id="u87" class="ax_default box_1" data-label="axhub-column-chart"><div style="position:relative;"><canvas id="canvas_7" width="415" height="335" style="width: 415px; height: 335px;"></canvas><div class="g2-tooltip" style="position: absolute; visibility: hidden; white-space: nowrap; z-index: 8; transition: visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(255, 255, 255, 0.9); box-shadow: rgb(174, 174, 174) 0px 0px 10px; border-radius: 3px; color: rgb(87, 87, 87); font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, SimSun, sans-serif; line-height: 20px; padding: 10px 10px 6px;"><div class="g2-tooltip-title"></div><ul class="g2-tooltip-list"></ul></div></div></div>
      </div>

    </div>

    <!-- 巴东区域 (组合) -->
    <div id="u88" class="ax_default ax_default_hidden" data-label="巴东区域" style="display:none; visibility: hidden" data-left="28" data-top="111" data-width="1857" data-height="900">

      <!-- 巴东 (图片 ) -->
      <div id="u89" class="ax_default image" data-label="巴东" style="cursor: pointer;">
        <img id="u89_img" class="img " src="src/assets/images/首页/巴东_u89.svg" tabindex="0">
        <div id="u89_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (图片 ) -->
      <div id="u90" class="ax_default image">
        <img id="u90_img" class="img " src="src/assets/images/首页/u90.png">
        <div id="u90_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (水滴形) -->
      <div id="u91" class="ax_default marker" style="cursor: pointer;">
        <img id="u91_img" class="img " src="src/assets/images/首页/u91.svg" tabindex="0">
        <div id="u91_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (水滴形) -->
      <div id="u92" class="ax_default marker">
        <img id="u92_img" class="img " src="src/assets/images/首页/u92.svg">
        <div id="u92_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (水滴形) -->
      <div id="u93" class="ax_default marker">
        <img id="u93_img" class="img " src="src/assets/images/首页/u92.svg">
        <div id="u93_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (水滴形) -->
      <div id="u94" class="ax_default marker">
        <img id="u94_img" class="img " src="src/assets/images/首页/u92.svg">
        <div id="u94_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u95" class="ax_default box_2 ax_default_hidden" style="display:none; visibility: hidden">
        <img id="u95_img" class="img " src="src/assets/images/首页/u95.svg">
        <div id="u95_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u96" class="ax_default label ax_default_hidden" style="display:none; visibility: hidden">
        <div id="u96_div" class=""></div>
        <div id="u96_text" class="text ">
          <p><span>本区域高切坡总数为：&nbsp; 15个</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u97" class="ax_default label ax_default_hidden" style="display:none; visibility: hidden">
        <div id="u97_div" class=""></div>
        <div id="u97_text" class="text ">
          <p><span>目前发生预警的高切坡为：0个</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u98" class="ax_default box_2">
        <img id="u98_img" class="img " src="src/assets/images/首页/u23.svg">
        <div id="u98_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u99" class="ax_default box_2">
        <img id="u99_img" class="img " src="src/assets/images/首页/u24.svg">
        <div id="u99_text" class="text ">
          <p><span>&nbsp;&nbsp; &nbsp; 巴东县高切坡概况</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u100" class="ax_default box_2">
        <img id="u100_img" class="img " src="src/assets/images/首页/u25.svg">
        <div id="u100_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u101" class="ax_default box_2">
        <img id="u101_img" class="img " src="src/assets/images/首页/u24.svg">
        <div id="u101_text" class="text ">
          <p><span>&nbsp;&nbsp; &nbsp; 巴东县天气概况</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u102" class="ax_default box_2">
        <img id="u102_img" class="img " src="src/assets/images/首页/u27.svg">
        <div id="u102_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u103" class="ax_default box_2">
        <img id="u103_img" class="img " src="src/assets/images/首页/u28.svg">
        <div id="u103_text" class="text ">
          <p><span>&nbsp;&nbsp; &nbsp; 巴东县高切坡实时预警</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u104" class="ax_default label">
        <div id="u104_div" class=""></div>
        <div id="u104_text" class="text ">
          <p><span>范围：宜昌（巴东县）</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u105" class="ax_default label">
        <div id="u105_div" class=""></div>
        <div id="u105_text" class="text ">
          <p><span>高切坡数量：&nbsp;&nbsp; 234</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u106" class="ax_default label">
        <div id="u106_div" class=""></div>
        <div id="u106_text" class="text ">
          <p><span style="text-decoration:underline ;">详情</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u107" class="ax_default label">
        <div id="u107_div" class=""></div>
        <div id="u107_text" class="text ">
          <p><span style="text-decoration:underline ;">详情</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u108" class="ax_default box_2">
        <img id="u108_img" class="img " src="src/assets/images/首页/u37.svg">
        <div id="u108_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u109" class="ax_default box_2">
        <img id="u109_img" class="img " src="src/assets/images/首页/u38.svg">
        <div id="u109_text" class="text ">
          <p><span>&nbsp;&nbsp; &nbsp; 巴东县高切坡安全等级</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u110" class="ax_default label">
        <div id="u110_div" class=""></div>
        <div id="u110_text" class="text ">
          <p><span style="text-decoration:underline ;">详情</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u111" class="ax_default label">
        <div id="u111_div" class=""></div>
        <div id="u111_text" class="text ">
          <p><span>主要监测手段：位移监测、群测群防、声发射</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u112" class="ax_default box_2">
        <img id="u112_img" class="img " src="src/assets/images/首页/u43.svg">
        <div id="u112_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u113" class="ax_default box_2">
        <img id="u113_img" class="img " src="src/assets/images/首页/u24.svg">
        <div id="u113_text" class="text ">
          <p><span>&nbsp;&nbsp; &nbsp; 巴东县水位区</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u114" class="ax_default label">
        <div id="u114_div" class=""></div>
        <div id="u114_text" class="text ">
          <p><span style="text-decoration:underline ;">详情</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u115" class="ax_default label">
        <div id="u115_div" class=""></div>
        <div id="u115_text" class="text ">
          <p><span>群测群防数量：&nbsp;&nbsp; 235&nbsp; &nbsp; </span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u116" class="ax_default label">
        <div id="u116_div" class=""></div>
        <div id="u116_text" class="text ">
          <p><span>有专业监测数量：&nbsp;&nbsp; 121</span></p>
        </div>
      </div>

      <!-- Unnamed (下拉列表) -->
      <div id="u117" class="ax_default droplist" style="cursor: pointer;">
        <div id="u117_div" class=""></div>
        <select id="u117_input" class="u117_input" tabindex="0">
          <option class="u117_input_option" selected="" value="按时间">按时间</option>
        </select>
      </div>

      <!-- 预警时间 (组合) -->
      <div id="u118" class="ax_default" data-label="预警时间" data-left="0" data-top="0" data-width="0" data-height="0">

        <!-- axhub-line-config (中继器) -->
        <div id="u119" class="ax_default" data-label="axhub-line-config">
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

        <!-- axhub-line-data (中继器) -->
        <div id="u120" class="ax_default" data-label="axhub-line-data">
          <script id="u120_script" type="axure-repeater-template" data-label="axhub-line-data">
            </script>
          <div id="u120-1" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u120-2" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u120-3" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u120-4" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u120-5" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u120-6" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u120-7" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u120-8" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u120-9" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u120-10" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u120-11" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u120-12" class="" style="width: 0px; height: 0px;">
          </div>
        </div>

        <!-- axhub-line-chart (矩形) -->
        <div id="u121" class="ax_default box_1" data-label="axhub-line-chart"><div style="position:relative;"><canvas id="canvas_3" width="418" height="315" style="width: 418px; height: 315px;"></canvas><div class="g2-tooltip" style="position: absolute; visibility: hidden; white-space: nowrap; z-index: 8; transition: visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(255, 255, 255, 0.9); box-shadow: rgb(174, 174, 174) 0px 0px 10px; border-radius: 3px; color: rgb(87, 87, 87); font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, SimSun, sans-serif; line-height: 20px; padding: 10px 10px 6px;"><div class="g2-tooltip-title"></div><ul class="g2-tooltip-list"></ul></div></div></div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u122" class="ax_default label">
        <div id="u122_div" class=""></div>
        <div id="u122_text" class="text ">
          <p><span>有变形迹象数量：&nbsp;&nbsp; 135</span></p>
        </div>
      </div>

      <!-- Unnamed (表格) -->
      <div id="u123" class="ax_default">

        <!-- Unnamed (单元格) -->
        <div id="u124" class="ax_default table_cell">
          <img id="u124_img" class="img " src="src/assets/images/首页/u124.png">
          <div id="u124_text" class="text ">
            <p><span>体感温度</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u125" class="ax_default table_cell">
          <img id="u125_img" class="img " src="src/assets/images/首页/u125.png">
          <div id="u125_text" class="text ">
            <p><span>气压值</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u126" class="ax_default table_cell">
          <img id="u126_img" class="img " src="src/assets/images/首页/u57.png">
          <div id="u126_text" class="text ">
            <p><span>相对湿度</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u127" class="ax_default table_cell">
          <img id="u127_img" class="img " src="src/assets/images/首页/u57.png">
          <div id="u127_text" class="text ">
            <p><span>风力情况</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u128" class="ax_default table_cell">
          <img id="u128_img" class="img " src="src/assets/images/首页/u59.png">
          <div id="u128_text" class="text ">
            <p><span>风速大小</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u129" class="ax_default table_cell">
          <img id="u129_img" class="img " src="src/assets/images/首页/u129.png">
          <div id="u129_text" class="text ">
            <p><span>15-21℃</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u130" class="ax_default table_cell">
          <img id="u130_img" class="img " src="src/assets/images/首页/u130.png">
          <div id="u130_text" class="text ">
            <p><span>1011 hPa</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u131" class="ax_default table_cell">
          <img id="u131_img" class="img " src="src/assets/images/首页/u131.png">
          <div id="u131_text" class="text ">
            <p><span>45%</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u132" class="ax_default table_cell">
          <img id="u132_img" class="img " src="src/assets/images/首页/u131.png">
          <div id="u132_text" class="text ">
            <p><span>东北风2级</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u133" class="ax_default table_cell">
          <img id="u133_img" class="img " src="src/assets/images/首页/u133.png">
          <div id="u133_text" class="text ">
            <p><span>10km/h</span></p>
          </div>
        </div>
      </div>

      <!-- Line (组合) -->
      <div id="u134" class="ax_default" data-label="Line" data-left="0" data-top="0" data-width="0" data-height="0">

        <!-- axhub-line-config (中继器) -->
        <div id="u135" class="ax_default" data-label="axhub-line-config">
          <script id="u135_script" type="axure-repeater-template" data-label="axhub-line-config">
            </script>
          <div id="u135-1" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u135-2" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u135-3" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u135-4" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u135-5" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u135-6" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u135-7" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u135-8" class="" style="width: 0px; height: 0px;">
          </div>
        </div>

        <!-- axhub-line-data (中继器) -->
        <div id="u136" class="ax_default" data-label="axhub-line-data">
          <script id="u136_script" type="axure-repeater-template" data-label="axhub-line-data">
            </script>
          <div id="u136-1" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u136-2" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u136-3" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u136-4" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u136-5" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u136-6" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u136-7" class="" style="width: 0px; height: 0px;">
          </div>
        </div>

        <!-- axhub-line-chart (矩形) -->
        <div id="u137" class="ax_default box_1" data-label="axhub-line-chart"><div style="position:relative;"><canvas id="canvas_4" width="406" height="252" style="width: 406px; height: 252px;"></canvas><div class="g2-tooltip" style="position: absolute; visibility: hidden; white-space: nowrap; z-index: 8; transition: visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(255, 255, 255, 0.9); box-shadow: rgb(174, 174, 174) 0px 0px 10px; border-radius: 3px; color: rgb(87, 87, 87); font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, SimSun, sans-serif; line-height: 20px; padding: 10px 10px 6px;"><div class="g2-tooltip-title"></div><ul class="g2-tooltip-list"></ul></div></div></div>
      </div>

      <!-- Colum (组合) -->
      <div id="u138" class="ax_default" data-label="Colum" data-left="0" data-top="0" data-width="0" data-height="0">

        <!-- axhub-column-config (中继器) -->
        <div id="u139" class="ax_default" data-label="axhub-column-config">
          <script id="u139_script" type="axure-repeater-template" data-label="axhub-column-config">
            </script>
          <div id="u139-1" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u139-2" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u139-3" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u139-4" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u139-5" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u139-6" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u139-7" class="" style="width: 0px; height: 0px;">
          </div>
        </div>

        <!-- axhub-column-data (中继器) -->
        <div id="u140" class="ax_default" data-label="axhub-column-data">
          <script id="u140_script" type="axure-repeater-template" data-label="axhub-column-data">
            </script>
          <div id="u140-1" class="" style="width: 0px; height: 0px;">
          </div>
        </div>

        <!-- axhub-column-chart (矩形) -->
        <div id="u141" class="ax_default box_1" data-label="axhub-column-chart"><div style="position:relative;"><canvas id="canvas_8" width="415" height="335" style="width: 415px; height: 335px;"></canvas><div class="g2-tooltip" style="position: absolute; visibility: hidden; white-space: nowrap; z-index: 8; transition: visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(255, 255, 255, 0.9); box-shadow: rgb(174, 174, 174) 0px 0px 10px; border-radius: 3px; color: rgb(87, 87, 87); font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, SimSun, sans-serif; line-height: 20px; padding: 10px 10px 6px;"><div class="g2-tooltip-title"></div><ul class="g2-tooltip-list"></ul></div></div></div>
      </div>

      <!-- Unnamed (形状) -->
      <div id="u142" class="ax_default icon">
        <img id="u142_img" class="img " src="src/assets/images/首页/u142.svg">
        <div id="u142_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u143" class="ax_default label">
        <div id="u143_div" class=""></div>
        <div id="u143_text" class="text ">
          <p><span>18℃</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u144" class="ax_default label">
        <div id="u144_div" class=""></div>
        <div id="u144_text" class="text ">
          <p><span>多云&nbsp;&nbsp; 东北风</span></p>
        </div>
      </div>
    </div>

    <!-- 单点区域 (组合) -->
    <div id="u145" class="ax_default ax_default_hidden" data-label="单点区域" style="display:none; visibility: hidden" data-left="28" data-top="111" data-width="1857" data-height="900">

      <!-- 巴东 (图片 ) -->
      <div id="u146" class="ax_default image" data-label="巴东" style="cursor: pointer;">
        <img id="u146_img" class="img " src="src/assets/images/首页/巴东_u89.svg" tabindex="0">
        <div id="u146_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (图片 ) -->
      <div id="u147" class="ax_default image">
        <img id="u147_img" class="img " src="src/assets/images/首页/u147.png">
        <div id="u147_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (水滴形) -->
      <div id="u148" class="ax_default marker" style="cursor: pointer;">
        <img id="u148_img" class="img " src="src/assets/images/首页/u91.svg" tabindex="0">
        <div id="u148_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (水滴形) -->
      <div id="u149" class="ax_default marker">
        <img id="u149_img" class="img " src="src/assets/images/首页/u92.svg">
        <div id="u149_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u150" class="ax_default box_2">
        <img id="u150_img" class="img " src="src/assets/images/首页/u23.svg">
        <div id="u150_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u151" class="ax_default box_2">
        <img id="u151_img" class="img " src="src/assets/images/首页/u24.svg">
        <div id="u151_text" class="text ">
          <p><span>&nbsp;&nbsp; &nbsp; XXX高切坡概况</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u152" class="ax_default box_2">
        <img id="u152_img" class="img " src="src/assets/images/首页/u25.svg">
        <div id="u152_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u153" class="ax_default box_2">
        <img id="u153_img" class="img " src="src/assets/images/首页/u24.svg">
        <div id="u153_text" class="text ">
          <p><span>&nbsp;&nbsp; &nbsp; XXX高切坡时间-位移变化曲线</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u154" class="ax_default box_2">
        <img id="u154_img" class="img " src="src/assets/images/首页/u154.svg">
        <div id="u154_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u155" class="ax_default box_2">
        <img id="u155_img" class="img " src="src/assets/images/首页/u28.svg">
        <div id="u155_text" class="text ">
          <p><span>&nbsp;&nbsp; &nbsp; XXX高切坡详情</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u156" class="ax_default label">
        <div id="u156_div" class=""></div>
        <div id="u156_text" class="text ">
          <p><span style="text-decoration:underline ;">详情</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u157" class="ax_default label">
        <div id="u157_div" class=""></div>
        <div id="u157_text" class="text ">
          <p><span style="text-decoration:underline ;">详情</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u158" class="ax_default box_2">
        <img id="u158_img" class="img " src="src/assets/images/首页/u43.svg">
        <div id="u158_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u159" class="ax_default box_2">
        <img id="u159_img" class="img " src="src/assets/images/首页/u24.svg">
        <div id="u159_text" class="text ">
          <p><span>&nbsp;&nbsp; &nbsp; XXX高切坡水位区</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u160" class="ax_default label">
        <div id="u160_div" class=""></div>
        <div id="u160_text" class="text ">
          <p><span style="text-decoration:underline ;">详情</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u161" class="ax_default label ax_default_hidden" style="display:none; visibility: hidden">
        <div id="u161_div" class=""></div>
        <div id="u161_text" class="text ">
          <p><span>夷陵区预警数量：&nbsp;&nbsp; 68</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u162" class="ax_default label ax_default_hidden" style="display:none; visibility: hidden">
        <div id="u162_div" class=""></div>
        <div id="u162_text" class="text ">
          <p><span>秭归县预警数量：&nbsp;&nbsp; 54</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u163" class="ax_default label ax_default_hidden" style="display:none; visibility: hidden">
        <div id="u163_div" class=""></div>
        <div id="u163_text" class="text ">
          <p><span>兴山县预警数量：&nbsp;&nbsp; 56</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u164" class="ax_default label ax_default_hidden" style="display:none; visibility: hidden">
        <div id="u164_div" class=""></div>
        <div id="u164_text" class="text ">
          <p><span>巴东县预警数量：&nbsp;&nbsp; 76</span></p>
        </div>
      </div>

      <!-- Line (组合) -->
      <div id="u165" class="ax_default" data-label="Line" data-left="0" data-top="0" data-width="0" data-height="0">

        <!-- axhub-line-config (中继器) -->
        <div id="u166" class="ax_default" data-label="axhub-line-config">
          <script id="u166_script" type="axure-repeater-template" data-label="axhub-line-config">
            </script>
          <div id="u166-1" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u166-2" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u166-3" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u166-4" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u166-5" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u166-6" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u166-7" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u166-8" class="" style="width: 0px; height: 0px;">
          </div>
        </div>

        <!-- axhub-line-data (中继器) -->
        <div id="u167" class="ax_default" data-label="axhub-line-data">
          <script id="u167_script" type="axure-repeater-template" data-label="axhub-line-data">
            </script>
          <div id="u167-1" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u167-2" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u167-3" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u167-4" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u167-5" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u167-6" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u167-7" class="" style="width: 0px; height: 0px;">
          </div>
        </div>

        <!-- axhub-line-chart (矩形) -->
        <div id="u168" class="ax_default box_1" data-label="axhub-line-chart"><div style="position:relative;"><canvas id="canvas_5" width="406" height="252" style="width: 406px; height: 252px;"></canvas><div class="g2-tooltip" style="position: absolute; visibility: hidden; white-space: nowrap; z-index: 8; transition: visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(255, 255, 255, 0.9); box-shadow: rgb(174, 174, 174) 0px 0px 10px; border-radius: 3px; color: rgb(87, 87, 87); font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, SimSun, sans-serif; line-height: 20px; padding: 10px 10px 6px;"><div class="g2-tooltip-title"></div><ul class="g2-tooltip-list"></ul></div></div></div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u169" class="ax_default label">
        <div id="u169_div" class=""></div>
        <div id="u169_text" class="text ">
          <p><span>高切坡名称：xxxx</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u170" class="ax_default label">
        <div id="u170_div" class=""></div>
        <div id="u170_text" class="text ">
          <p><span>安全等级：xxxxx</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u171" class="ax_default label">
        <div id="u171_div" class=""></div>
        <div id="u171_text" class="text ">
          <p><span>经度坐标：xxxxxxx</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u172" class="ax_default label">
        <div id="u172_div" class=""></div>
        <div id="u172_text" class="text ">
          <p><span>地理位置：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u173" class="ax_default label">
        <div id="u173_div" class=""></div>
        <div id="u173_text" class="text ">
          <p><span>纬度坐标：xxxxx</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u174" class="ax_default label">
        <div id="u174_div" class=""></div>
        <div id="u174_text" class="text ">
          <p><span>最大坡高：xxxxxxx</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u175" class="ax_default label">
        <div id="u175_div" class=""></div>
        <div id="u175_text" class="text ">
          <p><span>防治措施：xxxxx</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u176" class="ax_default label">
        <div id="u176_div" class=""></div>
        <div id="u176_text" class="text ">
          <p><span>面积：xxxxxxx</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u177" class="ax_default label">
        <div id="u177_div" class=""></div>
        <div id="u177_text" class="text ">
          <p><span>有无变形迹象：xxxxxxxx</span></p>
        </div>
      </div>

      <!-- Line (组合) -->
      <div id="u178" class="ax_default" data-label="Line" data-left="0" data-top="0" data-width="0" data-height="0">

        <!-- axhub-line-config (中继器) -->
        <div id="u179" class="ax_default" data-label="axhub-line-config">
          <script id="u179_script" type="axure-repeater-template" data-label="axhub-line-config">
            </script>
          <div id="u179-1" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u179-2" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u179-3" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u179-4" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u179-5" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u179-6" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u179-7" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u179-8" class="" style="width: 0px; height: 0px;">
          </div>
        </div>

        <!-- axhub-line-data (中继器) -->
        <div id="u180" class="ax_default" data-label="axhub-line-data">
          <script id="u180_script" type="axure-repeater-template" data-label="axhub-line-data">
            </script>
          <div id="u180-1" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u180-2" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u180-3" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u180-4" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u180-5" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u180-6" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u180-7" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u180-8" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u180-9" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u180-10" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u180-11" class="" style="width: 0px; height: 0px;">
          </div>
          <div id="u180-12" class="" style="width: 0px; height: 0px;">
          </div>
        </div>

        <!-- axhub-line-chart (矩形) -->
        <div id="u181" class="ax_default box_1" data-label="axhub-line-chart"><div style="position:relative;"><canvas id="canvas_6" width="406" height="224" style="width: 406px; height: 224px;"></canvas><div class="g2-tooltip" style="position: absolute; visibility: hidden; white-space: nowrap; z-index: 8; transition: visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(255, 255, 255, 0.9); box-shadow: rgb(174, 174, 174) 0px 0px 10px; border-radius: 3px; color: rgb(87, 87, 87); font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, SimSun, sans-serif; line-height: 20px; padding: 10px 10px 6px;"><div class="g2-tooltip-title"></div><ul class="g2-tooltip-list"></ul></div></div></div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u182" class="ax_default box_1">
        <div id="u182_div" class=""></div>
        <div id="u182_text" class="text " style="display:none; visibility: hidden">
          <p></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u183" class="ax_default primary_button">
        <div id="u183_div" class=""></div>
        <div id="u183_text" class="text ">
          <p><span>群测群防</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u184" class="ax_default primary_button">
        <div id="u184_div" class=""></div>
        <div id="u184_text" class="text ">
          <p><span>专业监测</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u185" class="ax_default primary_button">
        <div id="u185_div" class=""></div>
        <div id="u185_text" class="text ">
          <p><span>施工防护</span></p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u186" class="ax_default primary_button">
        <div id="u186_div" class=""></div>
        <div id="u186_text" class="text ">
          <p><span>其他资料</span></p>
        </div>
      </div>

      <!-- Unnamed (表格) -->
      <div id="u187" class="ax_default">

        <!-- Unnamed (单元格) -->
        <div id="u188" class="ax_default">
          <img id="u188_img" class="img " src="src/assets/images/首页/u188.png">
          <div id="u188_text" class="text ">
            <p><span>高切坡编号</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u189" class="ax_default">
          <img id="u189_img" class="img " src="src/assets/images/首页/u189.png">
          <div id="u189_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u190" class="ax_default">
          <img id="u190_img" class="img " src="src/assets/images/首页/u190.png">
          <div id="u190_text" class="text ">
            <p><span>所属省市</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u191" class="ax_default">
          <img id="u191_img" class="img " src="src/assets/images/首页/u191.png">
          <div id="u191_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u192" class="ax_default">
          <img id="u192_img" class="img " src="src/assets/images/首页/u188.png">
          <div id="u192_text" class="text ">
            <p><span>监测点编号</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u193" class="ax_default">
          <img id="u193_img" class="img " src="src/assets/images/首页/u189.png">
          <div id="u193_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u194" class="ax_default">
          <img id="u194_img" class="img " src="src/assets/images/首页/u190.png">
          <div id="u194_text" class="text ">
            <p><span>所属区县</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u195" class="ax_default">
          <img id="u195_img" class="img " src="src/assets/images/首页/u191.png">
          <div id="u195_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u196" class="ax_default">
          <img id="u196_img" class="img " src="src/assets/images/首页/u188.png">
          <div id="u196_text" class="text ">
            <p><span>监测时间</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u197" class="ax_default">
          <img id="u197_img" class="img " src="src/assets/images/首页/u189.png">
          <div id="u197_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u198" class="ax_default">
          <img id="u198_img" class="img " src="src/assets/images/首页/u190.png">
          <div id="u198_text" class="text ">
            <p><span>措施类型</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u199" class="ax_default">
          <img id="u199_img" class="img " src="src/assets/images/首页/u191.png">
          <div id="u199_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u200" class="ax_default">
          <img id="u200_img" class="img " src="src/assets/images/首页/u188.png">
          <div id="u200_text" class="text ">
            <p><span>观测值X</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u201" class="ax_default">
          <img id="u201_img" class="img " src="src/assets/images/首页/u189.png">
          <div id="u201_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u202" class="ax_default">
          <img id="u202_img" class="img " src="src/assets/images/首页/u190.png">
          <div id="u202_text" class="text ">
            <p><span>措施细项</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u203" class="ax_default">
          <img id="u203_img" class="img " src="src/assets/images/首页/u191.png">
          <div id="u203_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u204" class="ax_default">
          <img id="u204_img" class="img " src="src/assets/images/首页/u188.png">
          <div id="u204_text" class="text ">
            <p><span>观测值Y</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u205" class="ax_default">
          <img id="u205_img" class="img " src="src/assets/images/首页/u189.png">
          <div id="u205_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u206" class="ax_default">
          <img id="u206_img" class="img " src="src/assets/images/首页/u190.png">
          <div id="u206_text" class="text ">
            <p><span>数量</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u207" class="ax_default">
          <img id="u207_img" class="img " src="src/assets/images/首页/u191.png">
          <div id="u207_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u208" class="ax_default">
          <img id="u208_img" class="img " src="src/assets/images/首页/u188.png">
          <div id="u208_text" class="text ">
            <p><span>观测值H</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u209" class="ax_default">
          <img id="u209_img" class="img " src="src/assets/images/首页/u189.png">
          <div id="u209_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u210" class="ax_default">
          <img id="u210_img" class="img " src="src/assets/images/首页/u190.png">
          <div id="u210_text" class="text ">
            <p><span>单位</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u211" class="ax_default">
          <img id="u211_img" class="img " src="src/assets/images/首页/u191.png">
          <div id="u211_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u212" class="ax_default">
          <img id="u212_img" class="img " src="src/assets/images/首页/u188.png">
          <div id="u212_text" class="text ">
            <p><span>本期X位移</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u213" class="ax_default">
          <img id="u213_img" class="img " src="src/assets/images/首页/u189.png">
          <div id="u213_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u214" class="ax_default">
          <img id="u214_img" class="img " src="src/assets/images/首页/u190.png">
          <div id="u214_text" class="text ">
            <p><span>本期X法向位移</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u215" class="ax_default">
          <img id="u215_img" class="img " src="src/assets/images/首页/u191.png">
          <div id="u215_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u216" class="ax_default">
          <img id="u216_img" class="img " src="src/assets/images/首页/u188.png">
          <div id="u216_text" class="text ">
            <p><span>本期Y位移</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u217" class="ax_default">
          <img id="u217_img" class="img " src="src/assets/images/首页/u189.png">
          <div id="u217_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u218" class="ax_default">
          <img id="u218_img" class="img " src="src/assets/images/首页/u190.png">
          <div id="u218_text" class="text ">
            <p><span>本期Y法向位移</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u219" class="ax_default">
          <img id="u219_img" class="img " src="src/assets/images/首页/u191.png">
          <div id="u219_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u220" class="ax_default">
          <img id="u220_img" class="img " src="src/assets/images/首页/u188.png">
          <div id="u220_text" class="text ">
            <p><span>本期H位移</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u221" class="ax_default">
          <img id="u221_img" class="img " src="src/assets/images/首页/u189.png">
          <div id="u221_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u222" class="ax_default">
          <img id="u222_img" class="img " src="src/assets/images/首页/u190.png">
          <div id="u222_text" class="text ">
            <p><span>本期H法向位移</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u223" class="ax_default">
          <img id="u223_img" class="img " src="src/assets/images/首页/u191.png">
          <div id="u223_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u224" class="ax_default">
          <img id="u224_img" class="img " src="src/assets/images/首页/u224.png">
          <div id="u224_text" class="text ">
            <p><span>填表人</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u225" class="ax_default">
          <img id="u225_img" class="img " src="src/assets/images/首页/u225.png">
          <div id="u225_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u226" class="ax_default">
          <img id="u226_img" class="img " src="src/assets/images/首页/u226.png">
          <div id="u226_text" class="text ">
            <p><span>备注</span></p>
          </div>
        </div>

        <!-- Unnamed (单元格) -->
        <div id="u227" class="ax_default">
          <img id="u227_img" class="img " src="src/assets/images/首页/u227.png">
          <div id="u227_text" class="text " style="display:none; visibility: hidden">
            <p></p>
          </div>
        </div>
      </div>
    </div>

    <div id="axureEventReceiverDiv" style="display:none"></div>
    <div id="axureEventSenderDiv" style="display:none"></div>

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
  import jrsb from "./home/jrsb";
  import jsgk from "./home/jsgk";
  import jtgqpgk from "./home/jtgqpgk";
  import swq from "./home/swq";
  import tqgk from "./home/tqgk";

    export default {
        name: "home",
        data() {
            return {
                msg:'asd'


            }
        },components:{
            'v-gqpaqdj':gqpaqdj,
            'v-gqpgk':gqpgk,
            'v-gqpsjwybhqx':gqpsjwybhqx,
            'v-gqpssyj':gqpssyj,
            'v-gqpswq':gqpswq,
            'v-gqpxq':gqpxq,
            'v-jrsb':jrsb,
            'v-jsgk':jsgk,
            'v-jtgqpgk':jtgqpgk,
            'v-swq':swq,
            'v-tqgk':tqgk
        }
    }
</script>

<style scoped>


</style>
