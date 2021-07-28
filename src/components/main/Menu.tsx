import { ElIcon, ElMenu, ElMenuItem, ElMenuItemGroup, ElSubmenu } from "element-plus";
import { defineComponent } from "vue";
import { ElMenuGroupIn, ElMenuIn } from "../../@types/menu";
import { menus } from "./Menu.data";
import mainStyles from './main.module.scss';
export default defineComponent({
    render() {
        return <ElMenu class={mainStyles.menu}>
            {
                this.buildMenus(menus)
            }
        </ElMenu>
    },
    methods: {
        buildMenus(menus: ElMenuGroupIn[] = []) {
            const getTitle = (menu: ElMenuIn) => {
                <span>
                    {menu.icon ? <ElIcon name={menu.icon} /> : ''}
                    {menu.title}
                </span>
            }
            return menus.map((group) => {
                return <ElMenuItemGroup title={group.title} key={group.title}>
                    {
                        group.menus.map((menu, index) => {
                            return <ElSubmenu index={index.toString()} v-slots={{
                                title: <span>
                                    <ElIcon name={menu.icon} />
                                    {menu.title}
                                </span>,
                            }}>
                                {
                                    menu.children.map((subMenu, itemIndex) => {
                                        return <ElMenuItem key={itemIndex} index={itemIndex.toString()}>
                                            {subMenu.title}
                                        </ElMenuItem>
                                    })
                                }
                            </ElSubmenu>
                        })
                    }
                </ElMenuItemGroup>
            });
        }
    }
})