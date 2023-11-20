import { LayoutFooter } from '@arco-design/web-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return () => (
      <LayoutFooter class="flex   h-10 justify-center items-center text-center text-[var(--color-text-2)]">
        vue3 Admin 2023
      </LayoutFooter>
    )
  }
})