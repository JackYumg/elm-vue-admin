import { ElCard, ElCol, ElRow, ElTabPane, ElTabs } from "element-plus";
import { defineComponent } from "vue";
import AnaylzeStyles from './anaylze.module.scss';
import * as echarts from 'echarts';
export default defineComponent({
    mounted(){

    },
    render(){
        const label = () => {
            return <div class={AnaylzeStyles.label}>
                <h3>
                    121212
                </h3>
                <ElRow>
                    <ElCol span={12}></ElCol>
                    <ElCol span={12}></ElCol>
                </ElRow>
            </div>
        }
        return <div class={AnaylzeStyles.nav4}>
            <ElCard>
                <ElTabs>
                    <ElTabPane name={'dd'} v-slots={{label}}>

                    </ElTabPane>
                </ElTabs>
            </ElCard>
        </div>
    }
})