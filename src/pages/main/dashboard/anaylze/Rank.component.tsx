import { defineComponent, reactive } from "vue";
import anaylzeStyles from './anaylze.module.scss';

export default defineComponent({
    props: {
        title: {
            type: String,
            default: '标题'
        }
    },
    render() {
        const state = reactive({
            dataList: [
                { name: 'admin1', count: 1212, index: 1 },
                { name: 'admin2', count: 543, index: 2 },
                { name: 'admin3', count: 232, index: 3 },
                { name: 'admin4', count: 345, index: 4 },
                { name: 'admin5', count: 23232, index: 5 },
                { name: 'admin6', count: 323, index: 6 },
                { name: 'admin7', count: 23, index: 7 },
            ]
        })
        return <div class={anaylzeStyles.rank}>
            <div class={anaylzeStyles.rankTitle}>
                <h4>{this.$props.title}排名</h4>
            </div>
            <div class={anaylzeStyles.rankList}>
                <ul>
                    {
                        state.dataList.map((item) => {
                            return <li>
                                <span class={[anaylzeStyles.number , item.index < 4 ? anaylzeStyles.active : '']}>{item.index}</span>
                                <span class={anaylzeStyles.title}>{item.name}</span>
                                <span class={anaylzeStyles.value}>{item.count}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    }
});