<template>
<!--高切坡实时预警-->
  <div>
    <!-- background(矩形) -->
    <div id="u27" class="ax_default box_2">
      <img id="u27_img" class="img " src="src/assets/images/首页/u27.svg">
      <div id="u27_text" class="text " style="display:none; visibility: hidden">
        <p></p>
      </div>
    </div>
    <!-- 高切坡实时预警详情 (矩形) -->
    <div id="u32" class="ax_default label">
      <div id="u32_div" class=""></div>
      <div id="u32_text" class="text ">
        <p><router-link to="/content" style="text-decoration:underline ;">详情</router-link></p>
      </div>
    </div>
    <!-- title (矩形) -->
    <div id="u28" class="ax_default box_2">
      <img id="u28_img" class="img " src="src/assets/images/首页/u28.svg">
      <div id="u28_text" class="text ">
        <p><span>高切坡实时预警</span></p>
        <!-- 按区域,按时间 (下拉列表) -->
        <div id="u48" class="ax_default droplist" style="cursor: pointer;">
          <div id="u48_div" class=""></div>
          <select id="u48_input" class="u48_input" tabindex="0">
            <option class="u48_input_option" value="按区域">按区域</option>
            <option class="u48_input_option" value="按时间">按时间</option>
          </select>
        </div>
      </div>
    </div>
    <!-- 预警区域 (组合) -->
    <div id="u33" class="ax_default" data-label="预警区域" data-left="1456" data-top="201" data-width="418" data-height="315">

      <!-- axhub-stackedColumn-config (中继器) -->
      <div id="u34" class="ax_default" data-label="axhub-stackedColumn-config">
        <script id="u34_script" type="axure-repeater-template" data-label="axhub-stackedColumn-config">
            </script>
        <div id="u34-1" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u34-2" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u34-3" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u34-4" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u34-5" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u34-6" class="" style="width: 0px; height: 0px;">
        </div>
      </div>

      <!-- axhub-stackedColumn-data (中继器) -->
      <div id="u35" class="ax_default" data-label="axhub-stackedColumn-data">
        <script id="u35_script" type="axure-repeater-template" data-label="axhub-stackedColumn-data">
            </script>
        <div id="u35-1" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u35-2" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u35-3" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u35-4" class="" style="width: 0px; height: 0px;">
        </div>
      </div>

      <!-- axhub-stackedColumn-chart (矩形) -->
      <div id="u36" class="ax_default box_1" data-label="axhub-stackedColumn-chart"><div style="position:relative;"><canvas id="canvas_9" width="418" height="315" style="width: 418px; height: 315px;"></canvas><div class="g2-tooltip" style="position: absolute; visibility: hidden; white-space: nowrap; z-index: 8; transition: visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(255, 255, 255, 0.9); box-shadow: rgb(174, 174, 174) 0px 0px 10px; border-radius: 3px; color: rgb(87, 87, 87); font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, SimSun, sans-serif; line-height: 20px; padding: 10px 10px 6px;"><div class="g2-tooltip-title"></div><ul class="g2-tooltip-list"></ul></div></div></div>
    </div>
    <!-- 预警时间 (组合) -->
    <div id="u49" class="ax_default ax_default_hidden" data-label="预警时间" style="display:none; visibility: hidden" data-left="1456" data-top="201" data-width="418" data-height="315">

      <!-- axhub-line-config (中继器) -->
      <div id="u50" class="ax_default" data-label="axhub-line-config">
        <script id="u50_script" type="axure-repeater-template" data-label="axhub-line-config">
            </script>
        <div id="u50-1" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u50-2" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u50-3" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u50-4" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u50-5" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u50-6" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u50-7" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u50-8" class="" style="width: 0px; height: 0px;">
        </div>
      </div>

      <!-- axhub-line-data (中继器) -->
      <div id="u51" class="ax_default" data-label="axhub-line-data">
        <script id="u51_script" type="axure-repeater-template" data-label="axhub-line-data">
            </script>
        <div id="u51-1" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u51-2" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u51-3" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u51-4" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u51-5" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u51-6" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u51-7" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u51-8" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u51-9" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u51-10" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u51-11" class="" style="width: 0px; height: 0px;">
        </div>
        <div id="u51-12" class="" style="width: 0px; height: 0px;">
        </div>
      </div>

      <!-- axhub-line-chart (矩形) -->
      <div id="u52" class="ax_default box_1" data-label="axhub-line-chart"><div style="position:relative;"><canvas id="canvas_1" width="418" height="315" style="width: 418px; height: 315px;"></canvas><div class="g2-tooltip" style="position: absolute; visibility: hidden; white-space: nowrap; z-index: 8; transition: visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgba(255, 255, 255, 0.9); box-shadow: rgb(174, 174, 174) 0px 0px 10px; border-radius: 3px; color: rgb(87, 87, 87); font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, SimSun, sans-serif; line-height: 20px; padding: 10px 10px 6px;"><div class="g2-tooltip-title"></div><ul class="g2-tooltip-list"></ul></div></div></div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "gqpssyj"
    }
</script>

<style scoped>

</style>
