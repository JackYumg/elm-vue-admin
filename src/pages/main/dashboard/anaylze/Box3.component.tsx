import { ElButton, ElButtonGroup, ElCard, ElCol, ElIcon, ElRow } from "element-plus";
import { defineComponent } from "vue";
import AnaylzeStyles from './anaylze.module.scss';

export default defineComponent({
    render() {
        const title1 = () => {
            return <div>线上热门搜索
                <ElIcon class={AnaylzeStyles.extra} name={'more'}></ElIcon>
            </div>
        }

        const title2 = () => {
            return <div>线上热门搜索
                <ElIcon class={AnaylzeStyles.extra} name={'more'}></ElIcon>
                <ElButtonGroup class={[AnaylzeStyles.extra , AnaylzeStyles.extraBtn]}>
                    <ElButton size={'small'}>全部活动</ElButton>
                    <ElButton size={'small'}>线上</ElButton>
                    <ElButton size={'small'}>线下</ElButton>
                </ElButtonGroup>
            </div>
        }

        const slots1 = {
            header: title1
        }

        const slots2 = {
            header: title2
        }
        return <ElRow gutter={20} class={AnaylzeStyles.nav3}>
            <ElCol span={12} md={12} xs={24}>
                <ElCard v-slots={slots1}>
                    <ElRow>
                        <ElCol></ElCol>
                        <ElCol></ElCol>
                    </ElRow>
                </ElCard>
            </ElCol>
            <ElCol span={12} md={12} xs={24}>
                <ElCard v-slots={slots2}>

                </ElCard>
            </ElCol>
        </ElRow>
    }
})