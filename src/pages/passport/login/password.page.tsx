import { provideApolloClient, useQuery, useResult } from "@vue/apollo-composable";
import { ElButton, ElCheckbox, ElForm, ElFormItem, ElInput, ElLink, ElRow, ElCol } from "element-plus";
import gql from "graphql-tag";
import { apolloClient } from "./../../../apollo";
import { defineComponent, reactive, watch } from "vue";
import loginStyles from './login.module.scss';
import { showError, showWarning } from "@components/elm-plus/ElMessageAlert";
import { loginIn } from '@apis/passport/passport.api';
import { useStore } from "vuex";
import { appkey } from "@store/";

// const query = provideApolloClient(apolloClient)(() => useQuery(gql`query DDQ {
//     nearList{
//       id,
//       createDate,
//       updateDate,
//       tags{
//         name,
//         color
//       }
//     }
//   }`));

// const hello = useResult(query.result, [])


export default defineComponent({
    render() {

        const store = useStore(appkey);

        // 密码账户部分
        const passwordState = reactive({
            username: 'admin',
            password: 'admin',
            remenber: false
        });

        // 点击登录
        const login = () => {
            // this.$router.push('/main');
            loginIn(passwordState.username, passwordState.password).then((e: { login: { access_token: any; }; }) => {
                const { access_token } = e.login;
                if (access_token) {
                    localStorage.setItem('wym_jwt', access_token);
                    store.dispatch('main/userInfo/getUserInfoData');
                    this.$router.push('/main');
                    } else {
                    showError('用户名或密码错误');
                }
            }, (error: any) => {
                console.log(error);
            });
        };

        const userNameInput = (value: string) => {
            passwordState.username = value;
        }

        const passwordInput = (value: string) => {
            passwordState.password = value;
        }

        return <ElForm>
            <ElFormItem>
                <ElInput prefixIcon={'el-icon-user'} placeholder={'用户名'} modelValue={passwordState.username} onInput={userNameInput}></ElInput>
            </ElFormItem>
            <ElFormItem>
                <ElInput prefixIcon={'el-icon-key'} placeholder={'密码'} showPassword={true} modelValue={passwordState.password} onInput={passwordInput}></ElInput>
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
    },
    datas: {
        hello: []
    },
    props: {
        hello: {
            default: []
        }
    }
})