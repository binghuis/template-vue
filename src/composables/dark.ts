import { useDark, useToggle } from '@vueuse/core'
import { computed, ref } from 'vue'

export const isDark = useDark({ initialValue: 'dark' })
export const toggleDark = useToggle(isDark)

const darkRef = ref(isDark)
export const theme = computed(() => (darkRef.value ? 'dark' : 'light'))
