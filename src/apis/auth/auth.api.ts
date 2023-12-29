import { showError } from "@components/elm-plus/ElMessageAlert";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { ApolloError } from "apollo-client";
import { apolloClient } from './../../../src/apollo';
import { getAuthCodeImage } from "@gql/auth.gql";

export function getAuthCodeImageApi(timer: number) {
    const query = provideApolloClient(apolloClient)(() => {
        const dd = useQuery(getAuthCodeImage, { timer: timer.toString() });
        return dd;
    });
    query.onError((error: ApolloError) => {
        showError(error.message);
    });

    return query.refetch()?.then((res) => {
        return res.data.getSmsCoddeImage;
    });
}