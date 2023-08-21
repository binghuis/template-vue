<template>
  <v-chart class="chart" ref="pie" :theme="theme" :option="option" autoresize />
</template>

<script setup lang="ts">
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart from 'vue-echarts'
import { onMounted, ref, shallowRef } from 'vue'
import { theme } from '@/composables'
import type { ECharts } from 'echarts'
use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])
const pie = shallowRef<ECharts>()
let timer: number | undefined
onMounted(() => {
  startActions()

  return () => {
    stopActions()
  }
})

function startActions() {
  let dataIndex = -1

  const dataLen = option.value?.series?.[0]?.data?.length || 0

  if (!pie.value || dataLen === 0) {
    return
  }

  clearInterval(timer)

  timer = setInterval(() => {
    if (!pie.value) {
      clearInterval(timer)

      return
    }

    pie.value.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex
    })
    dataIndex = (dataIndex + 1) % dataLen
    pie.value.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex
    })
    pie.value.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex
    })
  }, 1000)
}

function stopActions() {
  clearInterval(timer)
}
const option = ref({
  title: {
    text: 'Traffic Sources',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines']
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
