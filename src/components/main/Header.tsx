import { ElAvatar, ElButton, ElButtonGroup, ElIcon, ElInput } from "element-plus";
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { appkey } from "../../store";
import mainStyles from './main.module.scss';

export default defineComponent({
    render() {
        const store = useStore(appkey);
        const queryState = reactive({
            isFocus: false
        });
        const toggle = () => {
            store.commit('toggleMenu');
        }

        const focusEvent = () => {
            queryState.isFocus = true;
            console.log(queryState.isFocus);
        }

        const blurEvent = () => {
            queryState.isFocus = false;
            console.log(queryState.isFocus);
        }

        const mainState = store.state.main;
        return <div class={[mainStyles.header, mainStyles.default]}>
            <div class={[mainStyles.logo, !mainState.menuToggle ? mainStyles.uncollapsed : mainStyles.collapsedLogo]}>{!mainState.menuToggle ? 'Vue-Admin' : 'V'}</div>
            <div class={mainStyles.toolbar}>
                <ElButtonGroup>
                    <ElButton onclick={toggle} class={[mainStyles.btnLeft, mainStyles.toolBtn]} size={'small'} type={'primary'} icon={mainState.menuToggle ? 'el-icon-s-fold' : 'el-icon-s-unfold'}>
                    </ElButton>
                    <ElButton class={[mainStyles.btnCenter, mainStyles.toolBtn]} size={'small'} type={'primary'} icon={'el-icon-s-flag'}>
                    </ElButton>
                    <ElButton class={[mainStyles.btnRight, mainStyles.toolBtn]} size={'small'} type={'primary'} icon={'el-icon-lock'}>
                    </ElButton>
                </ElButtonGroup>
            </div>
            <div class={mainStyles.query}>
                {
                    queryState.isFocus ? 
                    <ElInput onblur={blurEvent} onFocus={focusEvent} size={'small'} prefixIcon={'el-icon-search'}></ElInput> : 
                    <ElInput onblur={blurEvent} onFocus={focusEvent} size={'small'} prefixIcon={'el-icon-back'}>
                    </ElInput>
                }
            </div>
            <div class={mainStyles.toolbarMsg}>
                <ElButtonGroup>
                    <ElButton onclick={toggle} class={[mainStyles.btnLeft, mainStyles.toolBtn]} size={'small'} type={'primary'} icon={'el-icon-bell'}>
                    </ElButton>
                    <ElButton class={[mainStyles.btnCenter, mainStyles.toolBtn]} size={'small'} type={'primary'} icon={'el-icon-bell'}>
                    </ElButton>
                    <ElButton class={[mainStyles.btnRight, mainStyles.toolBtn]} size={'small'} type={'primary'} icon={'el-icon-menu'}>
                    </ElButton>
                    <ElButton class={[mainStyles.btnRight, mainStyles.toolBtn]} size={'small'} type={'primary'} icon={'el-icon-setting'}>
                    </ElButton>
                    <ElButton class={[mainStyles.btnRight, mainStyles.toolBtn]} size={'small'} type={'primary'}>
                        <ElAvatar style={{ width: '16px', height: '16px' }} size={'small'} src={'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'}></ElAvatar>
                    </ElButton>
                </ElButtonGroup>
            </div>

        </div>
    }
})