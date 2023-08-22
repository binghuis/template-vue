import { theme } from '@/composables'
import getData from '@/data/map'
import http from '@/service/http'
import { registerMap, type ECharts } from 'echarts'
import { EffectScatterChart, ScatterChart } from 'echarts/charts'
import { GeoComponent, LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components'
import { use } from 'echarts/core'
import type { GeoJSONSourceInput } from 'echarts/types/src/coord/geo/geoTypes'
import { defineComponent, onBeforeUnmount, onMounted, shallowRef } from 'vue'
import VChart from 'vue-echarts'
import chinaMap from './map.json'
export default defineComponent({
  setup() {
    use([
      ScatterChart,
      EffectScatterChart,
      GeoComponent,
      TitleComponent,
      LegendComponent,
      TooltipComponent
    ])

    const seconds = shallowRef(0)
    const loading = shallowRef(false)

    let timer: NodeJS.Timeout

    onBeforeUnmount(() => {
      clearInterval(timer)
    })

    function tick() {
      seconds.value--

      if (seconds.value === 0) {
        clearInterval(timer)
        loading.value = false
        option.value = getData()
      }
    }

    function refresh() {
      // simulating async data from server
      seconds.value = 3
      loading.value = true

      timer = setInterval(tick, 1000)
    }

    const option = shallowRef(getData())
    registerMap('china', chinaMap as GeoJSONSourceInput)

    onMounted(() => {
      http.getChinaDataVGEO().then((chinaMap) => {
        // registerMap('china', chinaMap)
        refresh()
      })
    })

    const map = shallowRef<ECharts>()
    return () => (
      <VChart
        ref={map}
        theme={theme.value}
        option={option.value}
        autoresize
        loading={loading.value}
        style={{ height: '100vh' }}
      />
    )
  }
})
