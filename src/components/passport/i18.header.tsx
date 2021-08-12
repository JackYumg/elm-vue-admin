import { ElDropdown, ElDropdownItem, ElDropdownMenu, ElIcon } from "element-plus";
import { defineComponent } from "vue";
import passportStyles from './passport.module.scss';
export default defineComponent({
    components: {
        ElDropdown,
        ElDropdownMenu
    },
    render() {
        const dropLink = () => {
            return <ElIcon class={passportStyles.setting} name={'setting'}></ElIcon>
        }

        const menus = () => {
            <ElDropdownMenu>
                <ElDropdownItem>
                    中文
                </ElDropdownItem>
            </ElDropdownMenu>
        }
        return <div class={passportStyles.header}>
            <ElDropdown class={passportStyles.drowndown} v-slots={{
                dropdown: menus(),
                default: dropLink
            }}>
            </ElDropdown>
        </div>
    }
});