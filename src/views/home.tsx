import { defineComponent } from 'vue'

import MapCht from '@/components/chts/map-cht'
import PieCht from '@/components/chts/pie-cht'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <MapCht />
        <PieCht />
      </div>
    )
  }
})
