import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { mainM } from './main/main.vuex';
export const store = {
    namespaced: true,
    modules: {
        main: mainM
    },
    mutations: {
    },
    actions: {
    }
}
export class StoreOptionIn extends Store<any> {
}
export const appkey: InjectionKey<StoreOptionIn> = Symbol()

export const rootStore: StoreOptionIn = createStore(store);