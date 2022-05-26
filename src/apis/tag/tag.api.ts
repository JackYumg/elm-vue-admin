import { showError } from "@components/elm-plus/ElMessageAlert";
import { tagListData } from "@gql/tag.gql";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { ApolloError } from "apollo-client";
import { apolloClient } from "./../../../src/apollo";

export const getAllTags = () => {
    const query = provideApolloClient(apolloClient)(() => {
        const dd = useQuery(tagListData);
        return dd;
    });
    query.onError((error: ApolloError) => {
        showError(error.message);
    });
    return query.refetch() as Promise<any>;
}