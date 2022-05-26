import { showError } from "@components/elm-plus/ElMessageAlert";
import { getPassageById } from "@gql/passage.gql";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { ApolloError } from "apollo-client";
import { apolloClient } from './../../../src/apollo';

export function getPassageInfoById(id: number): Promise<any> {
    const query = provideApolloClient(apolloClient)(() => {
        const dd = useQuery(getPassageById, { id });
        return dd;
    });
    query.onError((error: ApolloError) => {
        showError(error.message);
    });

    return query.refetch() as Promise<any>;
}
