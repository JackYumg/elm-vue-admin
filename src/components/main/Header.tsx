import { ElAvatar, ElButton, ElButtonGroup, ElCol, ElIcon, ElInput, ElRow } from "element-plus";
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { appkey } from '@store/index'
import mainStyles from './main.module.scss';
import elmFull from '@assets/header/elm-full.svg';
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
        }

        const blurEvent = () => {
            queryState.isFocus = false;
        }

        const mainState = store.state.main;
        return <div class={[mainStyles.header, mainStyles.default]}>
            <div class={[mainStyles.logo, !mainState.menuToggle ? mainStyles.uncollapsed : mainStyles.collapsedLogo]}>{!mainState.menuToggle ? <img src={elmFull} /> : <span class={mainStyles.logo}><img src={elmFull} /></span>}</div>
            <div class={mainStyles.toolbar}>
                <ElButtonGroup>
                    <ElButton onClick={toggle} class={[mainStyles.btnLeft, mainStyles.toolBtn]} size={'small'} type={'primary'} icon={mainState.menuToggle ? 'el-icon-s-fold' : 'el-icon-s-unfold'}>
                    </ElButton>
                    <ElButton class={[mainStyles.btnCenter, mainStyles.toolBtn]} size={'small'} type={'primary'} icon={'el-icon-s-flag'}>
                    </ElButton>
                    <ElButton class={[mainStyles.btnRight, mainStyles.toolBtn , 'hidden-sm-and-down']} size={'small'} type={'primary'} icon={'el-icon-lock'}>
                    </ElButton>
                </ElButtonGroup>
            </div>
            <div class={[mainStyles.query, 'hidden-sm-and-down']}>
                {
                    queryState.isFocus ?
                        <ElInput onblur={blurEvent} onFocus={focusEvent} size={'small'} prefixIcon={'el-icon-search'}></ElInput> :
                        <ElInput onblur={blurEvent} onFocus={focusEvent} size={'small'} prefixIcon={'el-icon-back'}>
                        </ElInput>
                }
            </div>
            <div class={mainStyles.toolbarMsg}>
                <ElButtonGroup>
                    <ElButton class={[mainStyles.btnLeft, mainStyles.toolBtn]} size={'small'} type={'primary'} icon={'el-icon-bell'}>
                    </ElButton>
                    <ElButton class={[mainStyles.btnCenter, mainStyles.toolBtn, 'hidden-sm-and-down']} size={'small'} type={'primary'} icon={'el-icon-bell'}>
                    </ElButton>
                    <ElButton class={[mainStyles.btnRight, mainStyles.toolBtn, 'hidden-sm-and-down']} size={'small'} type={'primary'} icon={'el-icon-menu'}>
                    </ElButton>
                    <ElButton class={[mainStyles.btnRight, mainStyles.toolBtn, 'hidden-sm-and-down']} size={'small'} type={'primary'} icon={'el-icon-setting'}>
                    </ElButton>
                    <ElButton class={[mainStyles.btnRight, mainStyles.toolBtn]} size={'small'} type={'primary'}>
                        <ElRow justify={'center'} align={'middle'}>
                            <ElCol span={6}>
                                <ElAvatar style={{ width: '14px', height: '14px' }} size={'small'} src={'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'}></ElAvatar>
                            </ElCol>
                            <ElCol span={16} offset={2}>
                                232323
                            </ElCol>
                        </ElRow>
                    </ElButton>
                </ElButtonGroup>
            </div>

        </div>
    }
})