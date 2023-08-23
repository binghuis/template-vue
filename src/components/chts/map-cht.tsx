import { theme } from '@/composables'
import getData from '@/data/map'
import { registerMap, type ECharts } from 'echarts'
import { EffectScatterChart, ScatterChart } from 'echarts/charts'
import { GeoComponent, LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components'
import { use } from 'echarts/core'
import type { GeoJSONSourceInput } from 'echarts/types/src/coord/geo/geoTypes'
import { defineComponent, shallowRef } from 'vue'
import VChart from 'vue-echarts'
import chinaMap from './china-map.noformat.json'

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

    const option = shallowRef(getData())
    registerMap('china', chinaMap as GeoJSONSourceInput)

    const map = shallowRef<ECharts>()
    return () => (
      <VChart
        ref={map}
        theme={theme.value}
        option={option.value}
        autoresize
        style={{ height: '100vh' }}
      />
    )
  }
})
