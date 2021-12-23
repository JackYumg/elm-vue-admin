import { appkey } from "@store/";
import { ElButton, ElForm, ElFormItem, ElInput, ElLoading, ElOption, ElSelect } from "element-plus";
import { reactive } from "vue";
import { onMounted } from "vue";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import PassageStyle from './passage.module.scss';
import PassageList from './passageList/Passage-list.page';
export default defineComponent({
    data: () => {
        return {

        }
    },
    setup() {
        const store = useStore(appkey);
        const formData = reactive({
            origin: 'LOCAL',
            name: ''
        });
        const data = reactive(
            {
                origins: [{
                    key: 'SEGMENTFAULT',
                    name: '思否'
                }, {
                    key: 'LOCAL',
                    name: '本站点'
                }, {
                    key: '',
                    name: '全部'
                }
                ],
                pageNo: 1,
                pageSize: 5
            });
        const Options = () => {
            return data.origins.map((e) => {
                return <ElOption label={e.name} value={e.key}></ElOption>;
            });
        };
        const orginChange = (e: any) => {
            formData.origin = e;
        };

        const nameChange = (e: any) => {
            formData.name = e;
        };

        const search = () => {
            store.dispatch('main/passage/getPassageList', { ...data });
        }

        const loadMore = () => {
            data.pageNo++;
            search();
        }
        onMounted(() => {
            search();
        })

        return () => <section>
            <div class={[PassageStyle.passagePage, store.getters['main/passage/passageList'].loading ? 'loading' : '']} >
                <h3>文章列表</h3>
                <section>
                    <ElForm inline={true}>
                        <ElFormItem label={'文章名称'}>
                            <ElInput modelValue={formData.name} onInput={nameChange}></ElInput>
                        </ElFormItem>
                        <ElFormItem label={'来源'}>
                            <ElSelect modelValue={formData.origin} onChange={orginChange}>
                                {Options()}
                            </ElSelect>
                        </ElFormItem>
                        <ElFormItem>
                            <ElButton type={'primary'} onclick={search}>搜索</ElButton>
                        </ElFormItem>
                    </ElForm>
                </section>
            </div >
            <section class={PassageStyle.passageList}>
                <PassageList passages={store.getters['main/passage/passageList'].dataList}></PassageList>
                <section class={PassageStyle.btnLoad}>
                    {store.getters['main/passage/passageList'].total === store.getters['main/passage/passageList'].dataList.length ? [] : <ElButton size={'small'} onclick={loadMore}>加载更多...</ElButton>}
                </section>
            </section>
        </section >
    }
})