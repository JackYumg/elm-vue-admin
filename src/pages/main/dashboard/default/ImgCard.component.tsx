import { ElCard, ElCarousel, ElCarouselItem } from "element-plus";
import { defineComponent } from "vue";
import defaultStyle from './Box.module.scss';
import { useStore } from 'vuex';
import { appkey } from '@store/index';
export default defineComponent({
    mounted() {
        const store = useStore(appkey);
        // store.dispatch('main/getImageList');
    },

    render() {
        const store = useStore(appkey);
        return <ElCard class={defaultStyle.imgCard}>
            <ElCarousel>
                {
                    store.state.main.defaultOption.imageState.images.map((url: string, index: number) => {
                        <ElCarouselItem key={index}>
                            <img src={url} class="image" />
                        </ElCarouselItem>
                    })
                }
            </ElCarousel>
            <h3>{store.state.main.defaultOption.imageState.title}</h3>
            <div class={defaultStyle.desc}>{store.state.main.defaultOption.imageState.desc}</div>
            <p>
                {store.state.main.defaultOption.imageState.context}
            </p>
            <a class={defaultStyle.website}>浏览更多</a>
        </ElCard>
    }
});