import { showError } from "@components/elm-plus/ElMessageAlert";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { apolloClient, linkReOption } from '../../apollo';
import { ApolloError } from "apollo-client";


// 登录
export const loginIn = (username: string, password: string): Promise<any> => {
    return new Promise((resolve) => {
        const queryQl = gql`query GET_ACCESS_TOKEN($userInfo: UserInput!){
            login(userIn: $userInfo){
              access_token
            }
          }`
        const query = provideApolloClient(apolloClient)
            (
                () => useQuery(queryQl, {
                    "userInfo": {
                        "username": username,
                        "password": password
                    }
                })
            );

        query.refetch()?.then((e) => {
            const { data } = e;
            resolve(data);
        });
    });
}

// 获取用户信息
export const getUserInfo = () => {
    const queryQl = gql`query GET_USER_INFO{
        getInfoByToken {
            data {
                username,
                userInfo {
                    name,
                    id,
                    email,
                    header,
                    phone,
                    address,
                    desc
                }
            }
        }
    }`;

    linkReOption.headers.Authorization = `Bearer ${localStorage.getItem('wym_jwt')}` ;

    const query = provideApolloClient(apolloClient)(() => {
        const dd = useQuery(queryQl);
        return dd;
    });
    query.onError((error: ApolloError) => {
        showError(error.message);
    });
    return query.refetch() as Promise<any>;
}