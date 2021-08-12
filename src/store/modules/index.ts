import { StoreOptions } from 'vuex';
import mainOption, { MainState } from './main/main.vuex';
interface RootModule {
    main: StoreOptions<MainState>
}
export const rootModule: RootModule = {
    main: mainOption,
}