import axios from 'axios'

class Http {
  async getDataVGEO() {
    // https://datav.aliyun.com/portal/school/atlas/area_selector
    const res = await axios.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
    return res.data.features
  }
}

export default new Http()
