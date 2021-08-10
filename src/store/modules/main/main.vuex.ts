import { StoreOptions } from "vuex"
export interface MainState {
    menuToggle: boolean
}

const mainState: MainState = {
    menuToggle: false
}

const mainGetter = (state: MainState): MainState => {
    return { menuToggle: state.menuToggle }
}

const mainOption: StoreOptions<MainState> = {
    state: mainState,
    mutations: {
        toggleMenu(state) {
            state.menuToggle = !state.menuToggle;
            return state;
        }
    },
    getters: {
        mainGetter
    }
}


export default mainOption;