import { ElTabPane, ElTabs } from "element-plus";
import { defineComponent } from "vue";
import loginStyles from './login.module.scss';
import PasswordPage from "./password.page";
import PhonePage from "./phone.page";
export default defineComponent({
    render() {
        return <div class={loginStyles.container}>
            <ElTabs type={'border-card'}>
                <ElTabPane label={'账户密码登录'}>
                    <PasswordPage></PasswordPage>
                </ElTabPane>
                <ElTabPane label={'手机号登录'}>
                    <PhonePage></PhonePage>
                </ElTabPane>
            </ElTabs>
        </div>;
    }
})