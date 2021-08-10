import { ElCol, ElIcon, ElRow } from "element-plus";
import { defineComponent } from "vue";
import dashboardStyles from './dashboard.module.scss';
import BoxComponent from './default/Box.component';
export default defineComponent({
    components: {
        BoxComponent
    },
    render() {
        return <div class={dashboardStyles.defaultPage}>
            <div class={dashboardStyles.nav}>
                <h1> Dashboard <br />
                    <small>Welcome !</small></h1>
            </div>
            <BoxComponent />
        </div>
    }
})