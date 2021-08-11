import { defineComponent } from "vue";
import PropTypes from "../../@types/vue-types";
import styles from './Box.component.module.scss';
import util from './../../@utils/props.util';
const propsType = {
    elTitle: PropTypes.VNodeChild,
    extra: PropTypes.VNodeChild
}
export default defineComponent({
    props: propsType,
    render() {
        console.log(this.$props.elTitle);
        const title = util.getComponent(this, 'elTitle');
        const body = util.getComponent(this, 'body');
        const head = (
            <div class={styles.title}>{title}</div>
        );

        const context = <div class={styles.body}>
            {body}
        </div>
        return <div class={styles.boxContainer}>
            {head}
            {context}
        </div>
    }
});