import { defineComponent } from "vue";
import passportClasses from './passport.module.scss';
import i18Header from "@components/passport/i18.header";
import { RouterView } from "vue-router";
import GloableFooter from '@components/global/global.footer';
export default defineComponent({
    components: {
        i18Header,
        GloableFooter
    },
    render() {
        return <div class={passportClasses.container}>
            <i18Header></i18Header>
            <div class={passportClasses.wrap}>
                <div class={passportClasses.top}>
                    <div class={passportClasses.head}>
                        <img src="" alt="" />
                        <span class={passportClasses.title}>Vue-Elm-Admin</span>
                    </div>
                    <div class={passportClasses.desc}>
                        学习中
                    </div>
                </div>
                <RouterView></RouterView>
                <div class={passportClasses.footer}>
                    <GloableFooter></GloableFooter>
                </div>
            </div>
        </div>
    }
})