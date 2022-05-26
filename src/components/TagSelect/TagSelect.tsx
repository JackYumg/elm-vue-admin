import { isEnterEvent } from "@utils/event";
import { ElIcon, ElInput, ElPopover, ElTag } from "element-plus";
import { defineComponent, reactive, toRef, defineEmits } from "vue";
import tagSelectStyle from './tag-select.module.scss';
import { TagListSelectEvent, tagSelectEvents } from "./tagSelectType";
export default defineComponent({
    props: {
        options: {
            type: Array,
            default: []
        },
        limit: {
            type: Number,
            default: 5
        },
        ...TagListSelectEvent
    },
    data: () => {
        return {
            selected: [] as any[]
        }
    },
    render() {
        const { $props: props, $data: data, $emit: emit } = this;
        const traggerSouce = () => {
            return <ElTag type={'info'}>
                <ElIcon name={'plus'}></ElIcon>
                添加标签
            </ElTag>;
        };

        const tag = reactive({
            targetName: ''
        });

        const limit = toRef(props, 'limit');
        const options = toRef(props, 'options');
        const selected = toRef(data, 'selected');

        // 选中一个标签
        const checkApi = (item: any) => {
            const e = item;
            return () => {
                if (selected.value.includes(e)) {
                    // do nothing
                } else {
                    selected.value.push(e);
                    emit('change', selected.value);
                }
            }
        }

        // 选中的标签
        const SelectedTagList = () => {
            // 处理删除
            const handleClose = (index: number) => {
                return () => {
                    if (selected.value[index]) {
                        (selected.value as any[]).splice(index, 1);
                        emit('change', selected.value);
                    }
                }
            }
            return selected.value.map((item: any, index: number) => {
                return <ElTag onClose={handleClose(index)} closable={true} class={[tagSelectStyle.tagItem, tagSelectStyle.tagItemFirst]} type={'info'}>{item.name}111</ElTag>
            });
        }

        // 添加按钮
        const AddTagBtn = () => {

            // 目标输入事件
            const tagInputChange = (e: string) => {
                tag.targetName = e;
            }

            // 键盘事件
            const keydownEvent = (e: KeyboardEvent) => {
                if (isEnterEvent(e)) {
                    selected.value.push({
                        name: tag.targetName
                    });
                    tag.targetName = '';
                }
            }

            return selected.value.length < limit.value ? (
                <ElPopover
                    width={300}
                    placement={'bottom-start'}
                    trigger={'click'}
                    v-slots={{ reference: traggerSouce }}>
                    <p>还可添加 {limit.value - selected.value.length} 个</p>
                    <ElInput modelValue={tag.targetName} onInput={tagInputChange} onKeydown={keydownEvent}></ElInput>
                    {
                        DataSet()
                    }
                </ElPopover>
            ) : []
        };

        // 弹出框标签集合
        const DataSet = () => {
            return <div class={tagSelectStyle.tagListContainer}>
                {options.value.map((item: any) => {
                    return <ElTag type={'default'} onclick={checkApi(item)} onKeyup={() => {
                        console.log(11);
                    }}>{item.name}</ElTag>
                })}
            </div>
        }

        return <div class={tagSelectStyle.tagSelectContainer}>
            {
                SelectedTagList()
            }
            {
                AddTagBtn()
            }

        </div>
    }
});