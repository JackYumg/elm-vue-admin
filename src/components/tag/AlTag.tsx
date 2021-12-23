import { computed, defineComponent } from "vue";
import TagStyles from  './tag.module.scss';
export default defineComponent({
    props: {
        type: {
            type: String,
            values: ['success', 'info', 'warning', 'danger', ''],
            default: ''
        },
        bordered: Boolean,
        color: {
            type: String,
            default: '',
        },
        size: {
            type: String,
            values: ['large', 'default', 'small'],
        },
        effect: {
            type: String,
            values: ['dark', 'light', 'plain'],
            default: 'light',
        },
    },
    setup(props, { emit , slots }) {
        // const slots = util.getSlots(this);
        // console.log(slots);
        const classes = computed(() => {
            const { type, bordered, effect, size } = props
            return [
                'al-tag',
                type ? `al-tag-${type}` : '',
                size ? `al-tag-${size}` : '',
                effect ? `al-tag-${effect}` : '',
                bordered && 'is-bordered',
            ]
        });

        return () => <span class={TagStyles.alTag}>
            {slots.default ? slots.default(): ''}
        </span>
    }
});