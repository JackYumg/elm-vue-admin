import { provideApolloClient, useQuery, useResult } from '@vue/apollo-composable';
import { getPassageById, passageList } from "@gql/passage.gql";
import { apolloClient } from "./../../../apollo";
import { watch } from "vue";
import { ActionContext } from 'vuex';
import { getPassageInfoById } from '@apis/passage/passage.api';

interface PasageState {
    dataList: any[],
    total: number,
    loading: boolean;
    info: any;
}

const initState: PasageState = {
    dataList: [],
    total: 0,
    loading: false,
    info: {}
}

const actions = {
    getPassageList(context: any, payload: any) {
        context.commit(mutations.searching.name, { loading: true });
        const queryClient = provideApolloClient(apolloClient);
        const queryFn = () => useQuery(passageList, () => ({
            pageoption: {
                pageNo: payload.pageNo,
                pageSize: payload.pageSize,
                queryOption: payload.queryOption
            }
        }));
        const query = queryClient(queryFn);
        const res = useResult(query.result, {});
        watch(res, (e) => {
            const { data, total } = e;
            context.commit(mutations.getPassageListSuccess.name, { data, total });
            context.commit(mutations.searching.name, { loading: false });
        });
    },
    savePassage(context: ActionContext<PasageState, any>, payload: any) {

    },
    getPassageDetail(context: ActionContext<any, any>, payload: number) {
        getPassageInfoById(payload).then(({ data }) => {
            const { passageDetail } = data;
            context.commit(mutations.passageDetail.name, passageDetail.info);
        });
    }
}

const mutations = {
    getPassageListSuccess(state: PasageState, payload: any) {
        state.dataList = [...state.dataList, ...payload.data];
        state.total = payload.total;
        state.loading = payload.loading;
    },
    searching(state: PasageState, payload: any) {
        state.loading = payload.loading;
    },
    passageDetail(state: PasageState , payload: any) {
        state.info = payload;
    }
}

export const passageM = {
    getters: {
        passageList: (state: any) => {
            return state;
        },
        passageDetail: (state: PasageState) => {
            return state.info;
        }
    },
    namespaced: true,
    state: () => initState,
    actions,
    mutations
}