import TagSelect from "@components/TagSelect/TagSelect";
import { appkey } from "@store/";
import { ElForm, ElFormItem, ElInput, ElRow, ElCol, ElButton, ElIcon } from "element-plus";
import { defineComponent, onMounted, reactive, toRef } from 'vue';
import { useStore } from "vuex";
import styles from './passage-form.module.scss';
import Editor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

export default defineComponent({
    props: {
        name: {
            type: String
        },
        id: {
            type: String
        }
    },
    data: () => {
        return {
            pid: ''
        }
    },
    render() {
        const store = useStore(appkey);
        const { id } = this.$route.params;
        let tags = [];
        this.$data.pid = id as string;
        const passageItem = reactive({
            title: '',
            content: '99999'
        });
        const titleChange = (title: string) => {
            passageItem.title = title;
        }
        if (id) {
            tags = store.getters['main/passage/passageDetail']?.tags;
        } else {
            tags = store.getters['main/tag/passageList']?.tags;
        }
        const tagValueChange = (data: any[]) => {
            console.log(data);
        }

        const contentValueChange = (e: string) => {
            passageItem.content = e;
        }

        const saveDoc = () => {
            store.dispatch('main/passage/savePassage' , {
                passage: {...passageItem , name: passageItem.title}
            } );
        }

        const back = () => {
            history.back();
        }

        return <div>
            <ElForm>
                <ElRow>
                    <ElCol span={24}>
                        <ElFormItem>
                            <ElInput modelValue={passageItem.title} onInput={titleChange}></ElInput>
                        </ElFormItem>
                    </ElCol>
                </ElRow>
                <ElRow class={styles.rowMargin}>
                    <ElCol>
                        <ElFormItem>
                            <TagSelect change={tagValueChange} options={tags}></TagSelect>
                        </ElFormItem>
                    </ElCol>
                </ElRow>
                <ElRow>
                    <ElCol>
                        <ElFormItem>
                            <Editor modelValue={passageItem.content} onChange={contentValueChange} />
                        </ElFormItem>
                    </ElCol>
                </ElRow>
                <ElRow>
                    <ElCol offset={10} span={2} style={{ 'text-alain': 'center' }}>
                        <ElFormItem>
                            <ElButton onClick={saveDoc} type={'primary'}>
                                保存文档</ElButton>
                        </ElFormItem>
                    </ElCol>
                    <ElCol offset={0} span={2} style={{ 'text-alain': 'center' }}>
                        <ElFormItem>
                            <ElButton onClick={back}>返回</ElButton>
                        </ElFormItem>
                    </ElCol>
                </ElRow>
            </ElForm>
        </div>
    }
})