import { defineComponent } from "vue";
import tagPageStyle from './tag.module.scss';
import { appkey } from '@store/';
import { useStore } from "vuex";
import WorldCloud from "@components/echart/WorldCloud";

export default defineComponent({
    mounted() {
        const store = useStore(appkey);
        store.dispatch('main/tag/getTagList');
    },
    render() {
        const store = useStore(appkey);
        const tags = store.getters['main/tag/passageList']?.tags;
        return <div class={tagPageStyle.tagPage}>
            <WorldCloud tags={tags} />
            <div class={tagPageStyle.worldCloud} ref={'world'}></div>
        </div>
    }
})