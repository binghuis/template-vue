import { RouterView } from 'vue-router'
import { toggleDark, isDark } from '@/composables'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { defineComponent } from 'vue'
import { ElButton, ElIcon } from 'element-plus'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <ElButton
          onClick={() => toggleDark()}
          icon={<ElIcon size="small">{isDark ? <Moon /> : <Sunny />}</ElIcon>}
        ></ElButton>
        <RouterView />
      </div>
    )
  }
})
