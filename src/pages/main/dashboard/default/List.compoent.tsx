import { ElButton, ElCard } from "element-plus";
import { defineComponent, reactive } from "vue";
import defaultStyle from './Box.module.scss';

export default defineComponent({
    render() {
        const data = reactive({
            activeList: [
                { icon: 'https://ng-alain.surge.sh/assets/tmp/img/1.png', url: '', title: '动漫展会', address: '大学楼二楼1室' },
                { icon: 'https://ng-alain.surge.sh/assets/tmp/img/2.png', url: '', title: '动漫展会', address: '大学楼二楼1室' },
                { icon: 'https://ng-alain.surge.sh/assets/tmp/img/3.png', url: '', title: '动漫展会', address: '大学楼二楼1室' },
                { icon: 'https://ng-alain.surge.sh/assets/tmp/img/4.png', url: '', title: '动漫展会', address: '大学楼二楼1室' },
                { icon: 'https://ng-alain.surge.sh/assets/tmp/img/5.png', url: '', title: '动漫展会', address: '大学楼二楼1室' },
                { icon: 'https://ng-alain.surge.sh/assets/tmp/img/6.png', url: '', title: '动漫展会', address: '大学楼二楼1室' },
            ]
        });
        const slots = {
            header: () => <h3 style={{ margin: 0 }}>活动日程安排</h3>,
        }
        return <ElCard v-slots={slots} class={defaultStyle.listCom}>
            <ul class={defaultStyle.list}>
                {
                    data.activeList.map((active) => {
                        return <li class={defaultStyle.listItem}>
                            <span class={defaultStyle.img}>
                                <img src={active.icon} alt="" />
                            </span>
                            <span class={defaultStyle.txt}>
                                <strong>{active.title}</strong>
                                <p>{active.address}</p>
                            </span>
                            <span class={defaultStyle.extra}>
                                <ElButton size={'small'} type={'text'}>了解详情</ElButton>
                            </span>
                        </li>
                    })
                }
            </ul>
        </ElCard>
    }
})