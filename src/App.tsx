import { isDark, toggleDark } from '@/composables'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { ElButton, ElIcon } from 'element-plus'
import { defineComponent, onMounted } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  setup() {
    onMounted(() => {})
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
