import AlTag from "@components/tag/AlTag";
import { ElButton, ElIcon } from "element-plus";
import { reactive } from "vue";
import { defineComponent } from "vue";
import PassageItemStyle from './PassageItem.module.scss';
import moment from 'moment';
import { RouterLink } from "vue-router";
export default defineComponent({
    props: {
        passage: {
            type: Object,
            require: true,
            default: {}
        }
    },
    setup() {
        const [props] = arguments;

        const formDatePipe = (time: string) => {
            let date = new Date(time);
            return moment(date).format('YYYY-MM-DD HH:mm:ss');
        }

        const publishDate = reactive({
            date: formDatePipe(props.passage?.createDate),
            passage: props.passage || {}
        });

        const Header = () => {
            return <div>
                <h4>{publishDate.passage.name}</h4>
                <p>
                    {publishDate.passage.tags.map((tag: any) => {
                        return <AlTag color={tag.color}>{tag.name}</AlTag>
                    })}
                </p>
            </div>;
        }

        const map: any = {
            SEGMENTFAULT: 'https://segmentfault.com/'
        };

        return () => <div class={PassageItemStyle.passageItem}>
            <div class={PassageItemStyle.passageInfo}>
                <section>
                    <Header></Header>
                </section>
                <section>
                    <p>
                        {publishDate.passage.desc}
                    </p>
                </section>

                <section>
                    <div class={PassageItemStyle.publishInfo}>
                        <div class={PassageItemStyle.origin}>
                            发布在&nbsp;
                            <a href={publishDate.passage.originAddr} target="__blank">{map[publishDate.passage.origin]}</a>
                        </div>
                        <div class={PassageItemStyle.time}>
                            {publishDate.date}
                        </div>
                    </div>
                </section>
            </div>
            <div class={PassageItemStyle.passageExtra}>
                <div class={PassageItemStyle.grid}>
                    <div class={PassageItemStyle.p1}>
                        <p>点赞<ElIcon name={'thumb'}></ElIcon></p>
                        <span>1290</span>
                    </div>
                    <div class={PassageItemStyle.p1}>
                        <p>收藏 <ElIcon name={'star-off'}></ElIcon></p>
                        <span>1290</span>
                    </div>
                    <div class={PassageItemStyle.p1}>
                        <RouterLink to={{ name: 'formedit' , path: '/main/passage-form' , params: {id: publishDate.passage.id}}}>修改</RouterLink>
                    </div>
                    <div class={PassageItemStyle.p1}>删除</div>
                </div>
            </div>
        </div>
    }
})