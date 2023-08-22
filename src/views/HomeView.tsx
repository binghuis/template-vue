import { defineComponent } from 'vue'

import Pie from '@/components/charts/pie'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <Pie />
      </div>
    )
  }
})
