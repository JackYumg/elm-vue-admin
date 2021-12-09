import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import d from './blog.module.scss';
export default defineComponent({
    render() {
        return <div class={d.blogPage}>
            <RouterView></RouterView>
        </div> 
    }
})