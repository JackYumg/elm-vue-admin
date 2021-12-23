import PassageItem from "@components/passage/PassageItem";
import { defineComponent, reactive } from "vue";
import PassageListStyle from './passage-list.module.scss';
export default defineComponent({
    props: {
        passages: {
            default: []
        }
    },
    render() {
        const props = this.$props;
        return <div>
            {props.passages.map((item: any) => {
                return <PassageItem class={PassageListStyle.passageItem} passage={item}></PassageItem>
            })}
        </div>
    }
})