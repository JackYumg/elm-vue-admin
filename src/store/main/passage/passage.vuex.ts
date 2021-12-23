import { provideApolloClient, useQuery, useQueryLoading, useResult } from "@vue/apollo-composable";
import { passageList } from "@gql/passage.gql";
import { apolloClient } from "./../../../apollo";
import { watch } from "vue";

interface PasageState {
    dataList: any[],
    total: number,
    loading: boolean;
}

const initState: PasageState = {
    dataList: [],
    total: 0,
    loading: false
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
    }
}

const mutations = {
    getPassageListSuccess(state: PasageState, payload: any) {
        state.dataList = [...state.dataList , ...payload.data];
        state.total = payload.total;
        state.loading = payload.loading;
    },
    searching(state: PasageState, payload: any) {
        state.loading = payload.loading;
    }
}

export const passageM = {
    getters: {
        passageList: (state: any) => {
            return state;
        }
    },
    namespaced: true,
    state: () => initState,
    actions,
    mutations
}