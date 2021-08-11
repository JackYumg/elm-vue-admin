import { ElLink } from "element-plus";
import { defineComponent } from "vue";
import gloablStyles from './global.module.scss';
export default defineComponent({
    render() {
        return <div class={gloablStyles['global-footer']}>
            <div class={gloablStyles.link}>
                <a class={gloablStyles.linkItem}>帮助</a>
                <a class={gloablStyles.linkItem}>隐私</a>
                <a class={gloablStyles.linkItem}>条款</a>
            </div>
            <div class={gloablStyles.copyright}>
            Copyright @2021 <ElLink type={'primary'}>记忆的停留</ElLink>出品
            </div>
        </div>
    }
})