import { defineComponent } from "vue";
import dashboardStyles from './dashboard.module.scss';
import Box1Component from "./anaylze/Box1.component";
import Box2Component from "./anaylze/Box2.component";
import Box3Component from "./anaylze/Box3.component";

export default defineComponent({
    mounted() {
        
    },
    render() {
        return <div class={dashboardStyles.anaylzePage}>
            <Box1Component/>
            <Box2Component/>
            <Box3Component/>
        </div>
    }
})