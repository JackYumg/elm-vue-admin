import { ElButton, ElCheckbox, ElForm, ElFormItem, ElInput, ElLink, ElRow, ElCol } from "element-plus";
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
        const login = () => {
            this.$router.push('/main');
        }
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
                <ElButton onclick={login} class={loginStyles['mainButton']} type={'primary'}>登录</ElButton>
            </ElFormItem>
            <ElFormItem class={loginStyles.register}>
                <ElLink type={'primary'}>立即注册</ElLink>
            </ElFormItem>
        </ElForm>
    }
})