import { passageM } from "./passage/passage.vuex";
import { defaultOption } from './defaultPage/defaultPage.vuex';
import { tagM } from "./Tag/tag.vuex";
import { UserInfoModule } from "./user/userinfo.vuex";
interface MainState {
    menuToggle: boolean;
}

const initState: MainState = {
    menuToggle: false
}

const mutations = {
    toggleMenu(state: MainState) {
        state.menuToggle = !state.menuToggle;
    }
}

export const mainM = {
    namespaced: true,
    state: () => initState,
    mutations,
    modules: {
        passage: passageM,
        tag: tagM,
        defaultOption,
        userInfo: UserInfoModule
    }
}

