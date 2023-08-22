import axios from 'axios'
import type { GeoJSONSourceInput } from 'echarts/types/src/coord/geo/geoTypes'

class Http {
  async getChinaDataVGEO(): Promise<GeoJSONSourceInput> {
    // https://datav.aliyun.com/portal/school/atlas/area_selector
    const res = await axios.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
    return res.data
  }
}

export default new Http()
