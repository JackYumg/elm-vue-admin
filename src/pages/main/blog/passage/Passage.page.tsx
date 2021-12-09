import { defineComponent } from "vue";
import { ElTabPane, ElTabs } from "element-plus";
import PassageStyle from './passage.module.scss';
export default defineComponent({
    render() {
        return <div class={PassageStyle.passagePage}>
            <ElTabs>
                <ElTabPane label="文章">

                </ElTabPane>
                <ElTabPane label="标签">

                </ElTabPane>
                <ElTabPane label="分类">

                </ElTabPane>
            </ElTabs>
        </div>
    }
})