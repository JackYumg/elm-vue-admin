import { ElButton, ElCheckbox, ElForm, ElFormItem, ElInput, ElLink, ElMessage, ElRow, ElCol } from "element-plus";
import { defineComponent, reactive } from "vue";
import loginStyles from './login.module.scss';

export default defineComponent({
    render() {
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
                    if (phoneState.waittimes === 0) {
                        phoneState.waiting = false;
                        clearInterval(timer);
                    }
                }, 1000);
            }, 3000);
        }
        return <ElForm>
            <ElFormItem>
                <ElInput modelValue={phoneState.phone} prefixIcon={'el-icon-mobile-phone'}>

                </ElInput>
            </ElFormItem>
            <ElFormItem>
                <ElRow>
                    <ElCol span={14}>
                        <ElInput modelValue={phoneState.validCode} prefixIcon={'el-icon-message'}></ElInput>
                    </ElCol>

                    <ElCol span={5} offset={1}>
                        <div onClick={getAuth}>
                            <ElButton disabled={phoneState.waiting} type={'primary'}>
                                {
                                    phoneState.waiting ? `（${phoneState.waittimes}）秒后发送` : '获取验证码'
                                }
                            </ElButton>
                        </div>
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
                <ElButton class={loginStyles['mainButton']} type={'primary'}>登录</ElButton>
            </ElFormItem>
            <ElFormItem class={loginStyles.register}>
                <ElLink type={'primary'}>立即注册</ElLink>
            </ElFormItem>
        </ElForm>
    }
})