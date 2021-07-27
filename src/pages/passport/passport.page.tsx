import { defineComponent } from "vue";
import { ElAside, ElContainer, ElFooter, ElHeader, ElMain } from 'element-plus';
import passportClasses from './passport.module.scss';
import i18Header from "../../components/passport/i18.header";
import { RouterView } from "vue-router";
export default defineComponent({
    components: {
        i18Header
    },
    render() {
        return <div class={passportClasses.container}>
            <i18Header></i18Header>
            <RouterView></RouterView>
            <div class={passportClasses.wrap}>

            </div>
        </div>
    }
})