import { provideApolloClient, useQuery, useResult } from "@vue/apollo-composable";
import { ElButton, ElCheckbox, ElForm, ElFormItem, ElInput, ElLink, ElRow, ElCol } from "element-plus";
import gql from "graphql-tag";
import { apolloClient } from "./../../../apollo";
import { defineComponent, onMounted, reactive, ref, watch } from "vue";
import loginStyles from './login.module.scss';
import { showError, showWarning } from "@components/elm-plus/ElMessageAlert";
import { loginIn } from '@apis/passport/passport.api';
import { useStore } from "vuex";
import { appkey } from "@store/index";
import { getAuthCodeImageApi } from "@apis/auth/auth.api";

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

    setup(_props) {
        // 密码账户部分
        const passwordState = reactive({
            username: 'admin',
            password: 'admin',
            smsCode: '',
            remenber: false,
            timer: Date.now()
        });
        function getAuthImage() {
            passwordState.timer = Date.now();
            getAuthCodeImageApi(passwordState.timer)?.then((res: any) => {
                authImage.value = res.data;
            });
        }

        const authImage = ref();
        onMounted(() => {
            getAuthImage();
        });
        return {
            authImage,
            getAuthImage,
            passwordState
        }
    },
    render(_props: any, _rawBindings: any, _data: any, setUpOption: { getAuthImage?: any; authImage?: any; passwordState?: any; }, _methods: any, _context: any) {
        const store = useStore(appkey);
        const { passwordState} = setUpOption;

        // 点击登录
        const login = () => {
            // this.$router.push('/main');
            loginIn(passwordState.username, passwordState.password, passwordState.smsCode, passwordState.timer).then((e: { login: { access_token: any; }; }) => {
                const { access_token } = e.login;
                if (access_token) {
                    localStorage.setItem('wym_jwt', access_token);
                    store.dispatch('main/userInfo/getUserInfoData');
                    // this.$router.push('/main');
                } else {
                    showError('用户名或密码错误');
                }
            }, (error: any) => {
                console.log(error);
            });
        };

        const inputChange = function (this: any, value: string) {
            passwordState[this] = value;
        }

        const createSvg = (svgStr: string) => {
            return <span onClick={refreshAuthCode} class={loginStyles.authCode} innerHTML={svgStr}>
            </span>;
        }

        const refreshAuthCode = () => {
            setUpOption.getAuthImage();
        }

        return <ElForm class={loginStyles.passwordContainer}>
            <ElFormItem>
                <ElInput prefixIcon={'el-icon-user'} placeholder={'用户名'} modelValue={passwordState.username} onInput={inputChange.bind('username')}></ElInput>
            </ElFormItem>
            <ElFormItem>
                <ElInput prefixIcon={'el-icon-key'} placeholder={'密码'} showPassword={true} modelValue={passwordState.password} onInput={inputChange.bind('password')}></ElInput>
            </ElFormItem>
            <ElFormItem>
                <ElInput placeholder={'请输入验证码'} v-slots={{
                    append: () => createSvg(setUpOption.authImage)
                }} modelValue={passwordState.smsCode} onInput={inputChange.bind('smsCode')}>
                </ElInput>
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

    },
    props: {
        hello: {
            default: []
        }
    }
})