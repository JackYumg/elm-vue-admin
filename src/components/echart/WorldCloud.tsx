import { defineComponent } from "vue";
import * as echarts from 'echarts';
import 'echarts-wordcloud';
import wcStyle from './WorldCloud.module.scss';
import { worldOption } from "./worldCloud.option";
import { onMounted } from "vue";
export default defineComponent({
    props: {
        tags: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            isInited: false,
            option: {} as any
        }
    },
    watch: {
        tags(newV, oldV) {
            if (this.isInited) {

            } else {
                // 不管
            }
        }
    },
    methods: {
        reset(tags: []){
           
        }
    },
    setup() {
        onMounted(() => {
            const div = document.getElementById('world');
            const instance1 = echarts.init(div as HTMLDivElement);
            instance1.setOption(worldOption as any);
        });
    },
    render() {
        return <div class={wcStyle.size} id="world" ref={'world'}>1</div>
    }
});