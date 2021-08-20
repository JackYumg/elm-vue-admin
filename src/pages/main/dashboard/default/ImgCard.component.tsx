import { ElCard, ElCarousel, ElCarouselItem } from "element-plus";
import { defineComponent } from "vue";
import defaultStyle from './Box.module.scss';
import { useStore } from 'vuex';
import { appkey } from '@store/index';
export default defineComponent({
    mounted() {
        const store = useStore(appkey);
        store.dispatch('getImageList');
    },

    render() {
        const store = useStore(appkey);
        console.log(store.state.main.defaultM)
        return <ElCard class={defaultStyle.imgCard}>
            <ElCarousel>
                {
                    store.state.main.defaultM.imageState.images.map((url: string, index: number) => {
                        <ElCarouselItem key={index}>
                            <img src={url} class="image" />
                        </ElCarouselItem>
                    })
                }
            </ElCarousel>
            <h3>{store.state.main.defaultM.imageState.title}</h3>
            <div class={defaultStyle.desc}>{store.state.main.defaultM.imageState.desc}</div>
            <p>
                {store.state.main.defaultM.imageState.context}
            </p>
            <a class={defaultStyle.website}>浏览更多</a>
        </ElCard>
    }
});