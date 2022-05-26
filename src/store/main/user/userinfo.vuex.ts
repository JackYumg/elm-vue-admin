import { getUserInfo } from './../../../apis/passport/passport.api';
import { Action } from 'vuex';
const initState = {
    userInfo: {}
};
type InitState = {
    userInfo: Object
}
const actions: { [key: string]: Action<string, Function> } = {
    getUserInfoData(context: any) {
        getUserInfo().then(({ data }) => {
            const { getInfoByToken } = data;
            context.commit( 'dataChange' , getInfoByToken.data);
        });
    }
}

const mutations = {
    dataChange(state: InitState, payload: any) {
        state.userInfo = payload;
        console.log(payload);
    }
}

export const UserInfoModule = {
    getters: {
        userInfo: (state: InitState) => {
            return state.userInfo;
        }
    },
    namespaced: true,
    state: () => initState,
    actions,
    mutations
}