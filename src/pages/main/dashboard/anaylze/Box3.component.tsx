import { ElCard, ElCol, ElIcon, ElRow } from "element-plus";
import { defineComponent } from "vue";

export default defineComponent({
    render() {
        const title1 = () => {
            return <div>线上热门搜索
                <ElIcon name={'more'}></ElIcon>
            </div>
        }

        const slots1 = {
            header: title1
        }
        return <ElRow gutter={20}>
            <ElCol span={12}>
                <ElCard v-slots={slots1}>

                </ElCard>
            </ElCol>
            <ElCol span={12}>
                <ElCard></ElCard>
            </ElCol>
        </ElRow>
    }
})