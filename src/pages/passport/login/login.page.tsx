import { ElForm, ElFormItem, ElInput, ElTabPane, ElTabs, ElCol, ElCheckbox, ElRow, ElLink, ElButton, ElIcon, ElMessage } from "element-plus";
import { defineComponent, reactive } from "vue";
import loginStyles from './login.module.scss';
export default defineComponent({
    render() {

        // 密码账户部分
        const passwordState = reactive({
            username: 'admin',
            password: '666666',
            remenber: false
        });
        const passwordLogin = () => {
            return <ElForm>
                <ElFormItem>
                    <ElInput prefixIcon={'el-icon-user'} placeholder={'用户名'} modelValue={passwordState.username}></ElInput>
                </ElFormItem>
                <ElFormItem>
                    <ElInput prefixIcon={'el-icon-key'} placeholder={'密码'} showPassword={true} modelValue={passwordState.password}></ElInput>
                </ElFormItem>
                <ElFormItem>
                    <ElRow>
                        <ElCol span={19}>
                            <ElCheckbox>记住密码</ElCheckbox>
                        </ElCol>
                        <ElCol span={5}>
                            <ElLink type={'primary'}>忘记密码？</ElLink>
                        </ElCol>
                    </ElRow>
                </ElFormItem>
                <ElFormItem>
                    <ElButton onclick={login} class={loginStyles['main-button']} type={'primary'}>登录</ElButton>
                </ElFormItem>
                <ElFormItem class={loginStyles.register}>
                    <ElLink type={'primary'}>立即注册</ElLink>
                </ElFormItem>
            </ElForm>
        }
        const phoneState = reactive({
            phone: '10086',
            validCode: 'abcd',
            waiting: false,
            waittimes: 0
        });

        const getAuth = () => {
            phoneState.waiting = true;
            phoneState.waittimes = 60;
            setTimeout(() => {
                phoneState.validCode = parseInt(Math.random() * 10000 + '').toFixed(0);
                phoneState.waiting = false;
                ElMessage({
                    message: '发送成功',
                    type: 'success'
                });
                var timer = setInterval(() => {
                    if(phoneState.waittimes === 0){
                        phoneState.waiting = false;
                        clearInterval(timer);
                    }
                } , 1000);
            }, 3000);
        }

        const phoneLogin = () => {
            return <ElForm>
                <ElFormItem>
                    <ElInput modelValue={phoneState.phone}  prefixIcon={'el-icon-mobile-phone'}>

                    </ElInput>
                </ElFormItem>
                <ElFormItem>
                    <ElRow>
                        <ElCol span={14}>
                            <ElInput modelValue={phoneState.validCode}  prefixIcon={'el-icon-message'}></ElInput>
                        </ElCol>
                        <ElCol span={5} offset={1}>
                            <ElButton onclick={getAuth} disabled={phoneState.waiting} type={'primary'}>
                                {
                                    phoneState.waiting? `（${phoneState.waittimes}）秒后发送`:'获取验证码'
                                }
                                </ElButton>
                        </ElCol>
                    </ElRow>
                </ElFormItem>
                <ElFormItem>
                    <ElRow>
                        <ElCol span={19}>
                            <ElCheckbox>自动登录</ElCheckbox>
                        </ElCol>
                    </ElRow>
                </ElFormItem>
                <ElFormItem>
                    <ElButton class={loginStyles['main-button']} type={'primary'}>登录</ElButton>
                </ElFormItem>
                <ElFormItem class={loginStyles.register}>
                    <ElLink type={'primary'}>立即注册</ElLink>
                </ElFormItem>
            </ElForm>
        }

        const login = () => {
            
        }

        return <div class={loginStyles.container}>
            <ElTabs type={'border-card'}>
                <ElTabPane label={'账户密码登录'}>
                    {
                        passwordLogin()
                    }
                </ElTabPane>
                <ElTabPane label={'手机号登录'}>
                    {
                        phoneLogin()
                    }
                </ElTabPane>
            </ElTabs>
        </div>;
    }
})