import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { rootModule } from "./modules";
import mainMutations from "./mutations"
export const store = {
    namespaced: true,
    modules: {
        ...rootModule
    },
    mutations: {
        ...mainMutations
    }
}
export class StoreOptionIn extends Store<any> {
    main?: any
}
export const appkey: InjectionKey<StoreOptionIn> = Symbol()

export const rootStore: StoreOptionIn = createStore(store);