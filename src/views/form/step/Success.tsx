import ResultCard from '@/components/result-card'
import { Space, Button, Typography, Link } from '@arco-design/web-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return () => (
      <div>
        1 12122121aefawefwa
        <ResultCard status="404">
          {{
            extra: () => (
              <Space>
                <Button>返回</Button>
                <Button>重试</Button>
              </Space>
            ),
            default: () => (
              <div>
                <Typography.Title></Typography.Title>
                <Typography.Paragraph>
                  <Link>记录</Link>
                  <Link>连接</Link>
                  <Link></Link>
                </Typography.Paragraph>
              </div>
            )
          }}
        </ResultCard>
      </div>
    )
  }
})
