import { tagListData } from '@gql/tag.gql';
import { provideApolloClient, useQuery, useResult } from '@vue/apollo-composable';
import { apolloClient } from "./../../../apollo";
import { watch } from 'vue';

const initState = {};
type InitState = {
    tags: []
}
const actions = {
    getTagList(context: any){
        const queryClient = provideApolloClient(apolloClient);
        const queryFn = () => useQuery(tagListData);
        const query = queryClient(queryFn);
        const res = useResult(query.result, {});
        watch(res, (e) => {
            const { tagList, total } = e;
            context.commit(mutations.dataChange.name , tagList);
        });
    }
}

const mutations = {
    dataChange(state: InitState , payload: any){
        state.tags = payload;
    }
}

export const tagM = {
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