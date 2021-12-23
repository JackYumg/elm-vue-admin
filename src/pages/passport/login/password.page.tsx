import { provideApolloClient, useQuery, useResult } from "@vue/apollo-composable";
import { ElButton, ElCheckbox, ElForm, ElFormItem, ElInput, ElLink, ElRow, ElCol } from "element-plus";
import gql from "graphql-tag";
import { apolloClient } from "./../../../apollo";
import { defineComponent, reactive } from "vue";
import loginStyles from './login.module.scss';

const query = provideApolloClient(apolloClient)(() => useQuery(gql`query DDQ {
    nearList{
      id,
      createDate,
      updateDate,
      tags{
        name,
        color
      }
    }
  }`));

const hello = useResult(query.result, [])


export default defineComponent({
    setup() {
        return {
            hello
        }
    },
    datas: {
        hello: []
    },
    props: {
        hello: {
            default: []
        }
    },
    render() {

        // 密码账户部分
        const passwordState = reactive({
            username: 'admin',
            password: '666666',
            remenber: false
        });

        // 点击登录
        const login = () => {
            this.$router.push('/main');


            const queryQl = gql`query GET_ACCESS_TOKEN($userInfo: UserInput!){
                login(userIn: $userInfo){
                  access_token
                }
              }`

            const query = provideApolloClient(apolloClient)(() => useQuery(queryQl, () => ({
                "userInfo": {
                    "username": "",
                    "password": ""
                }
            })));

            const res = useResult(query.result, {});
           
        };

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